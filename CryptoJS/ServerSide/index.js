const express = require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const port = 8000;
const userRoutes = require('./routes/user.js');
const app=express();

app.use(cors());
app.use(bodyparser.json());

app.use(userRoutes);

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})