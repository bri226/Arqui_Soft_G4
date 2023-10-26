# Monitoreo de Aplicaciones - APM
* Estudiante: Mauricio José Micali Morales - 20191288 
* Proyecto Grupal: BookSwap

## 1. Desarrollo Conceptual

El monitoreo de aplicaciones es un proceso de monitoreo continuo de una aplicación de software para evaluar su rendimiento, disponibilidad y operación. El objetivo principal es identificar y solucionar problemas en tiempo real para garantizar que la aplicación funcione de manera óptima y que los usuarios tengan una experiencia perfecta. El monitoreo de aplicaciones cubre áreas como el rendimiento del servidor, la base de datos, las API y la detección de errores. Este proceso, al igual que las herramientas de monitoreo como tal, han evolucionado con herramientas avanzadas que permiten un enfoque integral en la supervisión y la mejora de las aplicaciones en entornos tecnológicos cambiantes.

## 2. Consideraciones Técnicas

Para el proyeto Bookswap sería importante tener una herramienta de monitoreo como Prometheus, la cual es facil de desplegar y puede monitorear una variedad de componentes de la aplicación. Esto debido a que la misma herramienta y la comunidad han desarrollado diferentes recolectores de métricas que pueden aplicar a varias tecnologías, como conectores de sistemas operativos, diferentes tipos de based de datos, recolectores de otras aplicaciones grandes, mainframe, kubernetes, entre otros. Esto se denominan exportadores, y son la base del método de monitoreo de esta herramienta. 

### 2.1  Descarga de la herramienta

Como se mencionó antes, Prometheus es sencillo de desplegar en diferentes ambientes. En mi caso, lo más sencillo es descargarlo en mi sistema Windows. Para descargarlo solo se debe ingresar a la [página oficial de Prometheus](https://prometheus.io/download/).

### 2.2  Configuración de monitoreo

Una vez descargado, se encontrarán 3 archivos importantes: promteheus.exe, que se usa para ejecutar el servicio, promtool.exe, utilitario para recolectar métricas, y prometheus.yml. Este último, se encarga de la configuración global de prometheus, donde se indica los intervalos de scraping en scrape_interval, los archivos de reglas para extender el monitoreo en rule_files, y por ultimo los scrape_configs. Aquí se definen los targets que se van a monitorear, como por ejemplo un servidor, una base de datos, o el mismo prometheus, como se muestra en la parte de abajo.

``` yml
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "demo"
    static_configs:
    - targets:
      - demo.promlabs.com:10000
      - demo.promlabs.com:10001
      - demo.promlabs.com:10002

  - job_name: "demo_api"
    static_configs:
    - targets:
      - localhost:44300
    metrics_path: /Vehicle/bck
```

### 2.3  Ejecutar 

Una vez se tenga la configuración, se debe ejecutar el comando prometheus (si es que la ruta se ha puesto en el PATH) y automáticamente se ejecutará el programa en el puerto 3000. 

## DEMO

https://drive.google.com/file/d/13rKMvBJrUjrt0Fog0VopoVnFSwOMo4Tf/view?usp=drive_link