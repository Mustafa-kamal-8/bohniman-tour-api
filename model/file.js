const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
    trip:{type:mongoose.Schema.Types.ObjectId , ref:"Trips"},
   // expense:{type:mongoose.Schema.Types.ObjectId , ref:"Expenses"},
    path:String,
    filename: String,
    data: Buffer, // Binary data of the file
    contentType: String,
  });


module.exports = mongoose.model("Attachments",attachmentSchema);