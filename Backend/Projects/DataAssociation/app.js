const express = require("express")
const app = express ()

//require the user schema
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt =  require("bcrypt");
const jwt =  require("jsonwebtoken");



//set view engine set karna 
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());// so that we can read cookie


//default Home route
app.get("/" ,(req,res) => {
    res.render("index");
})

// create route 
app.post("/register" , async (req,res)=>{
    //check if already toh nahi
   let {email, password ,age ,name ,username} = req.body; 
   let user = await userModel.findOne({email
    // iska matlab hai email : email 
   }) ;
   if(user){

    return res.status(500).send("User already registered!");

   }else{
    
        //assumed everything entered 
        bcrypt.genSalt(10, (err,salt)=>{
           bcrypt.hash(password,salt , async (err,hash)=>{
            let user = await  userModel.create({
                username : username,
                name,
                age,
                password : hash,

            });
            //user aagay ab issse login karwao
            let token = jwt.sign({
                email : email,
                userid : user._id
            },"shhhhhh");
            res.cookie("token",token);
            res.send("Registered Successfully ");

           } )
        });
   

   };
   
})


app.listen(3000);
