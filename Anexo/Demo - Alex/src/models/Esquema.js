const mongoose = require('mongoose');

const esquemaUsuario = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  correo: {
    type: String,
    required: true
  }
}, { collection: 'users' }); // Especifica el nombre de la colección en MongoDB

const Usuario = mongoose.model('Usuario', esquemaUsuario);

module.exports = Usuario;

