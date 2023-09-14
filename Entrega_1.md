# CASO DE NEGOCIO: BOOKSWAP

## 1. Generalidades
Es una plataforma en línea que conecta a entusiastas de la lectura que desean comprar y vender libros de segunda mano. La plataforma está diseñada para brindar a los usuarios una experiencia fácil y conveniente para intercambiar libros usados, fomentando la reutilización y el reciclaje de libros y promoviendo la comunidad lectora.

## 2. Módulos

### 2.1. Usuario
Algunos casos de uso:
- Registro
- Inicio de sesión
- Gestión del perfil del usuario
- Búsqueda de usuarios
- Gestión de amigos (en caso se pudiera hacer como una especie de red social)

### 2.2. Catálogo de libros
#### Casos de uso comprador:
- Buscar libros: Los compradores pueden buscar libros por título, autor, género u otros criterios relevantes.
- Explorar categorías: Los compradores pueden explorar diferentes categorías o géneros de libros para descubrir nuevas lecturas o encontrar libros que se ajusten a sus intereses.
- Ver detalles del libro: Los compradores pueden hacer clic en un libro en particular para ver información detallada, como la descripción, el estado del libro (nuevo o usado), el precio y la ubicación del vendedor.
- Agregar libros al carrito: Los compradores pueden agregar libros que deseen comprar a su carrito de compras virtual para realizar una transacción posterior.
- Calificaciones y reseñas: Los compradores pueden ver las calificaciones y reseñas de otros usuarios sobre un libro en particular para tomar decisiones informadas sobre su compra.
- Filtrar resultados: Los compradores pueden aplicar filtros para refinar los resultados de búsqueda, como filtrar por precio, ubicación del vendedor, estado del libro, etc.
- Guardar libros favoritos: Los compradores pueden guardar libros que les interesen en una lista de "Favoritos" para acceder fácilmente a ellos en el futuro.
- Ver disponibilidad y ubicación: Los compradores pueden verificar la disponibilidad de un libro y la ubicación del vendedor para determinar si es conveniente para ellos.
- Notificaciones de nuevos libros: Los compradores pueden optar por recibir notificaciones cuando se agreguen nuevos libros que coincidan con sus intereses o criterios de búsqueda.
  
#### Casos de uso vendedor:
- Crear listados de libros: Los vendedores pueden crear listados de libros que deseen vender o intercambiar. Pueden agregar detalles como título, autor, descripción, precio y estado del libro.
- Gestionar disponibilidad: Los vendedores pueden gestionar la disponibilidad de sus libros en la plataforma, marcándolos como disponibles o no disponibles.
- Editar listados de libros: Los vendedores pueden editar la información de los listados de libros existentes, como cambiar el precio, actualizar la descripción o cambiar el estado del libro.
- Eliminar listados de libros: Los vendedores pueden eliminar listados de libros que ya no deseen vender o intercambiar.

### 2.3. Sistema de pagos
Algunos casos de uso:
- Compra de libros
- Gestión de Fondos: pagar con tarjetas o tener como un fondo digital que se puede cargar con tarjeta o algo así.
- Historial de compras
- Historial de ventas

### 2.4. Envío y logísticas
Algunos casos de uso:
- Gestión de envíos: la coordinación entre vendedor y comprador
- Cálculo de costos de envío
- Estado del envío: para que el usuario pueda hacer seguimiento (como en Buscalibre)
- Gestión de problemas de envío o de recepción

## 3. Requerimientos funcionales

### 3.1. Usuario
- Registro de Usuarios (RFU-01): Los usuarios deben poder registrarse en la plataforma proporcionando información como nombre, dirección de correo electrónico y contraseña.
- Inicio de Sesión (RFU-02): Los usuarios registrados deben poder iniciar sesión en sus cuentas utilizando su correo electrónico y contraseña.
- Gestión de Perfil (RFU-03): Los usuarios pueden editar su perfil, incluyendo información personal como nombre, dirección y foto de perfil.
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
