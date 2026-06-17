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


module.exports = app;