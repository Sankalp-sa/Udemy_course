const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');

let app = express();

app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended: true}));
app.use(express.static("public"));


// var todos = ["Eat","Code", "Sleep", "Repeat"];
// let workItems = [];

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true});

const itemsSchema = {
    name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Welcome to your todolist!"
})
const item2 = new Item({
    name: "Sankalp is may name"
})
const item3 = new Item({
    name: "Welcome!"
})

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully added default items to DB");
    }
}) 

app.get("/" , function(req, res){

    res.render('list',{listTitle: "Today", newItem: todos});

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