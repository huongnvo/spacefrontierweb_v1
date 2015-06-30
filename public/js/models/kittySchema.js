var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var kittySchema = new Schema({
    name: String
    
});

kittySchema.methods.speak = function () {
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

// make this available to our users in our Node applications
module.exports = Kitten;

