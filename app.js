var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
const app = express();

const {PORT, HOST} = require('./config');

require('./database');

// configuración de middlewares
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


require("./models/Usuario");
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');



// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(PORT , HOST, function(){
  console.log(`Escuchando en http://${HOST}:${server.address().port}`);
});