const mongoose = require('mongoose');




const dailyRecordSchema = new mongoose.Schema({
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  // day:Number,
  //dailyRecordId: { type: mongoose.Schema.Types.ObjectId, ref: 'DailyRecord' },
  date: { type: Date, required: true },
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expenses' }],
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locations' }],

  

  isApproved: { type: Boolean, default: false },
  status:{type: String , default:"pending", enum: ['pending', 'reject', 'approve', 'modify']}
  // Other fields as needed for daily records
});

module.exports = mongoose.model('DailyRecord', dailyRecordSchema);





// const expenseRecordsSchema = new mongoose.Schema({
//     trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
//     date: { type: Date, required: true },
//     day:Number,
//     categories: {

//         transportation: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             // billNumber: String,
//             vehicleDetails: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             // locations: [locationSchema], // Array of travel locations for transportation
//           },
//           breakFast: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             //locations: [locationSchema], // Array of travel locations for meals
//           },
//           lunch: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             //locations: [locationSchema], // Array of travel locations for meals
//           },
//           dinner: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             //locations: [locationSchema], // Array of travel locations for meals
//           },
//           hotel: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             //locations: [locationSchema], // Array of travel locations for hotel
//           },
//           phoneCalls: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//             //locations: [locationSchema], // Array of travel locations for phone calls
//           },
//           other: {
//             amount: { type: Number, default: 0 },
//             details: String,
//             receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//              // Array of travel locations for other expenses
//           },

//           locations: [{type:mongoose.Schema.Types.ObjectId, ref:"Locations"}],
   
          
//     },
//     approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Approvals'  }],

//     isApproved: { type: Boolean, default: false },
//     receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//     // Other fields as needed

//     description: String,

//     status:{type:String , default:"pending", enum: ['pending', 'reject', 'approve', 'modify']}
    
    
//     // approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Approval' }],
//     // isApproved: { type: Boolean, default: false },
//     // receiptImage: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
//   });