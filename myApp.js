let express = require('express');
let app = express();

// 1
console.log("Hello World")

// 2
// app.get("/", function(req,res){
//     res.send("Hello Express")
// })



// 3
app.get("/", function(req,res){
    console.log(__dirname)
    res.sendFile(__dirname+"/views/index.html")
})


app.use("/public",express.static(__dirname + "/public"))

// 5 & 6
app.get("/json", (request, response)=>{
  const mySecret = process.env['MESSAGE_STYLE']
  var obj = {"message": "Hello json"}
  var upperObj = {"message": "HELLO JSON"}
  if(mySecret == "uppercase"){
     response.json(upperObj)
  } else response.json(obj)
   
})



























 module.exports = app;
