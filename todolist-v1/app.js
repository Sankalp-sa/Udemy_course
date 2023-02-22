const express = require('express');
const bp = require('body-parser');
const date = require(__dirname+"/date.js");

let app = express();

app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended: true}));
app.use(express.static("public"));


var todos = ["Eat","Code", "Sleep", "Repeat"];
let workItems = [];

app.get("/" , function(req, res){

    let day = date.getDate();
    res.render('list',{listTitle: day, newItem: todos});

})

app.post("/", function(req, res){

    let userInp = req.body.UserInp;
    
    if(req.body.list == "Work List"){
        workItems.push(userInp);
        res.redirect("/work");
    }
    else{
        todos.push(userInp);
        res.redirect('/');
    }
    
    
})

app.get('/work', function(req,res){

    res.render('list',{listTitle: "Work List", newItem: workItems});
})

app.get('/about', function(req,res){
    res.render("about");
})

app.post('/work', function(req,res){

    var userInp = req.body.UserInp;
    todos.push(userInp);
    res.redirect('/work');

})


app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});