const mongoose = require ('mongoose');



async function connectDB(){
    await mongoose.connect("your conn string");

    console.log ("Connected to DB")
}


module.exports = connectDB
