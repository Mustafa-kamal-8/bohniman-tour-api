const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({

    role:{type:String, default:'CEO', required:true},

    roleDesc:{type:String, required:true},

    createdBy:{type:mongoose.Schema.Types.ObjectId, required:true , ref:'Users'},

    

},{
    timestamps:true
})

module.exports = mongoose.model("Roles",roleSchema);


// "65c4b8bbba193d0aac416294"