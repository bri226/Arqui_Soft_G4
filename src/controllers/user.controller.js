
const Usuario = require('../models/Esquema'); // Asegúrate de tener el nombre correcto del archivo de esquema
const mongoose = require('mongoose');

exports.mostrarUsuarios = async (req, res) => {
  try {
    // Consultar la base de datos para obtener todos los usuarios de la colección "users"
    const Usuarios = await Usuario.find();

    // Enviar la lista de usuarios como respuesta
    res.status(200).json(Usuarios);
  } catch (error) {
    // Manejar errores
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};
exports.agregarUsuario = async (req, res) => {
    const { nombre, apellido, edad, correo } = req.body;
    
    // Generar un ID aleatorio numérico
    const id = Math.floor(Math.random() * 1000000); // Puedes ajustar el rango según tus necesidades
  
    try {
      // Crea un nuevo usuario con los datos proporcionados y el ID aleatorio
      const nuevoUsuario = new Usuario({ id, nombre, apellido, edad, correo });
      await nuevoUsuario.save(); // Guarda el usuario en la base de datos
  
      res.json({ mensaje: 'Usuario agregado correctamente', usuario: nuevoUsuario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al agregar el usuario' });
    }
  };

  
  exports.eliminarUsuario = async (req, res) => {
    const { id } = req.query;
    try {
        // Elimina el usuario por ID numérico directamente
        await Usuario.findOneAndDelete({ id: id });
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
    }
};

exports.editarUsuario = async (req, res) => {
  const { id } = req.body; // Obtén el id del cuerpo de la solicitud
  const { nombre, apellido, edad, correo } = req.body; // Obtén los datos del cuerpo de la solicitud

  try {
    // Encuentra el usuario por su campo `id` en lugar de `_id`
    const usuarioActualizado = await Usuario.findOneAndUpdate(
      { id }, // Encuentra el usuario por el campo `id`
      { nombre, apellido, edad, correo }, // Datos para actualizar
      { new: true } // Devuelve el usuario actualizado
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al editar el usuario' });
  }
};
  