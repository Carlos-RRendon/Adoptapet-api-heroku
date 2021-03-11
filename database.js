/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

const { DB_URI} =  require('./config/config');


mongoose.connect( DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then( db => console.log('Database is connected'))
.catch( err => console.log(err));

//mongoose.set("debug", true);