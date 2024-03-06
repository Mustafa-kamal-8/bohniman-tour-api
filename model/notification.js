const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    trip:{type:mongoose.Schema.Types.ObjectId, required:true , ref:'Trip'},
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    for:String,
    message: String,
    date: { type: Date, default: Date.now },
    priject:{type:mongoose.Schema.Types.ObjectId, required:true , ref:'Projects'},


    type: { type: String, required: true }, // Type of notification (e.g., "trip-approve", "trip-reject", "expense-approve", etc.)
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  // Additional fields as needed

},{
    timestamps:true
})

module.exports = mongoose.model("Notifications",notificationSchema);