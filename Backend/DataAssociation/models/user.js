// need mongoose to interact with mongoDB
const mongoose =  require("mongoose");
//connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/dataAssociation");


//crreate a schema that is structure for each document 
const userSchema = mongoose.Schema({
    userName : String,
    email : String,
    age : Number,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ///aray of id's 
        ref :'post' 

    }]
});

//create a model (class) on the defined schema
 module.exports = mongoose.model("user",userSchema);




