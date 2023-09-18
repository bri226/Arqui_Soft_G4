# Stakeholders

- Es muy importante involucrar a los interesados con el desarrollo del proyecto.
- Este involucramiento permite poder relevar sus necesidades para:
    - Entender restricciones.
    - Manejar expectativas.
    - Negociar prioridades y decisiones.

## Lista de Stakeholders

| Rol | Responsabilidad | Interés en la arquitectura |
|--------------|--------------|--------------|
| Analista | Analizar la arquitectura y contrastarla con los requerimientos de calidad definidos. Especialistas: seguridad, rendimiento, etc. | Analizar la satisfacción de los requerimientos de calidad.
| Arquitecto | Desarrollo de la arquitectura y su documentación.  | Negociar y tomar decisiones sobre los requerimientos y enfoques de diseño. Debe evidenciar que la Arquitectura cumplió los objetivos |
| Gestor de Negocio (Manager)  | Responsable de la unidad de negocio que posee el sistema. Responsabilidad ejecutiva y de definición de procesos de negocio. | Entender la forma en que la Arquitectura permite el logro de los objetivos de negocio. |
| Conformance Checker | Asegura el alineamiento a estándares y procesos que provean confianza en la sostenibilidad del producto. | Asegurar que las implementaciones han seguido las prescripciones de arquitectura. |
| Cliente | Paga por el sistema y asegura su entrega. Representa al usuario final. | Asegurar que se entregue la funcionalidad y calidad requerida. Estimar costo, medir el progreso, etc. |
| Administrador de Base de Datos (DBA) | Diseño de BD, análisis de datos, modelamiento y optimización. Instalación y administración del software de BD y aspectos de seguridad. | Entender cómo los datos se crean, utilizan y actualizan por parte de otros elementos de arquitectura. Propiedades de la BD para lograr objetivos de calidad |
| Especialista en Despliegue | Aceptar el sistema terminado luego del desarrollo y realizar el respliegue. Hace que el software esté operativo y cumpliendo su objetivo de negocio. | Entender los elementos de arquitectura que serán instalados, dónde serán instalados y qué responsabilidad tiene cada uno.
| Diseñador | Diseño del software como aterrizaje de la arquitectura, aplicar la arquitectura para cumplir los requerimientos de los módulos o partes a su cargo. | Resolver problemas de contención de recursos y establecer presupuestos de consumo de estos. Entender cómo sus componentes a cargo interactúan y se comunican con otros.|
| Evaluador | Conducir una evaluación formal de la arquitectura y su documentación sobre algún criterio definido. | Evaluar la capacidad de la arquitectura para entregar la funcionalidad y los atributos de calidad planteados. |
| Implementador | Desarrollo de los elementos específicos del sistema en función del diseño, los requerimientos y la arquitectura. | Entender restricciones inviolables y libertades aceptables en el proceso de desarrollo. |
| Integrador | Tomar componentes individuales e integrarlos, en función a la arquitectura y el diseño de los sistemas. | Producir la integración de planes y procedimientos, localizar la causa raíz de fallas de integración. |
| Responsable de Mantenimiento | Arreglar bugs y proveer mejoras al sistema a lo largo de su vida (incluso aquellas no identificadas inicialmente) | Entender el impacto y las ramificaciones de un cambio. |
| Administrador de Red | Mantenimiento y monitoreo del hardware y software en la red. Puede incluir configuración, mantenimiento y monitoreo de los elementos de red. | Determinar la carga de la red y entender los distintos patrones de uso de la red. |
| Administrador de Línea de Producto | Responsable por el desarrollo de una familia de productos desarrollados con los mismos elementos (incluyendo la arquitectura). | Determinar si un potencial nuevo miembro de la familia de productos se ajusta al objetivo global o qué tan alejado se encuentra. |
| Jefe de Proyecto | Planificación, programación y asignación de recursos para desarrollar los componentes y liberarlos para pruebas e integración. | Ayudar a determinar el cronograma, monitoreo del cumplimiento del mismo, identificar y resolver problemas de contención en tiempo de desarrollo. |
| Representante del Sistema Externo | Responsable del manejo de un sistema con el que debemos interactuar. | Definir el conjunto de condiciones del acuerdo entre los sistemas. |
| Ingeniero de Sistemas | Responsable del diseño de sistemas o componentes relacionados con nuestro sistema. | Asegurar que el entorno provisto por el sistema es suficiente. |
| Responsable de pruebas | Prueba y verificación del sistema contra requerimientos y arquitectura | Creación de pruebas basadas en el comportamiento e interacciones. | 
| Usuario | El usuario final del sistema. Distintos tipos: administrador, superusuario, etc. | Ayudar a determinar el cronograma, monitoreo del cumplimiento del mismo, identificar y resolver contención en tiempo de desarrollo. | 
