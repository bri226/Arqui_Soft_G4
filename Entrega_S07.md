# CASO DE NEGOCIO

## LISTA DE PENDIENTES

- [ ] Crear los mockups de la plataforma web
- [ ] Definir cuáles serán los módulos
- [ ] <b>Estructura</b>
    - [ ] <b>Caso de Negocio</b>
        - [ ] Contexto :  Bri
        - [ ] Objetivos de negocio que motivan el desarrollo de sw : Bri
        - [ ] Definir stakeholders (depende de los objetivos)
    - [ ] <b>Requerimientos</b> (deben ser por módulo, si hay req. transversales, definirlos tmbn) 
        - [ ] <b>Requerimientos Funcionales</b>: Acotar o ampliar funcionalidad de soluciones tradicionales. Respaldados por mockups o prototipos.
        - [ ] <b>Escenarios a nivel de atributos de calidad</b>: Además de su relación con los req. de sistema.
        - [ ] <b>Restricciones</b>: Factores sobre los que no hay influencia directa.
        - [ ] <b>Decisiones a nivel de arquitectura</b>: Usar categorías vistas en el curso.
    - [ ] <b>Tácticas </b>: A nivel de disponibilidad, mantenibilidad, interoperabilidad, rendimiento, seguridad
    - [ ] <b>Tópicos en Arquitectura de SW (Cada uno) </b>: Se coloca como anexo. Se elabora un video explicativo y mostrando código de demo.
     - [ ] Desarrollo conceptual
     - [ ] Consideraciones técnicas: instalación y configuración
     - [ ] <b>Código</b>: Escenario de aplicación y realizar una implementación simple. Colocarlo en el github del grupo.



## 1. Caso de Negocio

### a. Generalidades
Es una plataforma en línea que conecta a entusiastas de la lectura que desean comprar y vender libros de segunda mano. La plataforma está diseñada para brindar a los usuarios una experiencia fácil y conveniente para intercambiar libros usados, fomentando la reutilización y el reciclaje de libros y promoviendo la comunidad lectora.

### b. Modelo de Negocio

Aquí entra el BM Canvas

### c. Estructura del equipo

Estructura del equipo en total de la "empresa" (desde el CEO hasta Soporte Cliente), sin nombres de personas, solo un esquema del potencial esquema conceptual.

### d. Listado de Stakeholders
Los stakeholders seleccionados para este trabajo son:
|Stakeholder|Funciones|
|-------------|-----------|
| Usuario | |
|Jefe de proyecto| | 
| Administrador de Base de Datos| |
|Diseñador | |
|Implementador| |
|Especialista en Despliegue| |
|Responsable de pruebas | | 
|Responsable de Mantenimiento| |
|Ingeniero de sistemas| |

## 2. Requerimientos
Historias de usuario, relacionadas con mockups.
### 2.1. Usuario

### 2.2. Catálogo de libros

### 2.3. Sistema de pagos

### 2.4. Envío y logísticas


## 3. Requerimientos funcionales

### 3.1. Usuario
- Registro de Usuarios (RFU-01): Los usuarios deben poder registrarse en la plataforma proporcionando información como nombre, dirección de correo electrónico y contraseña.
- Correo de confirmación (RFU-02): Los usuarios recibiran un correo electrónico de confirmación para verificar la dirección de correo electrónico del usuario.
- Inicio de Sesión (RFU-03): Los usuarios registrados deben poder iniciar sesión en sus cuentas utilizando su correo electrónico y contraseña.
- Inicio Erroneo (RFU-04): Los usuarios en caso ingresen credenciales incorrectas, el sistema debe mostrar un mensaje de error, indicando que ingresen correctamente sus credenciales.
- Gestión de Perfil (RFU-05): Los usuarios pueden editar su perfil, incluyendo información personal como nombre, dirección , contraseña y foto de perfil.
- Gestion de Historial (RFU-06) : Los usuarios pueden ver y editar su historial de intercambio de libros
- Busqueda de Usuario (RFU-07) : Los usuarios pueden realizar la busqueda de otros usuarios en la plataforma y visualizar sus perfiles, ingresando como parametros de busqueda nombre de usuario , nombre real o género literario preferido
- Enviar solicitud de Amistad (RFU-08) : Los usuarios pueden crear nuevas amistades en la pagina , enviando solicitudes de amistad.
- Gestion de amistades (RFU-09) : Los usuarios pueden aceptar o rechazar las solicitudes de amistad pendientes y pueden visualizar su lista de amigos.
- Mensajeria con usuarios (RFU-10) : Los usuarios pueden enviar mensajes privados a los amigos a los cuales previamente hayan realizado una conexión.

### 3.2. Catálogo de libros
- Búsqueda de Libros (RFCL-01): Los usuarios deben poder buscar libros en la plataforma utilizando filtros como título, autor, género y ubicación.
- Exploración de Categorías (RFCL-02): Los usuarios deben poder navegar y explorar diferentes categorías de libros para descubrir nuevas lecturas.
- Detalles del Libro (RFCL-03): Los usuarios pueden ver información detallada sobre un libro, incluyendo su descripción, precio, estado y la ubicación del vendedor.
### 3.3. Sistema de pagos
- Procesamiento de Pagos (RFSP-01): El sistema debe ser capaz de procesar pagos de manera segura y confiable cuando los usuarios realicen compras.
- Gestión de Métodos de Pago (RFSP-02): Los usuarios pueden agregar, editar o eliminar métodos de pago, como tarjetas de crédito o cuentas bancarias.
- Confirmación de Pagos (RFSP-03): Los usuarios deben recibir una confirmación de pago exitoso después de realizar una compra o intercambio.
### 3.4. Envío y logísticas
- Cálculo de Costos de Envío (RFEL-01): El sistema debe calcular los costos de envío para los compradores en función de la ubicación del vendedor y el comprador.
- Seguimiento de Envíos (RFEL-02): Los usuarios deben poder realizar un seguimiento de los envíos en tiempo real y recibir actualizaciones sobre la ubicación y el estado de la entrega.
- Opciones de Envío (RFEL-03): Los vendedores pueden ofrecer diferentes opciones de envío, como envío estándar o express, para que los compradores elijan.
- Gestión de Devoluciones (RFEL-04): Los usuarios deben poder solicitar devoluciones y gestionar el proceso de devolución de libros si el producto no cumple con las expectativas.


STAKEHOLDERS
Usuario
Jefe de proyecto
Administrador de Base de Datos
Diseñador
Implementador
Especialista en Despliegue
Responsable de pruebas
Responsable de Mantenimiento
Ingeniero de sistemas
