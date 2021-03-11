//Importando passport, middleware para autenticación.
const passport = require('passport');  

//Importando estrategia autenticación. --> passport-local
 const LocalStrategy = require('passport-local').Strategy;   
 
const Usuario = require('../models/Usuario');

passport.use(new LocalStrategy({
    //Configurando elementos utilizados para habilitar sesión.
    usernameField: 'email',
    passwordField: 'password'
}, async function (email, password, done) {
    const usuario = await Usuario.findOne({ email });
    if (!user || !user.validarPassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)'}});
    } else {
        return done(null, user);
    }
    
}));