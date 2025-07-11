const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/miniproject")


//defining the shema  
 const userSchema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    password : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }]
});


// creating an model 
module.exports = mongoose.model('user',userSchema);