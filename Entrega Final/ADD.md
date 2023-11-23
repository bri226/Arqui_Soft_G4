# Iteraciones ADD
## Iteración 1: Establecer estructura general del sistema
### Casos de uso
| Código | Nombre del Caso de Uso | Descripción |
|--------|-------------------------|-------------|
| ESC-1 | Cambio de Base de Datos por Decisión Estratégica | El Jefe de Proyectos realiza un cambio en la base de datos por decisión estratégica. Durante este proceso, se minimiza el tiempo de inactividad y se recopila la retroalimentación del usuario después de la actualización. |
| ESC-2 | Cambios en la Interfaz de Usuario | El Diseñador/Jefe de Proyectos realiza cambios en la interfaz de usuario. Durante el tiempo de diseño, el sistema permite visualizar los cambios en la UI sin interrupciones en el servicio. Se evalúa la implementación en términos de usabilidad y aceptación del usuario. |
| ESC-3 | Inicio de Sesión | El Usuario inicia sesión a través del módulo correspondiente. En operación normal, el sistema debe iniciar sesión en caso de que el registro sea correcto; de lo contrario, debe mostrar un mensaje genérico sin dar detalles del error. Se evalúa el tiempo de respuesta del sistema y la tasa de éxito en la autenticación. |
| ESC-05 | Manejo de Fallos en Servicios Externos | En caso de fallo en servicios externos (como la pasarela de pagos), el sistema notifica al usuario y sigue operando. Se mide el tiempo de recuperación. |
| ESC-4 | Política de Respaldo | El Administrador de la Base de Datos realiza una copia de seguridad de la base de datos en operación normal. El sistema debe completar la copia de seguridad sin pérdida de datos, y se sigue una frecuencia de respaldo mensual. |
| ESC-5 | Procesamiento de la Compra | El sistema procesa la información de compra y la envía al módulo de logística. Se espera que el sistema comparta eficientemente la información de un pedido entre módulos. |
| ESC-6 | Interacción del Usuario con el Sistema de Chat | El Usuario desea visualizar una conversación pasada de un tiempo considerable en el módulo de mensajería. El sistema recupera la conversación solicitada de manera completa y rápida, asegurando la integridad de los mensajes. Se mide el tiempo de respuesta para la carga de la conversación y la tasa de éxito en la recuperación de mensajes. |
| ESC-7 | Cambio en el Tamaño de la Vista | El Diseñador realiza cambios en el tamaño de la vista. Se espera un redimensionamiento automático de los componentes, manteniendo su funcionalidad y consistencia visual. |
| ESC-8 | Despliegue de Nuevo Requerimiento | Se sube un nuevo cambio a producción desde el repositorio del proyecto. El sistema debe tener un tiempo de inactividad mínimo para no romper los SLAs. Se mide el tiempo de inactividad por cada nuevo despliegue: 5 minutos. |




### Escenario de atributos de calidad
| Código | Atributo | Escenario | Caso de Uso Asociado |
|--------|----------|-----------|----------------------|
| SQ-01  | Seguridad | Detección de Intento de Acceso no Autorizado | ESC-3: Inicio de Sesión |
| SQ-02  | Mantenibilidad | Implementación de un Parche de Seguridad | ESC-8: Despliegue de Nuevo Requerimiento |
| SQ-03  | Disponibilidad | Manejo de Fallas en Servicios Externos | ESC-05: Manejo de Fallos en Servicios Externos |
| SQ-04  | Fiabilidad | Copia de Seguridad sin Pérdida de Datos | ESC-4: Política de Respaldo |
| SQ-05  | Escalabilidad | Manejo Eficiente de Grandes Volúmenes de Datos | ESC-5: Procesamiento de la Compra |
| SQ-06  | Usabilidad | Evaluación de Cambios en la Interfaz de Usuario | ESC-2: Cambios en la Interfaz de Usuario |
| SQ-07  | Eficiencia | Procesamiento Eficiente de la Compra | ESC-5: Procesamiento de la Compra |
| SQ-08  | Interactividad | Recuperación Rápida de Conversaciones en el Módulo de Mensajería | ESC-6: Interacción del Usuario con el Sistema de Chat |
| SQ-09  | Portabilidad | Mantenimiento de Funcionalidad Después de Cambios en el Tamaño de la Vista | ESC-7: Cambio en el Tamaño de la Vista |
| SQ-10  | Rendimiento | Tiempo de Inactividad Mínimo en Despliegue de Cambios | ESC-8: Despliegue de Nuevo Requerimiento |

### Restricciones
### Restricciones
| Código | Restricción |
|--------|-------------|
| CON-1  | El sistema debe operar con normalidad en todo momento. |
| CON-2  | Durante el cambio de base de datos por decisión estratégica, se debe minimizar el tiempo de inactividad. |
| CON-3  | Los cambios en la interfaz de usuario no deben causar interrupciones en el servicio. |
| CON-4  | El sistema debe iniciar sesión en caso de que el registro sea correcto; de lo contrario, mostrar un mensaje genérico sin detalles del error. |
| CON-5  | En caso de fallo en servicios externos, el sistema debe notificar al usuario y seguir operando. |
| CON-6  | La copia de seguridad debe completarse sin pérdida de datos. |
| CON-7  | El sistema debe compartir eficientemente información de un pedido entre módulos. |
| CON-8  | Al recuperar conversaciones en el módulo de mensajería, el sistema debe presentarlas de manera completa y rápida, asegurando la integridad de los mensajes. |
| CON-9  | Los componentes deben redimensionarse automáticamente sin perder funcionalidad ni consistencia visual. |
| CON-10 | Durante el despliegue de nuevos cambios, el sistema debe tener un tiempo de inactividad mínimo para no romper los SLAs. |


### Preocupaciones a nivel de arquitectura
| Código | Descripción | 
|--------|----------|
|CRN-01 | Establecer una estructura inicial del sistema.
|CRN-02 | Aprovechar el conocimiento del equipo en react, tailwind css, node js y express js.
|CRN-03 | Asignar trabajo a los miembros del equipo.


## Iteración 2: Identificar estructuras que soporten funcionalidad primaria
## Iteración 3: Abordar el escenario