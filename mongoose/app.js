const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Good fruit"
})

// fruit.save();

// Collection of people

// People Schema :

const peopleSchema = new mongoose.Schema({
    name: String,
    age:Number
})

const Person = mongoose.model("people", peopleSchema);

const person = new Person({
    name: "John",
    age: 15
})

// person.save();

console.log(Fruit.find({}));







