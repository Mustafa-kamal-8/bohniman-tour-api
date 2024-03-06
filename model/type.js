
const mongoose = require('mongoose');


const type = mongoose.Schema({

    category:{type:mongoose.Schema.Types.ObjectId, ref:"Categorys"},
    name:String
});


module.exports = mongoose.model("Types",type);