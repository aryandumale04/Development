// const express = require('express')
// const app = express()  this is the server code
const express = require('express')
const app = express()


//kisibhi get ke pehele .use likhe so that kisibi request ke peheele ye chalega
// app.use(//har baar function aayega yaha function(req,res,next));
app.use(function(req,res,next){
  console.log("Middleware chala");
  //request mil lekin forward nah kiya
  next();//request aagein follow kardo

})//first middle ware ke baad second middle ware and then route
app.use(function(req,res,next){
  console.log("Middleware chala dusri baar");
  //request mil lekin forward nah kiya
  next();//request aagein follow kardo

})


// app.get(Router,request handler(middleware))
app.get("/",function(req,res){
  res.send("Championx s sdsdsdsdsv ,mera Anujaaaaaa");

})

app.get("/about",function(req,res){
  res.send("About page hai ye  ,mera Anujaaaaaa");

})


app.listen(3000);

//routes 