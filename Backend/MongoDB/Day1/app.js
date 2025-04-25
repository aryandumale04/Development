const userModel=require('./userModel');
const express = require("express");
const app=express();





app.get("/",(req,res)=>{
    res.send("Hey");
})
app.get("/create",async (req,res)=>{
    
   let createdUser= await  userModel.create(
        {
            name : "Aryananshi",
           
            username : "aryan.ducsdcdmale",
            email : "aryandumadcdle04@gmail.com",
        }
    );
    res.send(createdUser);






})

app.get("/update",async (req,res)=>{
    
   
    let updatedUser = await userModel.findOneAndUpdate({name:"Aryan"},{name:"aaaaak47"},{new:true})
    res.send(updatedUser);
 
 
 
 
 
 })

 app.get("/read",async (req,res)=>{
       let users = await userModel.find();
       res.send(users);
 })

 app.get("/delete",async (req,res)=>{
    let deletedUSer = await userModel.findOneAndDelete({name:"Aryananshi"});
    res.send(deletedUSer);
})
app.listen(3000);