const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema({

    type: { type: String, required: true , enum: ['Trip', 'Expense'], }, // 'Trip', 'Expense', or any other type
    typeId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the corresponding trip or expense
    approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    comments: String,
    isApproved: { type: Boolean, default: false },

    
  });



module.exports = mongoose.model("Approvals",approvalSchema);

module.exports = Approval;
