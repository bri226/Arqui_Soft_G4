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
| ------ | -------- | --------- | -------------------- |
|123|Disponibilidad|El sistema debe estar disponible para el usuario en todo momento|1|

## Iteración 2: Identificar estructuras que soporten funcionalidad primaria
## Iteración 3: Abordar el escenario