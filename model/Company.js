const mongoose = require('mongoose');

const companySchema = mongoose.Schema({

    companyName:{type:String},

    companyCeoName:{type:String},

    email:{type:String},

    phoneNo:{type:Number},

    companyPassword: {type:String,},
    
    otp:String,
  

    verified:{type:Boolean, default:false},

},{
    timestamps:true
})

module.exports = mongoose.model("Companys",companySchema);