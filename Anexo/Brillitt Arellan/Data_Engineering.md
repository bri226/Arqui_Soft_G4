# Ingeniería de Datos

## 1. Desarrollo Conceptual

### 1.1. Concepto
La ingeniería de datos es el proceso de recopilar, almacenar y preparar datos para que puedan ser utilizados por otros especialistas en una organización. Los ingenieros de datos son los responsables de diseñar y construir sistemas que permitan a las empresas recopilar datos de diversas fuentes, almacenarlos de forma eficiente y prepararlos para su análisis.

### 1.2. Etapas del flujo de Ingeniería de Datos

El procedimiento de ingeniería de datos engloba una secuencia de operaciones destinadas a convertir una extensa cantidad de datos en bruto en un producto funcional que cumple con los requisitos de analistas, científicos de datos e ingenieros de aprendizaje automático, entre otros. Generalmente, el flujo de trabajo completo consta de las siguientes etapas.

- **La fase de ingestión de datos (adquisición):** Transfiere los datos desde diversas fuentes, como bases de datos SQL y NoSQL, dispositivos IoT, sitios web, servicios de streaming, etc., hacia un sistema de destino para ser procesados posteriormente. Los datos presentan diversas formas y pueden ser tanto estructurados como no estructurados.

- **La fase de transformación de datos**: Adapta los datos heterogéneos a las necesidades de los usuarios finales. Esto implica la eliminación de errores y duplicados, la normalización y la conversión al formato requerido.

- **La fase de distribución de datos**: Distribuye los datos transformados a los usuarios finales, ya sea a través de una plataforma de BI, un panel de control o un equipo de ciencia de datos.

- **La orquestación del flujo de datos** proporciona visibilidad en el proceso de ingeniería de datos, garantizando que todas las tareas se completen con éxito. Coordina y realiza un seguimiento continuo de los flujos de trabajo de datos para detectar y solucionar problemas de calidad y rendimiento de los datos.

### 1.3. Data Pipeline

Un *data pipeline* combina herramientas y operaciones que mueven datos de un sistema a otro para su almacenamiento y posterior tratamiento. Construir y mantener *data pipelines* es la principal responsabilidad de los ingenieros de datos. Entre otras cosas, escriben secuencias de comandos para automatizar tareas repetitivas.

Normalmente, los *pipelines* se utilizan para:

- la migración de datos entre sistemas o entornos (de bases de datos locales a bases de datos en la nube).
- gestión de datos o conversión de datos sin procesar en un formato utilizable para proyectos de análisis, BI y aprendizaje automático.
- integración de datos de varios sistemas y dispositivos IoT.
- copia de tablas de una base de datos a otra.


<img src="../img/pipeline.jpg" width="80%"/>

### 1.4. Apache Airflow

Apache Airflow es una herramienta de orquestación de flujos de trabajo que se ha vuelto esencial en el ámbito de la ingeniería de datos. En proyectos de data engineering, la gestión y ejecución de flujos de datos complejos, que involucran extracción, transformación y carga (ETL) de datos, se vuelve crucial para garantizar la integridad y eficiencia del pipeline.

Airflow permite la definición y programación de flujos de trabajo ETL de manera eficiente, ayudando a coordinar y ejecutar tareas de extracción, transformación y carga de datos de manera estructurada y automatizada.

Algunos conceptos básicos de Airflow son:

- **DAG (Directed Acyclic Graph)**: Un DAG es un gráfico dirigido acíclico que representa el flujo de trabajo en Airflow. Cada nodo en el gráfico representa una tarea, y las aristas definen las dependencias entre las tareas.

- **Tarea (Task)**: Una tarea en Airflow es una unidad de trabajo individual en el contexto de un DAG. Puede ser cualquier operación o conjunto de operaciones, como ejecutar un script, realizar una consulta a una base de datos, enviar un correo electrónico, etc.

- **Operador (Operator)**: Un operador define la lógica de una tarea específica. Hay operadores predefinidos para tareas comunes (por ejemplo, PythonOperator, BashOperator, SQLOperator), y los usuarios pueden crear sus propios operadores personalizados.

- **Scheduler**: El scheduler es el componente de Airflow que programa las ejecuciones de las tareas de acuerdo con sus dependencias y horarios definidos en el DAG.


## 2. Consideraciones Técnicas

Algunos prerrequisitos a tener instalados son:
- Visual Studio Code
- Docker Desktop
- La extensión de Docker en VS Code
- La extensión de Python en VS Code

### 2.1. Instalación / Configuración de Servicio
Actualmente, Apache Airflow no es directamente compatible con Windows, como se explicará más adelante, por lo que vamos a utilizar la tecnología de contenedores para desplegarlo, en este caso, Docker.

La documentación de Apache Airflow se encuentra en el siguiente link: [Apache Airflow Documentation](https://airflow.apache.org/docs/)
Para más información de cómo ejecutar Airflow en Docker, ir a este link: [Runnind Airflow in Docker](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html).

#### PASO 1: Actualizar el Subsistema de Windows para Linux
Apache Airflow es compatible con Windows solo a través de WSL (Windows Subsystem for Linux). WSL es una capa de compatibilidad que permite ejecutar aplicaciones de Linux en Windows.

Al actualizar el WSL, se actualiza el kernel de Linux que se usa con WSL. El kernel es el componente central de un sistema operativo Linux, y es el responsable de la gestión de los recursos del hardware y de la ejecución de los procesos.

En una línea de comandos de cmd, ejecutar:

```
> wsl --update
```

#### PASO 2: CREAR UN PROYECTO

Los pasos para crear un proyecto son:
1. Crear una carpeta vacía y abrirla en el espacio de trabajo de Visual Studio Code.
2. **Visual Studio**: 

    2.1. Crear un archivo llamado: *dockerfile* y colocar el siguiente código, que es básico para cualquier proyecto:

    ```dockerfile
    FROM apache/airflow:latest

    USER root
    RUN apt-get update && \
        apt-get -y install git && \
        apt-get clean

    USER airflow
    ```

    Este archivo Dockerfile crea una imagen de Docker que se basa en la imagen oficial de Apache Airflow más reciente, instala el paquete git y cambia el usuario predeterminado a Airflow. La documentación de la imagen de Apache Airflow en Docker se encuentra en el siguiente link: [Docker Image for Apache Airflow](https://airflow.apache.org/docs/docker-stack/index.html)

    2.2. Construir la imagen de Apache Airflow. Clic derecho al archivo *dockerfile* y clic en "Build Image"

    La consola mostrará lo siguiente:

    <img src="../img/construccion_imagen.png" width="100%"/>


    2.3. Crear el archivo docker-compose.yaml

    ```yaml
    version: '3'
    services:
    airflow:
        image: airflow:latest
    
        volumes:
        - ./airflow:/opt/airflow

        ports:
        - "8080:8080"

        command: airflow standalone
    ```
    Este código de docker-compose.yaml define un servicio llamado airflow que utiliza la última versión de la imagen oficial de Docker de Apache Airflow. El servicio monta el directorio local ./airflow en el directorio /opt/airflow dentro del contenedor y expone el puerto 8080 del contenedor al host local (http://localhost:8080). El comando airflow standalone se ejecuta para iniciar Airflow en modo independiente.

    
    2.4. Abrir Docker Desktop y ejecutar Docker-Compose en la consola de VS Code.


    ```
    docker-compose up -d
    ```

    Se generará un árbol de archivos con la siguiente estructura:

    <img src="../img/arbol-airflow.png" width="40%"/>


    2.5. En  Docker Desktop, ir al contenedor en ejecución y ejecutar el contenedor en el navegador (http://localhost:8080⁠)

    <img src="../img/login-airflow.png" width="100%"/>

    El usuario es **admin** y la contraseña se encuentra en el archivo standalone_admin_password.txt. Se muestra a continuación la interfaz de Airflow.

    <img src="../img/interfaz-airflow.png" width="100%"/>


### 2.2. Primeros pasos

Para crear el primer DAG, en el código de Visual Studio, podemos crear una carpeta **dags**, y crear un código como el siguiente, que lo único que hará será mostrar un mensaje. Definimos funciones en python, que se llaman *Python Callables*, creamos un objeto DAG:, en la que definimos el intervalo de fechas en el que se va a ejecutar el flujo y cuándo iniciaría. En este caso, está programado para ser ejecutado todos los días a las 10 de la noche.

``` python
dag = DAG(
    'welcome_dag',
    default_args={'start_date': days_ago(1)},
    schedule_interval='0 22 * * *',
    catchup=False
)
``` 

Los *Tasks* funcionan en base a *Operators*. 

```python
task_imprimir_fecha = PythonOperator(
    task_id='imprimir_fecha',
    python_callable=imprimir_fecha,
    dag=dag
)
```

Finalmente, se ordenan los *Tasks* de acuerdo con el flujo de inicio a fin.

```python
task_imprimir_bienvenida >> task_imprimir_fecha >> task_imprimir_cita_random
```

Reiniciar el contenedor con el comando: 

``` 
docker-compose restart
```

En el localhost:8080, se mostrará el dag en la lista de dags:

<img src="../img/primer_dag.png" width="100%"/>

Para ejecutarlo, se enciende el dag en el botón que se encuentra a la izquierda del nombre del dag, y se da click en Play en la sección de *Actions*.

Para ver la ejecución, hacemos clic en el nombre del dag, y nos vamos a la sección Graph.

<img src="../img/ejecucion_dag.png" width="100%"/>

Gráficamente, se observa que el flujo se compone de tres grafos. Ahora, este no es un proceso de ETL, es un flujo de prueba. La ejecución en este caso fue exitosa. Para ver los resultados de cada grafo, hacemos clic en cada uno y revisamos los logs. El tercer grafo, el cual se encarga de jalar citas de una API e imprimir una aleatoriamente, muestra en los logs una cita random, ya que todo se ejecutó correctamente.

<img src="../img/task_prueba_log.png" width="100%"/>


## 3. Demo

### 3.1. Escenario práctico
Para el caso práctico, se usarán tres csvs que contienen información acerca de reservas de hotel, información de cliente y información del hotel, se va a procesar esta data para crear un consolidado y almacenar esa información en otra carpeta.

El primer csv se llama booking.csv y contiene las siguientes columnas:
- client_id
- booking_date
- room_type
- hotel_id
- booking_cost
- currency

El segundo csv se llama client.csv y contiene las siguientes columnas:
- client_id
- age
- name

El tercer csv se llama hotel.csv y contiene las siguiente columnas:
- hotel_id
- name
- address

Para procesar la data, se cruzarán las tablas de acuerdo con lo siguiente:
- booking - client : client_id
- booking - hotel: hotel_id

### 3.2. Pasos para la demo

En la carpeta dag, creamos un archivo py que contendrá el siguiente código:

Importamos las siguientes librerías

```python
from datetime import timedelta,datetime
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from airflow.utils.dates import days_ago
import pandas as pd
import sqlite3
import os
```

El dag se compondrá de dos tasks: transform data, load data.

El transform_data recoge la información de los csv, realiza los cruces entre tablas, transforma el formato de los datos, por ejemplo, convierte las cadenas a fecha o a entero o a float, convierte también el tipo de moneda, elimina columnas innecesarias y almacena el csv consolidado en una ruta.

```python
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
```

La función load_data carga la data del csv a un instancia de base de datos en SQLite (recomendado para pruebas pero no para entornos de producción). 

```python
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

```

Se crea el dag para que se ejecute de manera diaria cada hora:

```python
ingestion_dag = DAG(
    'booking_ingestion',
    default_args=default_args,
    description='Aggregates booking records for data analysis',
    schedule_interval=timedelta(hours=1), #'@daily',
    catchup=False
)
```

Los operadores son los siguientes:

```python
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
```

El flujo de ejecución:

```python
task_1 >> task_2
```

### 3.3. Resultados

Lo ejecutamos desde la interfaz de Apache Airflow:

<img src="../img/dag_demo.png" width="100%"/>

Ocurrieron unas ejecuciones con error debido a que, como la data se va a almacenar en una instancia de SQLite, debería haber persistencia de datos y eso se configura en el docker-compose.yaml, agregando esta línea: 
```
- ./db:/usr/local/airflow/db
```

Iría de esta manera:

```yaml
version: '3'
services:
  airflow:
    image: airflow:latest
    volumes:
      - ./airflow:/opt/airflow
      - ./db:/usr/local/airflow/db
    ports:
      - "8080:8080"
    command: airflow standalone
```

Estos son los resultados del despliegue:

<img src="../img/dag_demo_resultados.png" width="100%"/>

Se muestran los resultados del cruce de tablas en SQLite, usando DBeaver:

<img src="../img/resultados_sqlite.png" width="100%"/>

<br>
El flujo puede ser escalable, por ejemplo, descargar y subir información a instancias de base de datos en Amazon o en Microsoft Azure o Google Cloud Platform. Esto se puede configurar en la pestaña de Admin > Connections.
<br>

<img src="../img/connections.png" width="80%"/>

Y se puede crear una conexión con cualquiera de las fuentes listadas:
<br>

<img src="../img/aws_connection.png" width="80%"/>
