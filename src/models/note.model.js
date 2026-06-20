const mongoose = require ("mongoose")

// tell the db the structure of data 
const noteSchema = new mongoose.Schema({
    title : String ,
    description : String 
})


// to perform CRUD efficiently we use model on note

const noteModel = mongoose.model("note", noteSchema)


module.exports = noteModel