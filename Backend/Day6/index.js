const express = require('express');
const path=require('path');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');//backedn kya render karega (view ) karega =ejs pages


app.get("/",function(req,res){
res.render("index")//pura file name bhi likh sakte but usually nahi 
});
app.get("/profile/:username",function(req,res){
    req.params.username //ye aur upar wala same chahiye
    res.send("Welcome " + req.params.username)//pura file name bhi likh sakte but usually nahi 
    });

app.listen(3000,function(){
    console.log("Daud raha hu bhaui ");
})
