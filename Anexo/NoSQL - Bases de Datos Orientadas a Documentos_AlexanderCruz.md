# NoSQL - Bases de Datos Orientadas a Documentos
* Estudiante: Alexander Cruz Marticorena - 20192659 
* Proyecto Grupal: BookSwap
## 1. Desarrollo Conceptual
Una base de datos orientada a documentos está diseñada para gestionar información orientada a documentos o datos semi-estructurados. Según Del Busto (2012), este tipo de bases de datos constituye una de las principales categorías de las llamadas bases de datos NoSQL. La popularidad del término "base de datos orientada a documentos" o "almacén de documentos" ha crecido a la par con el uso del término NoSQL en sí. A diferencia de las conocidas bases de datos relacionales con su definición de "tabla", los sistemas documentales están diseñados en torno a la definición abstracta de un "documento".Las bases de datos documentales se consideran un escalón superior en comparación con los simples gestores de llave-valor, ya que permiten encapsular pares de llave-valor en estructuras más complejas denominadas documentos. No existe un esquema estricto a seguir para definir estos documentos, lo que simplifica sustancialmente su uso.Almacenar y recuperar todos los datos relacionados como una sola unidad puede ofrecer ventajas enormes en el rendimiento y la escalabilidad. De esta manera, los gestores de datos no tienen que realizar operaciones complejas como las uniones para encontrar los datos que normalmente están relacionados, ya que todo se encuentra en un mismo lugar (Del Busto, 2012).

A diferencia de las bases de datos relacionales, que utilizan tablas y esquemas fijos, las bases de datos documentales permiten que los documentos (generalmente en formato JSON o BSON) se almacenen de forma flexible, lo que las hace ideales para casos de uso donde los esquemas de datos pueden variar o evolucionar con el tiempo.En las bases de datos documentales, los datos se almacenan en documentos, que son estructuras de datos autocontenidas que pueden incluir una variedad de campos y valores. Los documentos pueden anidarse y ser altamente flexibles en términos de estructura, lo que permite modelar datos complejos de manera eficiente.

### 1.1 Comparación con bases de datos relacionales
En comparación con las bases de datos relacionales, las bases de datos documentales ofrecen varias diferencias clave:

| Característica                   | Bases de Datos Relacionales     | Bases de Datos Documentales        |
|----------------------------------|---------------------------------|-----------------------------------|
| Esquema Flexible                 | Requieren un esquema fijo y predefinido, lo que puede dificultar la adaptación a cambios en los requisitos de datos. | No requieren un esquema fijo y predefinido, lo que facilita la adaptación a cambios en los requisitos de datos sin necesidad de modificar la estructura de la base de datos. |
| Escalabilidad                    | Suelen requerir escalabilidad vertical, lo que puede ser costoso y complicado. | Son altamente escalables horizontalmente, lo que significa que pueden manejar grandes volúmenes de datos distribuidos en múltiples servidores de manera eficiente. |
| Modelo de Datos                  | Utilizan tablas y relaciones complejas entre tablas para representar datos. | Utilizan modelos de datos basados en documentos (por ejemplo, JSON o BSON) para representar datos, lo que permite una estructura más flexible y anidada. |


### 1.2 Ventajas y desventajas del uso de base de datos no relacionales
En la tabla inferior se visualizarán cuales son las ventajas y desventajas del uso de los motores de base de datos no relacionales.
| Ventajas                                       | Desventajas                                    |
|-----------------------------------------------|-----------------------------------------------|
| 1. **Flexibilidad en el Esquema:** Las bases de datos documentales permiten una estructura de datos flexible. Puedes agregar, modificar o eliminar campos en los documentos sin necesidad de cambiar un esquema fijo, lo que facilita la adaptación a cambios en los requisitos de datos. Esto es especialmente útil en aplicaciones en constante evolución. | 1. **No son la Mejor Opción para Transacciones ACID Complejas:** Las bases de datos documentales tienden a no ser la elección adecuada para aplicaciones que requieren transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) complejas. Las transacciones que involucran múltiples documentos pueden ser difíciles de gestionar y garantizar en entornos altamente distribuidos. |
| 2. **Escalabilidad Horizontal:** Estas bases de datos son altamente escalables horizontalmente. Puedes distribuir datos en múltiples servidores de manera eficiente para manejar grandes volúmenes de datos y cargas de trabajo crecientes. Esto se traduce en una mejor capacidad de expansión sin necesidad de actualizaciones costosas de hardware. | 2. **No son Ideales para Consultas Complejas con JOINs:** Las consultas que requieren JOINs complejos entre documentos pueden ser ineficientes en bases de datos documentales. Estas bases de datos están diseñadas para consultas en documentos individuales, no para operaciones de combinación de datos entre múltiples documentos. |
| 3. **Rendimiento en Operaciones de Lectura y Escritura:** Las bases de datos documentales suelen ofrecer un rendimiento rápido en operaciones de lectura y escritura. Debido a la estructura de datos basada en documentos y la capacidad de indexación, la recuperación de información y la inserción de datos son eficientes, lo que puede mejorar el rendimiento de las aplicaciones. | 3. **Menos Madurez en Herramientas y Ecosistema:** Aunque las bases de datos documentales han ganado popularidad, su ecosistema y herramientas aún pueden no estar tan maduras como las de las bases de datos relacionales. Esto puede dificultar la selección de herramientas adecuadas y el soporte para ciertos casos de uso. |
| 4. **Manejo Eficiente de Datos Semi-Estructurados y No Estructurados:** Son ideales para almacenar y gestionar datos semi-estructurados o no estructurados, como documentos de texto, registros de eventos, datos JSON o XML. Esto facilita el almacenamiento y análisis de datos de diversos formatos sin necesidad de estructuras rígidas. | 4. **Dificultad en Consultas Ad Hoc Complejas:** Las consultas ad hoc complejas, que no se pueden prever de antemano, pueden ser más complicadas de realizar en bases de datos documentales. Esto puede requerir esfuerzo adicional en el diseño de consultas y la indexación de datos. |
| 5. **Facilitan el Desarrollo Rápido:** La flexibilidad y la estructura de datos intuitiva en formato de documento pueden acelerar el desarrollo de aplicaciones. Los desarrolladores pueden centrarse en la lógica de la aplicación en lugar de preocuparse por esquemas complejos. | 5. **Mayor Tamaño de Almacenamiento:** Debido a la flexibilidad en la estructura de datos y la redundancia de información en documentos, las bases de datos documentales pueden ocupar más espacio de almacenamiento en comparación con las bases de datos relacionales bien normalizadas. |

### 1.3 Modelos de datos comunes en bases de datos documentales
* MongoDB: MongoDB es uno de los motores de bases de datos NoSQL documentales más populares. Utiliza el formato BSON y es conocido por su flexibilidad, escalabilidad y rendimiento. MongoDB es ampliamente utilizado en aplicaciones web y móviles. Su capacidad de escalabilidad horizontal y su capacidad para manejar grandes volúmenes de datos lo convierten en una elección sólida para aplicaciones de alto tráfico.

* CouchDB: CouchDB es otra base de datos documental que se destaca por su modelo de datos orientado a documentos y su capacidad para admitir replicación y sincronización de datos. Es adecuado para aplicaciones con requisitos de disponibilidad y resistencia, lo que lo convierte en una opción sólida para aplicaciones en las que la continuidad del servicio es fundamental.

* Firebase Firestore: Firestore es un servicio de base de datos NoSQL documental ofrecido por Google como parte de Firebase. Es especialmente popular en el desarrollo de aplicaciones móviles y web y se integra bien con otras herramientas de Firebase. Firestore ofrece una sincronización en tiempo real, lo que facilita la construcción de aplicaciones colaborativas y en tiempo real.

En tabla inferior se puede observar la comparación a partir de 5 criterios de los tres motores mencionados anteriormente:modelo de datos, escabilidad, flexibilidad de consulta, popularidad y comunidad, casos de uso destecados.

| Aspecto de Comparación         | MongoDB                         | CouchDB                          | Firebase Firestore                |
|--------------------------------|---------------------------------|----------------------------------|-----------------------------------|
| **Modelo de Datos**            | Utiliza el formato BSON y permite estructuras de documentos flexibles con campos anidados. | Utiliza un modelo de datos orientado a documentos con flexibilidad en la estructura. | Utiliza un modelo de datos basado en documentos y admite colecciones y documentos con esquema flexible. |
| **Escalabilidad**              | Altamente escalable horizontalmente, ideal para aplicaciones con grandes volúmenes de datos y alta concurrencia. | Ofrece escalabilidad horizontal y es adecuado para aplicaciones con requisitos de disponibilidad. | Proporciona escalabilidad horizontal y está diseñado para aplicaciones móviles y web con sincronización en tiempo real. |
| **Flexibilidad de Consulta**   | Admite consultas complejas y permite índices personalizados para optimizar consultas. | Ofrece una amplia capacidad de consulta, incluyendo vistas y MapReduce para consultas avanzadas. | Ofrece consultas en tiempo real con sincronización y consultas flexibles basadas en documentos. |
| **Popularidad y Comunidad**    | Ampliamente utilizado y cuenta con una gran comunidad de usuarios y desarrolladores. | Tiene una comunidad activa, aunque más pequeña en comparación con MongoDB. | Integra Firebase y se beneficia de su comunidad y herramientas adicionales para el desarrollo. |
| **Casos de Uso Destacados**    | Aplicaciones web y móviles, aplicaciones de alto tráfico, análisis en tiempo real. | Aplicaciones con requisitos de disponibilidad, aplicaciones de seguimiento de cambios, aplicaciones de colaboración. | Aplicaciones móviles y web, aplicaciones en tiempo real, aplicaciones colaborativas y de sincronización. |

### 1.4 Comparación entre tipo de base de datos NoSQL
En la tabla inferior se visualiza la comparación entre los 3 tipos de bases de datos No SQL

| Ventaja                                                   | Bases de Datos Documentales   | Bases de Datos Clave-Valor     | Bases de Datos de Grafos      |
|-----------------------------------------------------------|-----------------------------|-----------------------------|-----------------------------|
| **Flexibilidad en el Modelo de Datos**                     | Ofrecen una estructura flexible de documentos con campos anidados, lo que permite representar datos complejos y semi-estructurados. | Ofrecen una estructura simple con pares de clave-valor, lo que facilita el almacenamiento de datos simples y uniformes. | Utilizan nodos y relaciones para representar datos complejos y las conexiones entre ellos, lo que es ideal para aplicaciones que requieren análisis de redes y relaciones. |
| **Escalabilidad Horizontal**                               | Son altamente escalables horizontalmente, lo que facilita la gestión de grandes volúmenes de datos distribuidos en múltiples servidores. | También son escalables horizontalmente, pero pueden ser menos eficientes para datos complejos que requieren JOINs. | Ofrecen escalabilidad horizontal, pero su eficiencia puede verse afectada en aplicaciones con relaciones profundas y consultas complejas. |
| **Rendimiento en Operaciones de Lectura y Escritura**      | Suelen ofrecer un buen rendimiento en operaciones de lectura y escritura debido a la capacidad de indexación y la estructura de documentos. | Ofrecen un rendimiento rápido en operaciones de lectura y escritura debido a su simplicidad y estructura de clave-valor. | El rendimiento varía según la base de datos y la cantidad de relaciones, lo que puede requerir optimizaciones específicas. |
| **Manejo de Datos Semi-Estructurados y No Estructurados** | Son ideales para datos semi-estructurados o no estructurados, como documentos JSON o XML, lo que facilita el almacenamiento y análisis de datos diversos. | Son adecuados para datos estructurados y simples, pero pueden no ser la mejor opción para datos complejos o no estructurados. | Se adaptan bien a datos con estructuras de grafo, como redes sociales, y pueden representar conexiones de manera eficiente. |
| **Facilitan el Desarrollo Rápido**                         | La flexibilidad en el esquema y la estructura de datos intuitiva aceleran el desarrollo de aplicaciones, permitiendo a los desarrolladores centrarse en la lógica de la aplicación. | La simplicidad de los modelos de clave-valor puede acelerar el desarrollo, pero puede requerir más trabajo en la lógica de la aplicación para gestionar relaciones. | Pueden requerir un diseño de datos más detallado, lo que puede llevar más tiempo, pero ofrecen un alto rendimiento en análisis de grafos. |

### 1.5 Selección de motor de Base de datos
La elección de MongoDB como el motor de base de datos principal para el proyecto "BookSwap" se basa en una serie de razones técnicas y atributos de calidad que son cruciales para el éxito y rendimiento de la plataforma. A continuación, se detallan estos motivos específicos:

* Modelo de Datos Flexible: MongoDB se destaca por su capacidad para manejar datos semi-estructurados y no estructurados, lo que encaja perfectamente con la diversidad de información que se encuentra en "BookSwap". En una plataforma donde los usuarios pueden agregar descripciones de libros con información variada, MongoDB permite una representación flexible de estos datos en forma de documentos JSON o BSON. Esto significa que los usuarios pueden incluir detalles diversos sobre los libros, como título, autor, género, estado, precio y más, sin estar limitados por un esquema de base de datos rígido. Esto enriquece la experiencia del usuario y facilita la gestión de datos heterogéneos.

* Escalabilidad Horizontal: Dado que anticipamos un crecimiento constante en la cantidad de usuarios y productos en "BookSwap", la escalabilidad horizontal es esencial. MongoDB es conocido por su capacidad de escalabilidad horizontal, lo que permitirá administrar grandes volúmenes de datos y cargas de trabajo en constante crecimiento de manera eficiente. A medida que la plataforma gane popularidad y la base de usuarios aumente, MongoDB nos brinda la flexibilidad de agregar más servidores para distribuir la carga y mantener un alto rendimiento, sin la necesidad de cambios drásticos en la infraestructura.

* Rendimiento en Operaciones de Lectura y Escritura: En una red social como "BookSwap", donde los usuarios realizan operaciones de lectura y escritura constantemente, el rendimiento es un factor crítico para garantizar una experiencia de usuario fluida y receptiva. MongoDB ofrece un rendimiento rápido en operaciones de lectura y escritura gracias a su capacidad de indexación y su estructura de documentos. Los usuarios podrán publicar, comentar y realizar compras sin experimentar demoras significativas, lo que mejora la satisfacción del usuario y fomenta la participación activa en la plataforma.

* Facilidad de Desarrollo: La flexibilidad en el esquema de MongoDB y su estructura de documentos intuitiva facilitan el desarrollo rápido de la aplicación. Los desarrolladores podrán centrarse en la lógica de la aplicación y en brindar una experiencia de usuario sólida sin preocuparse por esquemas rígidos. Esto acelera el proceso de desarrollo y permite la implementación ágil de nuevas características y mejoras en respuesta a las necesidades cambiantes de los usuarios.

* Soporte para Consultas Complejas: MongoDB ofrece una amplia gama de capacidades de consulta, incluida la capacidad de realizar consultas complejas y de indexación personalizada. Esto es esencial en una plataforma donde los usuarios desean buscar libros según criterios específicos, como autor, género, estado del libro o incluso características de las imágenes de los libros. MongoDB permite la implementación de funcionalidades de búsqueda avanzada y proporciona a los usuarios la capacidad de encontrar rápidamente los libros que desean.

* Soporte para Imágenes: En "BookSwap", la capacidad de los usuarios para cargar imágenes de los libros que desean vender es fundamental para enriquecer la experiencia de usuario y facilitar la venta de libros de segunda mano. MongoDB puede gestionar eficazmente el almacenamiento y recuperación de imágenes y otros archivos multimedia asociados con los libros. Esto garantiza que los usuarios puedan cargar fotos de alta calidad de los libros que desean vender, lo que aumenta la atractividad de sus publicaciones y mejora la visibilidad de los productos en la plataforma.

# 2. Consideraciones Técnicas

## 2.1. Configuración de Servicio

Para el proyecto "BookSwap", hemos decidido utilizar MongoDB como nuestro motor de base de datos en la nube, en este caso, denominado "ArquiSoft". Esta elección nos brinda la flexibilidad y escalabilidad necesarias para administrar grandes volúmenes de datos y proporcionar una experiencia de usuario sólida.

#### Elección del Servicio de MongoDB en la Nube

Hemos optado por utilizar un servicio de MongoDB en la nube para aprovechar las ventajas de la administración de base de datos sin preocuparnos por la infraestructura subyacente. Algunos de los proveedores populares de servicios de MongoDB en la nube incluyen MongoDB Atlas, Amazon DocumentDB y Google Cloud Firestore. En nuestro caso, hemos seleccionado MongoDB Atlas debido a su facilidad de uso, escalabilidad y opciones de seguridad avanzadas.

#### Creación de un Clúster de MongoDB Atlas

El primer paso es crear un clúster de MongoDB Atlas. Esto se puede hacer siguiendo estos pasos:

1. Acceder a la plataforma MongoDB Atlas en [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

2. Iniciar sesión o crear una cuenta si aún no la tienes.

3. Crear un nuevo proyecto para "BookSwap" y seleccionar un clúster compartido o dedicado, dependiendo de los requisitos de rendimiento y escalabilidad de la aplicación.

4. Elegir la región de alojamiento para el clúster para garantizar la proximidad a los usuarios y minimizar la latencia.

5. Configurar las opciones de seguridad, como la autenticación y la lista de direcciones IP permitidas, para proteger el acceso a la base de datos.

6. Confirmar la configuración y crear el clúster.

#### Configuración de la Conexión

Una vez que el clúster se haya creado con éxito, debemos configurar la conexión de nuestra aplicación a MongoDB Atlas. Esto implica obtener la cadena de conexión que incluye credenciales de acceso y detalles del clúster. Dicha cadena de conexión se proporciona en el panel de control de MongoDB Atlas y se puede integrar en nuestra aplicación para establecer una conexión segura.

## 2.2. Primeros pasos

Con la configuración del servicio de MongoDB Atlas en marcha, estamos listos para dar los primeros pasos en el desarrollo de "BookSwap". Dado que solo se implementarán las funcionalidades de inicio de sesión (login) y registro, los pasos iniciales se centrarán en estos aspectos:

#### Desarrollo de la Autenticación

Nuestra aplicación requerirá un sistema de autenticación que permita a los usuarios registrarse (crear una cuenta) y luego iniciar sesión. Para esto, utilizaremos la base de datos "ArquiSoft" y su colección "usuario" para almacenar y gestionar la información de los usuarios.

1. Configurar las operaciones de registro y inicio de sesión en la aplicación, utilizando MongoDB para almacenar y recuperar la información de los usuarios.

2. Implementar medidas de seguridad, como el almacenamiento seguro de contraseñas utilizando técnicas de hash y salting.

3. Validar y verificar la autenticidad de los usuarios durante el proceso de inicio de sesión.

4. Desarrollar las páginas de registro e inicio de sesión en la interfaz de usuario de la aplicación, permitiendo a los usuarios crear cuentas y acceder a sus perfiles.

# 3. Demo

## 3.1. Escenario Práctico

En la demostración de MongoDB para el proyecto "BookSwap", nos centraremos en la colección "usuario" de la base de datos "ArquiSoft" para mostrar cómo se realizan las operaciones de inicio de sesión y registro , además se realizara un crud en un archivo de nombre test.js, para mostrar el uso de api y como estas modifican los elementos almacenados en mongoDB.

## 3.2. Pasos para la Demo

Durante la demostración, seguiremos estos pasos:

1. Acceder al panel de control de MongoDB Atlas y mostrar la configuración del clúster en la nube.

2. Mostrar cómo se establece la conexión desde la aplicación de "BookSwap" a la base de datos "ArquiSoft" utilizando la cadena de conexión proporcionada por MongoDB Atlas.

3. Realizar una demostración en vivo de cómo los usuarios pueden registrarse en la aplicación completando un formulario de registro y cómo estos datos se almacenan en la colección "usuario" de la base de datos.

4. Mostrar el proceso de inicio de sesión, donde los usuarios ingresan sus credenciales y la aplicación verifica su autenticidad a través de la colección "usuario".

5. Resaltar las medidas de seguridad implementadas, como el almacenamiento seguro de contraseñas.

Estos pasos de demostración permitirán a los usuarios comprender cómo funciona la autenticación en "BookSwap" y cómo MongoDB se utiliza para gestionar la información de los usuarios en la base de datos "ArquiSoft".
![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/1c18cd65-a888-4330-9c43-ff7533b42324)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/4cbe4032-a369-46b0-9d97-f2a65f44e6f9)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/89c4328e-06fc-4264-bb22-17f063069ab7)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/867d008f-09a4-4c94-a6d2-853e0516b7e9)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/c5787279-3109-468e-b8c9-7f84af7f8bdf)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/a244bd1f-3385-40e3-82d2-a9e0f6ad0146)

![image](https://github.com/bri226/Arqui_Soft_G4/assets/98053517/dcf4aabc-37c2-4f73-b391-d6d91e6925e1)




### 3.3. Resultados

## 4. Referencias
Del Busto, I. H. G. (2012). BASES DE DATOS NoSQL. https://revistatelematica.cujae.edu.cu/index.php/tele/article/view/74
