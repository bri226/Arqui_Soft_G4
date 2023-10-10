const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



router.get('/users', userController.mostrarUsuarios);
router.post('/agregar', userController.agregarUsuario);
router.put('/editar/:id', userController.editarUsuario); // Ruta para editar usuario por ID
router.delete('/eliminar', userController.eliminarUsuario); // Ruta para eliminar usuario por ID


module.exports = router;