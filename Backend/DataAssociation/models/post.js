// need mongoose to interact with mongoDB
const mongoose =  require("mongoose");





//crreate a schema that is structure for each document 
const postSchema = mongoose.Schema({
    postData : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    date : {
        type : Date,
        default : Date.now()
    }
});

//create a model (class) on the defined schema
 module.exports = mongoose.model("post",postSchema);




