const path = require('path');

if (process.env.NODE_ENV === 'development'){
  const dotenv = require('dotenv');
  //Configuraciones de entorno
  dotenv.config({
    path : path.resolve(__dirname,'..', process.env.NODE_ENV + '.env')});
    
  console.log ('Using',path.resolve(__dirname,'..', process.env.NODE_ENV+'.env')
  );
}
else{ const dotenv = require('dotenv').config() }


  module.exports = {
      PORT : process.env.PORT || 3000,
      HOST : process.env.HOST || 'localhost',
      MONGODB_USER : process.env.MONGODB_USER,
      MONGODB_PASS: process.env.MONGODB_PASS,
     MONGODB_DATABASE : process.env.MONGODB_DATABASE,
     secret: process.env.SECRET || 'secret',
     DB_URI : process.env.DB_URI
  }