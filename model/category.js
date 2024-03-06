
const mongoose = require('mongoose');


const category = mongoose.Schema({
    name:String
});


module.exports = mongoose.model("Categorys",category);