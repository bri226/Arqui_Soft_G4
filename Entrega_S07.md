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

El objetivo de este trabajo es proponer una plataforma web para la compra y venta de libros de segunda mano en Perú. La plataforma facilitará la compra y venta de libros de segunda mano, ya que los usuarios encontrarán los libros que buscan de forma rápida y sencilla, y que ofrecería un sistema de pago seguro y confiable. Adempas, contribuiría a la economía circular. La venta de libros de segunda mano ayuda a reducir el impacto ambiental de la industria editorial, ya que evita la producción de libros nuevos. Finalmente, fomentaría la cultura de la lectura. Al hacer que los libros sean más accesibles, la plataforma podría ayudar a fomentar el hábito de la lectura entre los peruanos.El ob


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

### 3.1. Usuario (Alex)
(RFU-01) Registro de Usuarios: Los usuarios deben poder registrarse en la plataforma proporcionando información como nombre, dirección de correo electrónico y contraseña.

(RFU-02) Correo de confirmación: Los usuarios recibiran un correo electrónico de confirmación para verificar la dirección de correo electrónico del usuario.

(RFU-03) Inicio de Sesión: Los usuarios registrados deben poder iniciar sesión en sus cuentas utilizando su correo electrónico y contraseña.

(RFU-03.1) Inicio Erróneo: Los usuarios en caso ingresen credenciales incorrectas, el sistema debe mostrar un mensaje de error, indicando que ingresen correctamente sus credenciales.

 (RFU-04) Gestión de Perfil : Los usuarios pueden editar su perfil, incluyendo información personal como nombre, dirección , contraseña y foto de perfil.

(RFU-05) Gestion de Historial: Los usuarios pueden ver y editar su historial de intercambio de libros.

(RFU-06) Mensajeria con usuarios: Los usuarios pueden enviar mensajes privados a los potenciales compradores/vendedores. 

### 3.2. Catálogo de libros (Bri)

(RFCL-01) Búsqueda de Libros: Los usuarios deben poder buscar libros en la plataforma utilizando filtros como título, autor, género, ubicación.

(RFCL-02) Exploración de Categorías: Los usuarios deben poder navegar y explorar diferentes categorías de libros para descubrir nuevas lecturas.

(RFCL-03) Detalles del libro: Los usuarios pueden ver información detallada sobre un libro, incluyendo su descripción, precio, estado y la ubicación del vendedor.

### 3.3. Sistema de pagos (Daniel)

(RFSP-01) Procesamiento de Pagos: El sistema debe ser capaz de procesar pagos de manera segura y confiable cuando los usuarios realicen compras.

(RFSP-02) Gestión de Métodos de Pago o Cobro: Los usuarios pueden agregar, editar o eliminar métodos de pago o cobro, como tarjetas de crédito o cuentas bancarias.

(RFSP-03) Confirmación de Pagos: Los usuarios deben recibir una confirmación de pago exitoso después de realizar una compra o intercambio.

### 3.4. Envío y logísticas (Micali)

(RFEL-01) Cálculo de Costos de Envío: El sistema debe calcular los costos de envío para los compradores en función de la ubicación del vendedor y el comprador.

(RFEL-02) Seguimiento de Envíos: Los usuarios deben poder realizar un seguimiento de los envíos en tiempo real y recibir actualizaciones sobre la ubicación y el estado de la entrega.

 (RFEL-03) Opciones de Envío: Los vendedores pueden ofrecer diferentes opciones de envío, como envío estándar o express, para que los compradores elijan.

(RFEL-04) Gestión de Devoluciones: Los usuarios deben poder solicitar devoluciones y gestionar el proceso de devolución de libros si el producto no cumple con las expectativas.








### REFERENCIAS
Desafíos PWC (2022). Libros en el Perú: un mercado de 20 millones de dólares. https://desafios.pwc.pe/libros-en-el-peru-un-mercado-de-20-millones-de-dolares/

Buscalibre (s.f.) Términos y condiciones Venta de Libros Usados. https://www.buscalibre.pe/terminos-y-condiciones-venta-usados-cl_st.html
