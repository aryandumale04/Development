const mongoose = require("mongoose")



//defining the shema  
 const postSchema = mongoose.Schema({
    
    user :{
       type :  mongoose.Schema.Types.ObjectId,
       ref : "user"


    } ,
    date : {
        type : Date,
        default : Date.now()
    },
    content : String,
    likes : [
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
       } 

    ]

  
});


// creating an model 
module.exports = mongoose.model('post',postSchema);