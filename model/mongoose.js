// Updating Approval Status:

// // Approve Trip
// Trip.updateOne({ _id: "your_trip_id_here" }, { $set: { status: 'Approved' } })
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// // Reject Trip
// Trip.updateOne({ _id: "your_trip_id_here" }, { $set: { status: 'Rejected' } })
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// // Approve Expense
// Expense.updateOne({ _id: "your_expense_id_here" }, { $set: { status: 'Approved' } })
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// // Reject Expense
// Expense.updateOne({ _id: "your_expense_id_here" }, { $set: { status: 'Rejected' } })
//   .then(result => console.log(result))
//   .catch(error => console.error(error));




// Expense Report Generation:

// Sum of expenses for a specific trip
// Expense.aggregate([
//     { $match: { tripId: mongoose.Types.ObjectId("your_trip_id_here"), status: 'Approved' } },
//     {
//       $group: {
//         _id: "$tripId",
//         totalExpenses: { $sum: "$amount" },
//       },
//     },
//   ])
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
  
//   // Sum of expenses by category
//   Expense.aggregate([
//     { $match: { status: 'Approved' } },
//     {
//       $group: {
//         _id: "$category",
//         totalExpenses: { $sum: "$amount" },
//       },
//     },
//   ])
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
  


// trip json

// {
//     "title":" new work",
//     "startDate": "2024-03-01T08:00:00",
//   "endDate": "2024-03-05T17:00:00",
//   "actualStartDate": "2024-03-01T08:30:00",
//   "actualEndDate": "2024-03-05T16:30:00",
  
//    "user": "65c9cb6c0b647563d6a4d351", // Replace with actual ObjectId reference
//     "project": "65c9cb6c0b647563d6a4d351", // Replace with actual ObjectId reference
//     "days": 5,
//     //"currentStatus": "pending",
//     "dailyRecords": ["65c9cb6c0b647563d6a4d351", "65c9cb6c0b647563d6a4d351"], // Replace with actual ObjectId references
//     "status": "Reject",
//     "approvals": ["65c9cb6c0b647563d6a4d351", "65c9cb6c0b647563d6a4d351"], // Replace with actual ObjectId references
//     "managerApprove": "Approved",
//     "managerStatus": "Approved"
//   }