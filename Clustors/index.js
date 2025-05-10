const express = require('express');
const app=express();
const cors = require('cors');
const bodyparser=require('body-parser');


app.use(cors());
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    return res.send(`<h1>Hello from Process ID : ${process.pid} </h1>`)
})

module.exports=app;