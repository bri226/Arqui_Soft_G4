# CASO DE NEGOCIO

## LISTA DE PENDIENTES

- [ ] Crear los mockups de la plataforma web
- [ ] Definir cuáles serán los módulos
- [ ] <b>Estructura</b>
    - [ ] <b>Caso de Negocio</b>
        - [ ] Generalidades :  Bri
        - [ ] Modelo de Negocio : Bri
        - [ ] Estructura del equipo
        - [ ] Listado de Stakeholders
    - [ ] <b>Requerimientos del Sistema</b> (deben ser por módulo, si hay req. transversales, definirlos tmbn) 
        - [ ] <b>Requerimientos Funcionales</b>: Acotar o ampliar funcionalidad de soluciones tradicionales. Respaldados por mockups o prototipos.
        - [ ] <b>Requerimientos de Atributos de Calidad (Escenarios)</b>: Además de su relación con los req. de sistema.
        - [ ] <b>Restricciones</b>: Factores sobre los que no hay influencia directa.
    - [ ] <b>Decisiones a nivel de arquitectura</b>: Usar categorías vistas en el curso.
        - [ ] <b>Asignación de Responsabilidades</b> 
        - [ ] <b>Modelo de Coordinación</b>
        - [ ] <b>Modelo de Datos</b>
        - [ ] <b>Mapeo entre Elementos de Arquitectura</b>
        - [ ] <b>Elección de Tecnología</b>
    - [ ] <b>Tácticas </b>: A nivel de disponibilidad, mantenibilidad, interoperabilidad, rendimiento, seguridad
    - [ ] <b>Tópicos en Arquitectura de SW (Cada uno) </b>: Se coloca como anexo. Se elabora un video explicativo y mostrando código de demo.
        - [ ] Desarrollo conceptual
        - [ ] Consideraciones técnicas: instalación y configuración
            - [ ] Instalación / Configuración de Servicio
            - [ ] Primeros pasos
        - [ ] <b>Demo</b>
            - [ ] Escenario práctico
            - [ ] Pasos para la demo



## 1. Bookswap

### a. Generalidades
El libro es un bien cultural que ha acompañado a la humanidad durante siglos. En Perú, el libro es un producto de consumo masivo, con un mercado de más de 10 millones de lectores. Sin embargo, existe un vacío en el mercado para la compra y venta de libros de segunda mano. La venta de libros en el Perú ha aumentado a pesar de la pandemia del COVID-19 y el aislamiento social, según Desafíos PWC (2022), el mercado ha crecido un 8% interanual para el año 2020, y 4.9% para el 2021, además de que seamos el segundo país en América Latina con mayor crecimiento en compra de libros impresos.

La feria de libros en el Jirón Amazonas ofrece una experiencia única para los lectores que buscan libros usados. Sin embargo, la falta de una plataforma online centralizada para comprar y vender libros usados limita las posibilidades de compra y venta de este tipo de libros.

Existen, no obstante, plataformas web que realizan la tarea de interconectar a vendedores de libros de segunda mano (que en realidad puede ser cualquier persona que quiera ofrecer un libro que ya no va a usar más). Buscalibre es una librería online con sede en Chile cuya especialidad es la venta de libros, tanto usados como nuevos, a un precio variado y con un costo de envío bajo, aunque sean libros importados desde Europa o cualquier país de Latinoamérica. Sin embargo, la funcionalidad de compra de libros usados no está muy desarrollada, ya que los precios son colocados por la plataforma de acuerdo con el ISBN de cada libro (Buscalibre, s.f.), por lo tanto, si son muy altos y no van de acuerdo con el valor real del libro, no se venden. Relibrea es una plataforma web que conecta a vendedores y compradores de libros de segunda mano, sin embargo, solo es un punto de encuentro entre ambas partes, las negociaciones son definidas por los usuarios, y no tiene mayor funcionalidad especial.

El objetivo de este trabajo es proponer una plataforma web para la compra y venta de libros de segunda mano en Perú. La plataforma facilitará la compra y venta de libros de segunda mano, ya que los usuarios encontrarán los libros que buscan de forma rápida y sencilla, y que ofrecería un sistema de pago seguro y confiable. Adempas, contribuiría a la economía circular. La venta de libros de segunda mano ayuda a reducir el impacto ambiental de la industria editorial, ya que evita la producción de libros nuevos. Finalmente, fomentaría la cultura de la lectura. Al hacer que los libros sean más accesibles, la plataforma podría ayudar a fomentar el hábito de la lectura entre los peruanos.


### b. Modelo de Negocio

El modelo de negocio se basa en las siguientes características:

#### 1. Segmentos de Clientes
- <b>Lectores Aficionados</b>: Personas que buscan libros a precios más accesibles y desean contribuir a la economía circular.
- <b>Vendedores Particulares</b>: Individuos que quieren vender libros usados que ya no necesitan.
- <b>Pequeñas Librerías Locales</b>: Establecimientos que desean ampliar su alcance vendiendo libros de segunda mano.

#### 2. Propuesta de Valor

- <b>Variedad de Libros Usados</b>: Una amplia gama de libros de segunda mano disponibles.
- <b>Sistema de Pago Seguro</b>: Con un proceso de pago seguro, los usuarios pueden comprar y vender con confianza, protegiendo la privacidad de sus datos financieros.
- <b>Economía Circular</b>: Al promover la reutilización, ayudamos a reducir la demanda de nuevos libros y, por ende, el impacto ambiental asociado a su producción.
- <b>Fomento de la Lectura</b>: Hace que los libros sean más accesibles, fomentando el hábito de la lectura.

#### 3. Canales

- <b>Plataforma Web</b>: La principal interfaz para usuarios.
- <b>Correo Electrónico</b>: Confirmación de registros, notificaciones de transacciones y actualizaciones.
- <b>Redes Sociales</b>: Promoción, publicidad y participación de la comunidad.

#### 4. Relaciones con los clientes

- <b>Atención al Cliente</b>: Soporte a través de correo electrónico.
- <b>Comunidad en Línea (**)</b>: Foros, reseñas y espacio para que los usuarios compartan sus experiencias.

#### 5. Fuentes de ingresos

- <b>Comisión por Transacción</b>: Pequeña tarifa por cada venta realizada a través de la plataforma.
- <b>Publicidad Premium (**)</b>: Oportunidades para destacar ciertos libros o vendedores mediante publicidad pagada.

#### 6. Recursos clave

- <b>Plataforma Web</b>: Desarrollo y mantenimiento continuo.
- <b>Base de Datos de Libros</b>: Actualizada y diversa.
- <b>Sistema de Pago Seguro</b>: Integración con pasarelas de pago confiables.

#### 7. Actividades clave

- <b>Curación de Contenido</b>: Garantizar la calidad y autenticidad de los libros en la plataforma.
- <b>Desarrollo y Mejora Continua de la Plataforma</b>: Para adaptarse a las necesidades cambiantes de los usuarios.

#### 8. Socios clave

- <b>Servicios de Pago</b>: Colaboración con proveedores de servicios de pago seguros.
- <b>Empresas de Logística</b>: Acuerdos para el envío eficiente y seguimiento de pedidos.
- <b>Proveedores Frecuentes de Libros de Segunda Mano</b>: Para mantener un flujo constante de nuevos libros en la plataforma.

#### 9. Estructura de costos

- <b>Desarrollo y Mantenimiento de la Plataforma</b>: Incluyendo actualizaciones y mejoras.
- <b>Gastos de Marketing</b>: Publicidad en línea y promoción para atraer nuevos usuarios.
- <b>Costos de Transacción</b>: Relacionados con el procesamiento seguro de pagos.

![business_model_canvas](img/business_model_canvas.png)

### c. Estructura del equipo

En la siguiente sección, se delinearán los elementos fundamentales de la estructura organizativa del equipo dedicado a la venta de libros de segunda mano. 

#### CEO
Se encuentra en el primer nivel y es el encargado de establecer la visión y estrategia general de la empresa. También se encarga de tomar decisiones estratégicas, elegir las tácticas y representar a la empresa ante socios clave y eventos importantes.

#### COO
El Director de Operaciones supervisa las operaciones diarias y garantiza la eficiencia, gestiona la logística y el cumplimiento de pedidos, además de que, al ser parte de la dirección ejecutiva, colabora en la toma de decisiones estratégicas.

#### CTO
El Director de Tecnología es un rol clave. Supervisa el desarrollo y mantenimiento de la plataforma web, garantiza que la plataforma sea segura tanto para compradores como vendedores, y al ser parte de la dirección ejecutiva, también colabora en la toma de decisiones estratégicas.

#### EQUIPOS FUNCIONALES
Los equipos funcionales se centran en tareas y actividades especializadas directamente relacionadas con la misión principal de la empresa.

| Equipo | Descripción |
| -----------|----------|
| Desarrollo | Desarrollar  y mantener la plataforma web. Implementar nuevas características y mejoras |
| Operaciones y Logística | Gestionar la logística y envío de libros. Coordinar con empresas de logística y proveedores. |
| Marketing | Desarrollar estrategias de marketing y publicidad. Gestionar campañas en redes sociales. |
| Contenido y Curación | Verificar la autenticidad y calidad de los libros. Desarrollar descripciones detalladas para los libros. Mantener calidad del catálogo |

#### EQUIPOS DE SOPORTE
Los equipos de soporte brindan servicios que respaldan las funciones principales de la organización, sin estar directamente relacionados en el servicio principal.
| Equipo | Descripción |
| -----------|----------|
| Atención al Cliente | Responder a consultas de usuarios. Gestionar problemas y solicitudes. |
| Comunidad * | Fomentar la participación en la comunidad. Gestionar foros y contenido generado por usuarios. |

#### FINANZAS Y ADMINISTRACIÓN
Este equipo se centra en la gestión financiera y administrativa de la empresa. Está encargado de la planificación financiera, la contabilidad, la gestión de recursos humanos y otras funciones administrativas cruciales para el buen funcionamiento de la organización.
| Equipo | Descripción |
| -----------|----------|
| CFO | Supervisar salud financiera de la empresa. Gestionar presupuestos. Colabora en decisiones estratégicas. |
| Equipo Administrativo | Gestionar tareas administrativas y recursos humanos. Cumplir con requisitos legales. |


![organigrama](img/organigrama.jpg)


### d. Listado de Stakeholders
Los stakeholders seleccionados para este trabajo son:
|Stakeholder|Funciones|
|-------------|-----------|
| Usuario | Representa a los posibles compradores y vendedores de libros en la plataforma. Contribuye con la definición de requisitos, proporciona retroalimentación sobre la usabilidad y la experiencia del usuario, y ayuda a dar forma a las características que satisfacen sus necesidades en la compra y venta de libros de segunda mano.|
|Jefe de proyecto| Dirige la planificación y ejecución del proyecto de la plataforma de venta de libros usados. Gestiona el equipo de desarrollo, asegura que se cumplan los plazos, y supervisa la implementación de características centradas en la experiencia del usuario y la eficiencia operativa. | 
| Administrador de Base de Datos| Diseña y gestiona la estructura de la base de datos que almacena la información sobre los libros y los usuarios. Garantiza la integridad y seguridad de los datos, así como la eficiencia en la recuperación de la información.|
|Diseñador | Trabaja en la interfaz de usuario de la plataforma. Diseña una experiencia atractiva y fácil de usar que fomente la navegación fluida, la presentación clara de los libros y la participación activa de los usuarios. |
|Implementador| Transforma los diseños y requisitos en código funcional para la plataforma. Desarrolla las características que permitirán la compra y venta de libros de manera efectiva y segura. |
|Especialista en Despliegue| Gestiona la implementación de la plataforma en entornos de producción. Se asegura de que el despliegue sea exitoso y que la plataforma esté disponible para los usuarios finales. |
|Responsable de pruebas | Diseña y ejecuta pruebas para identificar posibles problemas en la plataforma. Colabora con los desarrolladores para corregir errores, garantizando que la plataforma sea robusta y segura para los usuarios.| 
|Responsable de Mantenimiento| Supervisa las actualizaciones y mejoras continuas de la plataforma después de su lanzamiento. Aborda problemas en curso y trabaja para optimizar la plataforma a medida que evolucionan las necesidades y tecnologías. |
|Ingeniero de sistemas| Colabora en el diseño y la arquitectura de la plataforma. Asegura que la infraestructura técnica sea escalable y cumpla con los estándares de seguridad, contribuyendo a la viabilidad y robustez del sistema. |

## 2. Requerimientos

### 2.1. Requerimiento funcionales

#### 2.1.1. Usuario (Alex)
(RFU-01) Registro de Usuarios: Los usuarios deben poder registrarse en la plataforma proporcionando información como nombre, dirección de correo electrónico y contraseña.

(RFU-02) Correo de confirmación: Los usuarios recibiran un correo electrónico de confirmación para verificar la dirección de correo electrónico del usuario.

(RFU-03) Inicio de Sesión: Los usuarios registrados deben poder iniciar sesión en sus cuentas utilizando su correo electrónico y contraseña.

(RFU-03.1) Inicio Erróneo: Los usuarios en caso ingresen credenciales incorrectas, el sistema debe mostrar un mensaje de error, indicando que ingresen correctamente sus credenciales.

(RFU-04) Gestión de Perfil : Los usuarios pueden editar su perfil, incluyendo información personal como nombre, dirección , contraseña y foto de perfil.

(RFU-05) Gestion de Historial: Los usuarios pueden ver y editar su historial de intercambio de libros.

(RFU-06) Mensajeria con usuarios: Los usuarios pueden enviar mensajes privados a los potenciales compradores/vendedores. 

(RFU-07) Red Social para intercambio de libros: Los usuarios van a poder subir publicaciones en su página principal de los libros que les gusta o para ofrecer un intercambio, se podra dar me gusta a las publicaciones y comentar los posts, además se podrá agregar amigos.

(RFU-08) Publicar libros en venta: Los usuarios pueden subir la información de los libros que quieren vender.

#### 2.1.2. Catálogo de libros (Bri)

(RFCL-01) Búsqueda de Libros: Los usuarios deben poder buscar libros en la plataforma utilizando filtros como título, autor, género, ubicación.

(RFCL-02) Exploración de Categorías: Los usuarios deben poder navegar y explorar diferentes categorías de libros para descubrir nuevas lecturas.

(RFCL-03) Detalles del libro: Los usuarios pueden ver información detallada sobre un libro, incluyendo su descripción, precio, estado y la ubicación del vendedor.

#### 2.1.3. Sistema de pagos (Daniel)

(RFSP-01) Procesamiento de Pagos: El sistema debe ser capaz de procesar pagos de manera segura y confiable cuando los usuarios realicen compras.

(RFSP-02) Gestión de Métodos de Pago o Cobro: Los usuarios pueden agregar, editar o eliminar métodos de pago o cobro, como tarjetas de crédito o cuentas bancarias.

(RFSP-03) Confirmación de Pagos: Los usuarios deben recibir una confirmación de pago exitoso después de realizar una compra o intercambio.

#### 2.1.4. Envío y logísticas (Micali)

(RFEL-01) Cálculo de Costos de Envío: El sistema debe calcular los costos de envío para los compradores en función de la ubicación del vendedor y el comprador.

(RFEL-02) Seguimiento de Envíos: Los usuarios deben poder realizar un seguimiento de los envíos en tiempo real y recibir actualizaciones sobre la ubicación y el estado de la entrega.

(RFEL-03) Opciones de Envío: Los vendedores pueden ofrecer diferentes opciones de envío, como envío estándar o express, para que los compradores elijan.

(RFEL-04) Gestión de Devoluciones: Los usuarios deben poder solicitar devoluciones y gestionar el proceso de devolución de libros si el producto no cumple con las expectativas.

### 2.2 Flujo de Interacción de la Plataforma BookSwap: (Flujo Principal)
### 2.3 Requerimientos de Atributos de Calidad (Escenarios)
A continuación, se presenta una tabla que resume los atributos de calidad, sus descripciones y los escenarios asociados:

|Atributo|Código|Entorno|Fuente|Estímulo|Artefacto|Resouesta|Medida de Respuesta
|-------------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|Escalabilidad|ESC-01|Red Social|Usuario|Miles de publicaciones en un periodo corto | Infraestrucutra de servidores|Activación de servidores extras|El servidor se activa de 30 segundos
| Escalabilidad | ESC-02 | Plataforma de Bookswap | Usuario | Aumento rápido de usuarios y transacciones | Infraestructura del servidor | Escalamiento automático de recursos computacionales | El tiempo de respuesta se mantiene constante incluso con el aumento del tráfico. |
| Disponibilidad | ESC-03 | Base de Datos | Usuario | Fallo del servidor principal | Base de datos replicada | Conmutación por error a la réplica de la base de datos | La plataforma sigue funcionando sin interrupciones. |
| Usabilidad | ESC-04 | Interfaz de Usuario | Usuario | Interacción del usuario con la interfaz | Interfaz de usuario | Respuestas intuitivas y guías visuales | La tasa de abandono durante el registro y la búsqueda se reduce en un 20%. |
| Seguridad | ESC-05 | Procesos de Autenticación | Usuario | Intento de inicio de sesión no autorizado | Sistema de autenticación | Bloqueo temporal de la cuenta y notificación al usuario | La cuenta del usuario está segura y el acceso no autorizado se detiene. |
| Eficiencia | ESC-06 | Sistema de Pago | Usuario | Procesamiento de transacciones | Módulo de pago | Procesamiento rápido y sin errores de las transacciones | El tiempo de procesamiento de las transacciones se reduce en un 30%. |
| Confidencialidad | ESC-07 | Base de Datos | Usuario | Intento de acceso no autorizado a datos de usuario | Sistema de control de acceso | Denegación de acceso y registro del intento | La información del usuario se mantiene confidencial y segura. |
| Integridad | ESC-08| Base de Datos | Usuario | Intento de modificación no autorizada de datos | Sistema de gestión de bases de datos | Rechazo de la modificación y notificación al administrador | Los datos del usuario se mantienen intactos y sin alteraciones no autorizadas. |
| Mantenibilidad | ESC-09 | Código Fuente | Desarrollador | Identificación de errores en el código | Herramientas de depuración | Registro y notificación de errores | Los errores son corregidos en un plazo de 24 horas desde la detección. |
| Portabilidad | ESC-10 | Plataforma de Despliegue | Administrador | Cambio de proveedor de servicios en la nube | Configuración del servidor | Migración sin pérdida de datos y funcionalidades | La plataforma está completamente funcional en el nuevo proveedor en un plazo de 48 horas. |

En la siguiente tabla se especifican a qué requerimientos funcionales estan relacionados los escenarios descritos.
| Escenarios | Requerimiento Funcional Relacionado |
|------------|--------------------------------------|
| ESC-01     | RFU-06, RFU-08                              |
| ESC-02     | RFU-01, RFU-03                        |
| ESC-03     | RFU-02, RFU-03, RFU-03.1              |
| ESC-04     | RFU-04                               |
| ESC-05     | RFU-03, RFU-03.1                      |
| ESC-06     | RFSP-01, RFSP-03                      |
| ESC-07     | RFCL-01, RFCL-02, RFCL-03              |
| ESC-08     | RFU-04                               |
| ESC-09     | RFU-03, RFU-05, RFU-06, RFU-07         |
| ESC-10     | RFEL-01, RFEL-02, RFEL-03, RFEL-04     |

### 2.4 Restricciones
* Tecnologías Utilizadas:
** Frontend: Utilizaremos React para el desarrollo del frontend, permitiendo una experiencia de usuario dinámica e interactiva.
Backend: Implementaremos el backend utilizando Node.js y Express.js para la construcción de APIs robustas y eficientes.
Bases de Datos:
Base de Datos Relacional: Emplearemos PostgreSQL como nuestra base de datos relacional para almacenar datos críticos del usuario y resultados de competencias. PostgreSQL ofrece un sólido sistema de gestión de bases de datos relacional.
Base de Datos No Relacional: Utilizaremos MongoDB como nuestra base de datos no relacional para almacenar datos menos estructurados, como registros de actividad y datos flexibles relacionados con el usuario.
Servidores y Despliegue:
Desplegaremos nuestras aplicaciones en servidores propios utilizando servicios de Amazon Web Services (AWS), Heroku y pruebas gratuitas de Atlas para MongoDB. Esto proporcionará flexibilidad y control sobre nuestra infraestructura.
Seguridad:
Token de Seguridad: Implementaremos tokens de seguridad para validar las APIs, lo que garantizará la autenticación segura y el acceso controlado a los recursos del servidor.
Contraseñas Encriptadas: Las contraseñas de los usuarios se enviarán y se almacenarán en la base de datos de forma encriptada para mantener la seguridad y la privacidad de los datos.
Políticas de Seguridad Rigurosas: Estableceremos una política de seguridad rigurosa que incluirá medidas como la autenticación de dos factores y el cifrado de datos tanto en reposo como en tránsito para garantizar la protección completa de los datos del usuario y la integridad del sistema.
## 3. Decisiones a Nivel de Arquitectura
### 3.1. Asignaciones de Responsibilidades
### 3.2. Modelos de Coordinación
### 3.3. Modelos de datos
### 3.4. Mapeo entre Elementos de Arquitectura
### 3.5. Elección de Tecnología
## 4. Tácticas
## 5. Anexo: Tópicos en Arquitectura de Software
## 6. REFERENCIAS
Desafíos PWC (2022). Libros en el Perú: un mercado de 20 millones de dólares. https://desafios.pwc.pe/libros-en-el-peru-un-mercado-de-20-millones-de-dolares/

Buscalibre (s.f.) Términos y condiciones Venta de Libros Usados. https://www.buscalibre.pe/terminos-y-condiciones-venta-usados-cl_st.html
