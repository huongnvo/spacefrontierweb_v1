var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cdhSchema = new Schema({
    Type: String, 
    Name: String, 
    Manufacturer: String, 
    Website: String, 
    Heritage: String, 
    Mass: Number, 
    Mass_further: String, 
    Power: Number, 
    Power_further: String, 
    Volume: Number, 
    Proportions: String, 
    Volume_further: String, 
    MIPS: Number, 
    MHz: Number, 
    Processing_further: String, 
    Memory: String, 
    Temp_low: Number, 
    Temp_high: Number, 
    Scientific_obj: String, 
    Cost: String
});

var cdhPartS = mongoose.model('cdhPartS', cdhSchema);

// make this available to our users in our Node applications
module.exports = cdhPartS;

