const controller = {};
const connection = require('../dbConnection/connection');

controller.index = async (req, res) => {
  try {
    await connection();
    console.log('coneccion OK')
    res.send('La conexión con la base de datos fue exitosa');
  }catch(error){
    console.error(error);
  }
};



module.exports = controller;