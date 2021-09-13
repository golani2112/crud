const express=require('express');

const app=express();
const dotenv=require('dotenv').config();
const port=process.env.PORT;
const db=require("./config/mongoose");

app.use(express.json());
app.use('/',require('./routes'));


//start a server

app.listen(port,()=>{
    console.log("Server started at port",port);
})