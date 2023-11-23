document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const form = document.getElementById('form');
  const input = document.getElementById('m');
  const fileInput = document.getElementById('fileInput');
  const messages = document.getElementById('messages');
  const usernameInput = document.getElementById('username');

  let username;

  document.getElementById('joinButton').addEventListener('click', () => {
    // Validar que se haya ingresado un nombre de usuario
    if (usernameInput.value.trim() === '') {
      alert('Por favor, ingresa tu nombre antes de unirte al chat.');
      return;
    }

    // Deshabilitar el campo de nombre de usuario y el botón después de unirse
    username = usernameInput.value;
    usernameInput.disabled = true;
    document.getElementById('joinButton').disabled = true;

    // Mostrar el área del chat
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const messageContent = input.value;
    const file = fileInput.files[0];

    if (messageContent.trim() !== '' || file) {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
          const imageData = reader.result;

          // Enviar mensaje al servidor con usuario, contenido y la imagen en base64
          socket.emit('message', { user: username, content: null, image: imageData });
        };
        reader.readAsDataURL(file);
      } else {
        // Enviar mensaje al servidor con usuario y contenido de texto
        socket.emit('message', { user: username, content: messageContent, image: '' });
      }

      input.value = '';
      fileInput.value = '';
    }
  });

  socket.on('message', (data) => {
    const messageItem = document.createElement('li');

    if (data.image) {
      const imageElement = document.createElement('img');
      imageElement.src = data.image;
      imageElement.alt = 'Imagen del mensaje';
      messageItem.appendChild(imageElement);
    } else {
      const textNode = document.createTextNode(`${data.user}: ${data.content}`);
      messageItem.appendChild(textNode);
    }

    messages.appendChild(messageItem);
  });

  socket.on('connect', () => {
    console.log('Conectado al servidor de sockets');
  });

  socket.on('disconnect', () => {
    console.log('Desconectado del servidor de sockets');
  });
});


