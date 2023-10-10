const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const bodyParser = require('body-parser');
const connectDB = require('./dbConnection/connection');
const userRoutes = require('./routes/user.routes');
const usuarioRoutes = require('./routes/usuario.routes'); // Importa las rutas de usuarios

const app = express();

// Conectar a la base de datos
connectDB();

// Habilitar CORS para todas las rutas
app.use(cors());

// Configurar el middleware Body Parser
app.use(bodyParser.json());

// Usar las rutas de usuarios
app.use('/api', userRoutes);
app.use('/api', usuarioRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

