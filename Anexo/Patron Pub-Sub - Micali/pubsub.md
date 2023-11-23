# Patrón de Diseño Pub/Sub:

El patrón de publicación/suscripción (pub/sub) consiste en un método de mensajería donde los emisores (publicadores) envían mensajes a canales (temas o topic), y los receptores (suscriptores) se registran para recibir mensajes de canales específicos.

**Características:**
- **Desacoplamiento:** Los publicadores y suscriptores no necesitan conocerse entre sí. Solo necesitan conocer el canal.
- **Escalabilidad:** Se pueden agregar fácilmente nuevos componentes al sistema sin afectar a los existentes.
- **Flexibilidad:** Permite la creación de sistemas distribuidos y modulares.

**Componentes:**
1. **Publicador (Publisher):** Emite mensajes y los envía a un canal específico.
2. **Suscriptor (Subscriber):** Se registra para recibir mensajes de un canal específico y realiza alguna acción en respuesta.
3. **Canal (Topic o Subject):** El medio a través del cual los mensajes son enviados. Los suscriptores se registran en canales específicos, pero hay opción de enviar los mensajes a todos los suscriptores (brodcast).

## Casos de Uso:

1. **Sistema de Mensajería en Tiempo Real:**
   - Aplicaciones que requieren actualizaciones en tiempo real, como aplicaciones de chats.

2. **Integración de Sistemas:**
   - Facilita la comunicación entre sistemas (modelo microservicios).

3. **Manejo de Eventos en Aplicaciones Web:**
   - En aplicaciones web modernas para actualizar la interfaz de usuario en respuesta a eventos del servidor.

## Video

https://github.com/ulima-arqui-sw/grupo04/assets/103280082/1e3fcbad-33a2-410a-ac13-5579b4843074

