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
































 module.exports = app;
