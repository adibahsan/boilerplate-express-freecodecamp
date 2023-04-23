let express = require('express');
let app = express();

// 1
console.log("Hello World")

// 2
// app.get("/", function(req,res){
//     res.send("Hello Express")
// })


// 7
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  })
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

// 8
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  let output = {time: req.time}
  res.json(output)
});



























 module.exports = app;
