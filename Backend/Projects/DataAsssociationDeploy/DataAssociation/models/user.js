const mongoose = require("mongoose")
mongoose.connect("")
//here need to change the connection url because it is the localhost link  and add the mongodb atlass link



//defining the shema  
 const userSchema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    password : String,
    profilePic  : {
        type : String,
        default : "default.webp"
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }]
});


// creating an model 
module.exports = mongoose.model('user',userSchema);