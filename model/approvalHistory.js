const mongoose = require('mongoose');

const approvalHistorySchema = mongoose.Schema({
    // expense: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense' },
    // trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Approval' },
    type: { type: mongoose.Schema.Types.ObjectId,   required: true},
    typeId: { type: mongoose.Schema.Types.ObjectId,required:true  },
    approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Approval' }],
    status: { type: String, required: true },

},{
    timestamps:true
})

module.exports = mongoose.model("ApprovalHistorys",approvalHistorySchema);