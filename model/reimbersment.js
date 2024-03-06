const mongoose = require('mongoose');

const reimbersmentSchema = mongoose.Schema({

    amount: Number,
    date: Date,
    approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expense: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense' },
},{
    timestamps:true
})

module.exports = mongoose.model("reimbersments",reimbersmentSchema);