from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from airflow.utils.dates import days_ago
from datetime import datetime
import requests

def imprimir_bienvenida():
    print('Bienvenido a Airflow!')

def imprimir_fecha():
    print('Hoy es {}'.format(datetime.today().date()))

def imprimir_cita_random():
    response = requests.get('https://api.quotable.io/random')
    cita = response.json()['content']
    print('Cita del día: "{}"'.format(cita))

dag = DAG(
    'welcome_dag',
    default_args={'start_date': days_ago(1)},
    schedule_interval='0 22 * * *',
    catchup=False
)

task_imprimir_bienvenida = PythonOperator(
    task_id='imprimir_bienvenida',
    python_callable=imprimir_bienvenida,
    dag=dag
)

task_imprimir_fecha = PythonOperator(
    task_id='imprimir_fecha',
    python_callable=imprimir_fecha,
    dag=dag
)

task_imprimir_cita_random = PythonOperator(
    task_id='imprimir_cita_random',
    python_callable=imprimir_cita_random,
    dag=dag
)
# Set the dependencies between the tasks
task_imprimir_bienvenida >> task_imprimir_fecha >> task_imprimir_cita_random

