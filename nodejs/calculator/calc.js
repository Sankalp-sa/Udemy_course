
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname+"/index.html"); 
})

app.post('/', function(req,res){
    
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;    
    res.send("The answer is "+result);

})

app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post('/bmicalculator',function(req,res){
    var n1 = Number(req.body.w);
    var n2 = Number(req.body.h);
    var result = n1/Math.pow(n2,2);    
    res.send("Your BMI is "+result);
})

app.listen(3000,function(){
    console.log("Server running on port 3000")
})
