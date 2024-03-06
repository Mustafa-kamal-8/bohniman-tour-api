const mongoose = require('mongoose');



const expenseSchema = mongoose.Schema({
    
    description: String,
    amount: Number,
    date: Date,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorys' },
    type: {type:mongoose.Schema.Types.ObjectId , ref:"Types"},// New field for expense type (e.g., 'Hotel', 'Food', 'Transport', 'Other')
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }], // Reference to files/images
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   
    
});



module.exports = mongoose.model("Expenses",expenseSchema);

// const categorys = mongoose.model("Categorys",category);

