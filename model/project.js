const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectName:{type:String, required:true},

    projectDescription:{type:String, required:true},

    createdBy:{type:mongoose.Schema.Types.ObjectId, required:true , ref:'User'},

    supervisor:{type:mongoose.Schema.Types.ObjectId, required:true , ref:'User'},

    members:[{type: mongoose.Schema.Types.ObjectId}],


    active:Boolean,
},{
    timestamps:true
});



module.exports = mongoose.model("Projects",projectSchema);

