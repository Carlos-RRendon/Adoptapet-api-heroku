/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

const MONGODB_URI =  "mongodb+srv://Freshratings:Equipo18FreshRatings@cluster0.etjir.mongodb.net/Adoptapet?retryWrites=true&w=majority"

mongoose.connect( MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then( db => console.log('Database is connected'))
.catch( err => console.log(err));

mongoose.set("debug", true);