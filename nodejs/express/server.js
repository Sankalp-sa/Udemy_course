const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello");
})

app.get("/contact", function(req,res){
    res.send("My email is sankalp113@gmail.com");
})

app.get("/about", function(req,res){
    res.send("<h1>About Us</h1><br><p>I am sankalp I like coding and a I am becomeing good at it slowly and steadily</p>");
})


app.listen(3000, function (){
    console.log("Server started at port 3000");
});

