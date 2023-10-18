from datetime import timedelta,datetime
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from airflow.utils.dates import days_ago
import pandas as pd
import sqlite3
import os

dag_path = os.getcwd()

def convertir_fecha(fecha_str):

    if fecha_str == '':
        return None
    try:
        fecha = datetime.strptime(fecha_str, '%Y/%m/%d')
        return fecha
    except ValueError:
        try:
            fecha = datetime.strptime(fecha_str, '%Y-%m-%d')
            return fecha
        except ValueError:
            return None

def transform_data():
    booking = pd.read_csv(f"{dag_path}/raw_data/booking.csv", low_memory=False)
    client = pd.read_csv(f"{dag_path}/raw_data/client.csv", low_memory=False)
    hotel = pd.read_csv(f"{dag_path}/raw_data/hotel.csv", low_memory=False)

    # merge booking with client
    data = pd.merge(booking, client, on='client_id')
    data.rename(columns={'name': 'client_name', 'type': 'client_type'}, inplace=True)

    # merge booking, client & hotel
    data = pd.merge(data, hotel, on='hotel_id')
    data.rename(columns={'name': 'hotel_name'}, inplace=True)

    # make date format consistent
    data['booking_date'] = data['booking_date'].apply(convertir_fecha)

    # make all cost in GBP currency
    data.loc[data.currency == 'EUR', ['booking_cost']] = data.booking_cost * 0.8
    data.currency.replace("EUR", "GBP", inplace=True)

    print(data)
    # remove unnecessary columns
    data = data.drop(columns='address',axis=1)

    #create folder if it does not exist
    if not os.path.exists(f"{dag_path}/processed_data"):
        os.makedirs(f"{dag_path}/processed_data")

    # load processed data
    data.to_csv(f"{dag_path}/processed_data/processed_data.csv", index=False)


def load_data():
    conn = sqlite3.connect("/usr/local/airflow/db/datascience.db")
    c = conn.cursor()
    c.execute('''
                CREATE TABLE IF NOT EXISTS booking_record (
                    client_id INTEGER NOT NULL,
                    booking_date TEXT NOT NULL,
                    room_type TEXT(512) NOT NULL,
                    hotel_id INTEGER NOT NULL,
                    booking_cost NUMERIC,
                    currency TEXT,
                    age INTEGER,
                    client_name TEXT(512),
                    client_type TEXT(512),
                    hotel_name TEXT(512)
                );
             ''')
    records = pd.read_csv(f"{dag_path}/processed_data/processed_data.csv")
    records.to_sql('booking_record', conn, if_exists='replace', index=False)


# initializing the default arguments that we'll pass to our DAG
default_args = {
    'owner': 'airflow',
    'start_date': days_ago(5)
}

ingestion_dag = DAG(
    'booking_ingestion',
    default_args=default_args,
    description='Aggregates booking records for data analysis',
    schedule_interval=timedelta(hours=1), #'@daily',
    catchup=False
)

task_1 = PythonOperator(
    task_id='transform_data',
    python_callable=transform_data,
    dag=ingestion_dag,
)


task_2 = PythonOperator(
    task_id='load_data',
    python_callable=load_data,
    dag=ingestion_dag,
)

# task_download_from_s3 = PythonOperator(
#     task_id = 'download_from_s3',
#     python_callable = download_from_s3,
#     op_kwargs = {
#         'booking': 'booking.csv',
#         'client':'client.csv',
#         'hotel':'hotel.csv',
#         'bucket_name':'my-bucket-2206',
#         'local_path': '/usr/local/airflow/raw_data/'
#     }
# )

task_1 >> task_2