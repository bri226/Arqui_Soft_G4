const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const Usuario_2 = require('../models/Usuario');

exports.registrarUsuario = async (req, res) => {
  const { nombre, apellido, correo, contraseña, fotoPerfil } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const usuarioExistente = await Usuario_2.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'Correo ya registrado' });
    }

    // Hash de la contraseña
    const hashContraseña = await bcrypt.hash(contraseña, 10);

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario_2({
      nombre,
      apellido,
      correo,
      contraseña: hashContraseña,
      fotoPerfil
    });

    await nuevoUsuario.save();
    
    console.log('Usuario registrado correctamente:', nuevoUsuario); // Mensaje en la consola
    
    res.json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
};


// Puedes agregar más funciones del controlador aquí según tus necesidades.


// Implementa el controlador para el inicio de sesión si es necesario
exports.iniciarSesion = async (req, res) => {
    const { correo, contraseña } = req.body;
  
    try {
      // Verificar si el correo existe en la base de datos
      const usuario = await Usuario_2.findOne({ correo });
  
      if (!usuario) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
  
      // Verificar la contraseña
      const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
  
      if (!contraseñaValida) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
  
      // Si llega a este punto, las credenciales son válidas
      res.json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
  };


  exports.obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario_2.find().select('nombre apellido correo fotoPerfil -_id');
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
    }
  };

  // Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // La carpeta donde se almacenarán las imágenes
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // Limita el tamaño del archivo a 5 MB
    },
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/; // Tipos de archivos permitidos
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Solo se permiten imágenes JPEG, JPG o PNG'));
    }
}).single('fotoPerfil'); // 'fotoPerfil' debe coincidir con el campo del formulario

exports.subirFotoPerfil = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // Error de Multer
            return res.status(500).json({ mensaje: 'Error al subir la imagen de perfil', error: err.message });
        } else if (err) {
            // Otro tipo de error
            return res.status(500).json({ mensaje: 'Error al subir la imagen de perfil', error: err.message });
        } else if (!req.file) {
            // Si req.file es undefined, significa que no se subió ningún archivo
            return res.status(400).json({ mensaje: 'No se ha seleccionado ningún archivo' });
        }
        next(); // Si no hay errores, pasa al siguiente middleware
    });
};

exports.guardarFotoPerfil = async (req, res) => {
    try {
        const fotoPerfilURL = req.file.path; // La URL de la imagen almacenada en el servidor

        // Obtén el correo del usuario del cuerpo de la solicitud
        const correoUsuario = req.body.correo; // Asegúrate de enviar el correo del usuario desde el frontend

        // Actualiza el campo 'fotoPerfil' del usuario en la base de datos con la nueva URL
        await Usuario_2.findOneAndUpdate({ correo: correoUsuario }, { fotoPerfil: fotoPerfilURL });

        res.json({ mensaje: 'Imagen de perfil subida exitosamente', fotoPerfilURL });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al subir la imagen de perfil', error: error.message });
    }
};






