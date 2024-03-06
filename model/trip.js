const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema({
    title: String,
    destination: { type: String },
    purpose: { type: String },
    startDate: Date,
    endDate: Date,
    actualStartDate: Date,
    actualEndDate: Date,
    //65e22620ab1e9cf6b271c433  65e22743ab1e9cf6b271c439  65e22620ab1e9cf6b271c433

    companyId:{type:mongoose.Schema.Types.ObjectId, ref:"Companys"},
   
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Projects' },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expenses' }],
    //days: Number,
    //currentStatus:{type:String , required:true , default:"pending", enum: ['pending', 'reject', 'approve'],},
    
    
    //dailyRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DailyRecord' }],
    status: { type: String, default: 'Pending' , enum: [ "New",'Pending', 'Reject', 'Approve'] }, // Status can be 'Pending', 'Approved', 'Rejected'
  
    // Other fields as needed
  
    approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Approvals'  }],

    managerApprove:String,
    managerStatus:String,

    // finencerApprove:String,
    // finencerStatus:String,

  });



module.exports = mongoose.model("Trip",tripSchema);

