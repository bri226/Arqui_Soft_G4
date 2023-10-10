const mongoose = require('mongoose');

const password = 'euler2020';
const dbName = 'Usuarios';
const uri = `mongodb+srv://amatu85:${password}@cluster0.cfz4yqe.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;