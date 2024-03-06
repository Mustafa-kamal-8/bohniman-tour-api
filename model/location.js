const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    long: Number,
    lat: Number,
    // Add other location details as needed
    
    //dailyRecordId: { type: mongoose.Schema.Types.ObjectId, ref: 'DailyRecord' },
 
    address: { type: String },
    
  // Other fields as needed
  },{
    timestamps:Date
  });



module.exports = mongoose.model("Locations", locationSchema);