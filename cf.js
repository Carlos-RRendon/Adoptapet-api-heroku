const path = require('path');
const dotenv = require('dotenv');

//Configuraciones de entorno
dotenv.config({
    path : path.resolve(__dirname, process.env.NODE_ENV + '.env')
  });

  module.exports = {
      PORT : process.env.PORT || 3000,
      MONGODB_USER : process.env.MONGODB_USER,
      MONGODB_PASS: process.env.MONGODB_PASS,
     MONGODB_DATABASE : process.env.MONGODB_DATABASE,
     secret: process.env.SECRET || 'secret'
  }