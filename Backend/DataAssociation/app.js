const express =  require("express");
const app = express();

//acquire schemas (active ones = model) after they are created

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/",(req,res)=>{

    res.send("Server is working");

});

app.get("/create" ,async (req,res)=>{
   
     let user = await userModel.create({
        userName : "Aryan",
        age : 21,
        email : "aryandumale@gmail.com"

    });
    res.send(user);

})
app.get("/post/create", async (req,res)=>{

   let post = await  postModel.create({
        postData : "Hello World",
        user : "685ab159707084345a6f7d94",
        

        
    });
    
    let user = await userModel.findOne({
        _id : "685ab159707084345a6f7d94"
    });
    user.posts.push(post._id);
    await user.save();
    res.send({
        post,user
    })

});

app.listen(3000);
