/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

const { MONGODB_USER, MONGODB_PASS, MONGODB_DATABASE} =  require('./config');

const MONGODB_URI =  `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.etjir.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect( MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then( db => console.log('Database is connected'))
.catch( err => console.log(err));

//mongoose.set("debug", true);