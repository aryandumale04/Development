// const express = require('express')
// const app = express()  this is the server code
const express = require('express')
const app = express()


//kisibhi get ke pehele .use likhe so that kisibi request ke peheele ye chalega
// app.use(//har baar function aayega yaha function(req,res,next));

app.use(express.json());//converts json based data into readable form

app.use(express.urlencoded({extended:true}));


// app.get(Router,request handler(middleware))
app.get("/",function(req,res){
  res.send("Championx s sdsdsdsdsv ,mera Anujaaaaaa");

})

app.get("/about",function(req,res){
  res.send("About page hai ye  ,mera Anujaaaaaa");

})


app.listen(3000);

//routes 