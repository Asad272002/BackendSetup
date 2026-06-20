const express = require ('express');

const app = express();

app.use(express.json());

const noteModel = require ("./models/note.model")

// note = {title, description}

// first you need to tell the db what type of data 
// you wanna store thats called as a schema 


app.post ('/notes', async (req,res)=>{
    const data = req.body

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(200).json({
        message : "Note Created Successfully"
    })
})


app.get ("/notes", async (req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message : "Here are all your requested notes",
        notes : notes
    })

})

module.exports = app;