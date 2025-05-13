const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const app =express ();
app.use(cookieParser());


app.get("/",(req,res)=>{
   let token = jwt.sign({
        email : "harsh@gmail.com"
    },"secret",)
    res.cookie("token",token);
    res.send("done");


})
app.get("/read",(req,res)=>{
    let data =  jwt.verify(req.cookies.token , "secret");
    console.log(data);
})

app.listen(3000)
