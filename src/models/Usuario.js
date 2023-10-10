const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true, // Garantiza que cada correo sea único en la base de datos
  },
  contraseña: {
    type: String,
    required: true,
  },
  fotoPerfil: {
    type: String, // Suponiendo que la foto de perfil sea una URL a la imagen
  },
});

const Usuario_2 = mongoose.model('Usuario_2', usuarioSchema);

module.exports = Usuario_2;

