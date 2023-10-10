const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController'); // Asegúrate de tener la ruta correcta al controlador

// Ruta para registrar un nuevo usuario
router.post('/registro', usuarioController.registrarUsuario);
router.post('/login', usuarioController.iniciarSesion);
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.post('/subir-foto-perfil', usuarioController.subirFotoPerfil, usuarioController.guardarFotoPerfil);
// Implementa las rutas para el inicio de sesión si es necesario

module.exports = router;