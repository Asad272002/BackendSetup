const mongoose = require ('mongoose');



async function connectDB(){
    await mongoose.connect("mongodb+srv://Asad:0i25B3NRv0NnWTMg@backendcomplete.matdnlq.mongodb.net/backend");

    console.log ("Connected to DB")
}


module.exports = connectDB