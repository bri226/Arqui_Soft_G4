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


### 1.2 Ventajas y desventajas del uso
En la tabla inferior se visualizarán cuales son las ventajas y desventajas del uso de los motores de base de datos no relacionales.
| Ventajas                                       | Desventajas                                    |
|-----------------------------------------------|-----------------------------------------------|
| 1. **Flexibilidad en el Esquema:** Las bases de datos documentales permiten una estructura de datos flexible. Puedes agregar, modificar o eliminar campos en los documentos sin necesidad de cambiar un esquema fijo, lo que facilita la adaptación a cambios en los requisitos de datos. Esto es especialmente útil en aplicaciones en constante evolución. | 1. **No son la Mejor Opción para Transacciones ACID Complejas:** Las bases de datos documentales tienden a no ser la elección adecuada para aplicaciones que requieren transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) complejas. Las transacciones que involucran múltiples documentos pueden ser difíciles de gestionar y garantizar en entornos altamente distribuidos. |
| 2. **Escalabilidad Horizontal:** Estas bases de datos son altamente escalables horizontalmente. Puedes distribuir datos en múltiples servidores de manera eficiente para manejar grandes volúmenes de datos y cargas de trabajo crecientes. Esto se traduce en una mejor capacidad de expansión sin necesidad de actualizaciones costosas de hardware. | 2. **No son Ideales para Consultas Complejas con JOINs:** Las consultas que requieren JOINs complejos entre documentos pueden ser ineficientes en bases de datos documentales. Estas bases de datos están diseñadas para consultas en documentos individuales, no para operaciones de combinación de datos entre múltiples documentos. |
| 3. **Rendimiento en Operaciones de Lectura y Escritura:** Las bases de datos documentales suelen ofrecer un rendimiento rápido en operaciones de lectura y escritura. Debido a la estructura de datos basada en documentos y la capacidad de indexación, la recuperación de información y la inserción de datos son eficientes, lo que puede mejorar el rendimiento de las aplicaciones. | 3. **Menos Madurez en Herramientas y Ecosistema:** Aunque las bases de datos documentales han ganado popularidad, su ecosistema y herramientas aún pueden no estar tan maduras como las de las bases de datos relacionales. Esto puede dificultar la selección de herramientas adecuadas y el soporte para ciertos casos de uso. |
| 4. **Manejo Eficiente de Datos Semi-Estructurados y No Estructurados:** Son ideales para almacenar y gestionar datos semi-estructurados o no estructurados, como documentos de texto, registros de eventos, datos JSON o XML. Esto facilita el almacenamiento y análisis de datos de diversos formatos sin necesidad de estructuras rígidas. | 4. **Dificultad en Consultas Ad Hoc Complejas:** Las consultas ad hoc complejas, que no se pueden prever de antemano, pueden ser más complicadas de realizar en bases de datos documentales. Esto puede requerir esfuerzo adicional en el diseño de consultas y la indexación de datos. |
| 5. **Facilitan el Desarrollo Rápido:** La flexibilidad y la estructura de datos intuitiva en formato de documento pueden acelerar el desarrollo de aplicaciones. Los desarrolladores pueden centrarse en la lógica de la aplicación en lugar de preocuparse por esquemas complejos. | 5. **Mayor Tamaño de Almacenamiento:** Debido a la flexibilidad en la estructura de datos y la redundancia de información en documentos, las bases de datos documentales pueden ocupar más espacio de almacenamiento en comparación con las bases de datos relacionales bien normalizadas. |

### 1.3 Modelos de datos comunes en bases de datos documentales
*MongoDB: MongoDB es uno de los motores de bases de datos NoSQL documentales más populares. Utiliza el formato BSON y es conocido por su flexibilidad, escalabilidad y rendimiento. MongoDB es ampliamente utilizado en aplicaciones web y móviles. Su capacidad de escalabilidad horizontal y su capacidad para manejar grandes volúmenes de datos lo convierten en una elección sólida para aplicaciones de alto tráfico.

*CouchDB: CouchDB es otra base de datos documental que se destaca por su modelo de datos orientado a documentos y su capacidad para admitir replicación y sincronización de datos. Es adecuado para aplicaciones con requisitos de disponibilidad y resistencia, lo que lo convierte en una opción sólida para aplicaciones en las que la continuidad del servicio es fundamental.

*Firebase Firestore: Firestore es un servicio de base de datos NoSQL documental ofrecido por Google como parte de Firebase. Es especialmente popular en el desarrollo de aplicaciones móviles y web y se integra bien con otras herramientas de Firebase. Firestore ofrece una sincronización en tiempo real, lo que facilita la construcción de aplicaciones colaborativas y en tiempo real.

| Aspecto de Comparación         | MongoDB                         | CouchDB                          | Firebase Firestore                |
|--------------------------------|---------------------------------|----------------------------------|-----------------------------------|
| **Modelo de Datos**            | Utiliza el formato BSON y permite estructuras de documentos flexibles con campos anidados. | Utiliza un modelo de datos orientado a documentos con flexibilidad en la estructura. | Utiliza un modelo de datos basado en documentos y admite colecciones y documentos con esquema flexible. |
| **Escalabilidad**              | Altamente escalable horizontalmente, ideal para aplicaciones con grandes volúmenes de datos y alta concurrencia. | Ofrece escalabilidad horizontal y es adecuado para aplicaciones con requisitos de disponibilidad. | Proporciona escalabilidad horizontal y está diseñado para aplicaciones móviles y web con sincronización en tiempo real. |
| **Flexibilidad de Consulta**   | Admite consultas complejas y permite índices personalizados para optimizar consultas. | Ofrece una amplia capacidad de consulta, incluyendo vistas y MapReduce para consultas avanzadas. | Ofrece consultas en tiempo real con sincronización y consultas flexibles basadas en documentos. |
| **Popularidad y Comunidad**    | Ampliamente utilizado y cuenta con una gran comunidad de usuarios y desarrolladores. | Tiene una comunidad activa, aunque más pequeña en comparación con MongoDB. | Integra Firebase y se beneficia de su comunidad y herramientas adicionales para el desarrollo. |
| **Casos de Uso Destacados**    | Aplicaciones web y móviles, aplicaciones de alto tráfico, análisis en tiempo real. | Aplicaciones con requisitos de disponibilidad, aplicaciones de seguimiento de cambios, aplicaciones de colaboración. | Aplicaciones móviles y web, aplicaciones en tiempo real, aplicaciones colaborativas y de sincronización. |


## 2. Consideraciones Técnicas
### 2.1. Configuración de Servicio
### 2.2. Primeros pasos
## 3. Demo
### 3.1. Escenario práctico
### 3.2. Pasos para la demo
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
