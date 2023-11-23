# Patrón de Arquitectura Peer-to-Peer (P2P)

## Definición:

El patrón de arquitectura Peer-to-Peer (P2P) es un modelo en el que cada sistema en la red tiene la capacidad tanto de actuar como cliente como de proporcionar servicios como servidor. En lugar de depender de un servidor centralizado, los nodos en una red P2P pueden comunicarse directamente entre sí sin la necesidad de un intermediario. Este enfoque descentralizado es particularmente útil en escenarios donde se busca distribuir la carga de trabajo y mejorar la redundancia del sistema.

## Definiciones Generales:

- **Descentralización:** La principal característica del P2P es la ausencia de un servidor central. Todos los nodos en la red son iguales y pueden comunicarse directamente entre sí.

- **Escalabilidad:** El modelo P2P es altamente escalable, ya que la adición de nuevos nodos no requiere cambios significativos en la infraestructura existente.

- **Redundancia:** La falta de un punto central de fallo mejora la redundancia del sistema, ya que cada nodo tiene la capacidad de asumir las funciones de otros nodos en caso de fallo.

- **Eficiencia:** Los sistemas P2P pueden distribuir la carga de trabajo de manera eficiente, ya que cada nodo contribuye al procesamiento y almacenamiento de datos.

## Escenario de Uso: Chat Peer-to-Peer con Envío de Imágenes

### Descripción del Escenario:

En un entorno de chat Peer-to-Peer, los usuarios pueden intercambiar mensajes directamente entre sí sin depender de un servidor central. Además, se permite el envío de imágenes entre los participantes del chat. Este escenario destaca las ventajas del modelo P2P, como la descentralización, la escalabilidad y la redundancia.

### Características Clave del Escenario:

1. **Descentralización del Chat:** Cada usuario en el chat actúa como un nodo igual en la red, permitiendo una comunicación directa sin la necesidad de un servidor central.

2. **Escalabilidad:** La adición de nuevos usuarios no afecta negativamente el rendimiento del sistema, ya que cada nodo puede comunicarse con cualquier otro nodo.

3. **Envío de Imágenes:** El sistema permite a los usuarios enviar imágenes directamente entre sí. Cada imagen se distribuye de manera descentralizada entre los nodos participantes.

4. **Redundancia:** La descentralización proporciona redundancia, ya que si un nodo falla, otros nodos pueden asumir sus funciones para garantizar la continuidad del chat.

### Implementación Técnica:

La implementación técnica de un chat Peer-to-Peer con envío de imágenes podría utilizar tecnologías como Socket.io para la comunicación en tiempo real entre los nodos. Además, se podrían emplear algoritmos de enrutamiento eficientes para facilitar la conexión entre los usuarios y la distribución de datos, incluidas las imágenes.

Video: https://ulima-edu-pe.zoom.us/rec/share/AbHfaK--dMS2ocF5_NI62QLZTSiel7E-5_SLeE0SoEYAuH9wY2JfoIdVzw4fMdBH.7wFqv1aHPj3v_4mI?startTime=1700771532000
