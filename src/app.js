const express = require ("express");


const app = express();

const notes=[]
app.use(express.json()); //this is middleware


app.post('/note', (req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message : "Response successfully sent"
    })// send a success 201 status code with the json message back to server 
})


app.get ('/note', (req,res)=>{
    res.status (200).json({
        message : "Contents for notes",
        notes: notes 

    })
})

// delete /note :index
app.delete('/note/:index', (req,res)=>{

    const index= req.params.index

    delete notes [index]

    res.status(200).json({
        message : "Note Deleted Successfully" 
    })
})

app.patch('/note/:index', (req,res)=>{
    const index = req.params.index
    const description = req.body.description 
    const title = req.body.title


    notes [index].description = description
    notes [index].title = title


    res.status (200).json ({
        message : "note updated successfully"
    })
})

module.exports = app;