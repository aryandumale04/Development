
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path =  require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());




app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/create",  (req,res)=>{
    let {username,email,password,age} = req.body;

    //hashing the password 
    bcrypt.genSalt(10, (err,salt)=>{

        bcrypt.hash(password,salt,async  (err,hash)=>{

            if(err){
                console.log(err);
            }
            let createdUser = await userModel.create({
                    username ,
                    password : hash,
                    email,
                    age

            });

            let token = jwt.sign({email : email} , "shhhhhhhh");
            res.cookie("token",token);
            console.log(token);

            
            
            
        });

    });
    

});
app.get("/login" ,(req,res)=>{

    res.render("login");

})
app.post("/login" , async (req,res)=>{

   let user =  await userModel.findOne({email : req.body.email});
   //if user not there null will be returned
   if(user){

    //password check
    bcrypt.compare(req.body.password, user.password,function(err,result){

        if(result){
            let token = jwt.sign({email : user.email} , "shhhhhhhh");
            res.cookie("token",token);
            console.log(token);


        }
        else{
            res.send("You cant login");
        }

    }) ;




   }else{

    return res.send("Something went wrong");

   }


})

app.get("/logout", function(req,res){

    res.cookie("token", "");
    res.redirect("/")
    


})



app.listen(3000);