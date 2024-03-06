// // MongoDB Queries:
// // User Data:

// // db.users.find({ username: "..." }): Retrieve user data for authentication.
// // Trip Data:

// // db.trips.insertOne({/* trip data */}): Create a new trip.
// // db.trips.findOne({ _id: ObjectId("...") }): Get details of a specific trip.
// // db.trips.find({/* query criteria */}): Get a list of all trips.
// // db.trips.updateOne({ _id: ObjectId("...") }, { $set: { /* updated data */ } }): Update an existing trip.
// // db.trips.deleteOne({ _id: ObjectId("...") }): Delete a trip.
// // Expense Data:

// // db.expenses.insertOne({/* expense data */}): Create a new expense.
// // db.expenses.findOne({ _id: ObjectId("...") }): Get details of a specific expense.
// // db.expenses.find({/* query criteria */}): Get a list of all expenses.
// // db.expenses.updateOne({ _id: ObjectId("...") }, { $set: { /* updated data */ } }): Update an existing expense.
// // db.expenses.deleteOne({ _id: ObjectId("...") }): Delete an expense.
// // Approval Data:

// // Approval data may involve updating the status field in the trip and expense documents to indicate approval or rejection.







// // 
// Trip Document:

// status: This field could have values like "Pending", "Approved", or "Rejected" to indicate the approval status of the trip.
// Expense Document:

// status: Similar to the trip document, this field could have values like "Pending", "Approved", or "Rejected" to indicate the approval status of the expense.
// Updating Approval Status:
// Update Trip Status:

// javascript
// Copy code
// // Approve Trip
// db.trips.updateOne(
//   { _id: ObjectId("...") },
//   { $set: { status: "Approved" } }
// );

// // Reject Trip
// db.trips.updateOne(
//   { _id: ObjectId("...") },
//   { $set: { status: "Rejected" } }
// );
// Update Expense Status:

// javascript
// Copy code
// // Approve Expense
// db.expenses.updateOne(
//   { _id: ObjectId("...") },
//   { $set: { status: "Approved" } }
// );

// // Reject Expense
// db.expenses.updateOne(
//   { _id: ObjectId("...") },
//   { $set: { status: "Rejected" } }
// );
// Expense Report Generation:
// For generating an expense report, you might want to aggregate and sum expenses based on certain criteria, such as by trip or by category. Here's a basic example:

// Generate Trip Expense Report:

// javascript
// Copy code
// // Sum of expenses for a specific trip
// db.expenses.aggregate([
//   { $match: { tripId: ObjectId("..."), status: "Approved" } },
//   {
//     $group: {
//       _id: "$tripId",
//       totalExpenses: { $sum: "$amount" },
//     },
//   },
// ]);
// Generate Category-wise Expense Report:

// javascript
// Copy code
// // Sum of expenses by category
// db.expenses.aggregate([
//   { $match: { status: "Approved" } },
//   {
//     $group: {
//       _id: "$category",
//       totalExpenses: { $sum: "$amount" },
//     },
//   },
// ]);



// // "user": "userObjectId", // Replace with actual ObjectId reference
//   //"project": "projectObjectId", // Replace with actual ObjectId reference
//   "days": 5,
//   //"currentStatus": "pending",
//  // "dailyRecords": ["dailyRecordObjectId1", "dailyRecordObjectId2"], // Replace with actual ObjectId references
//   "status": "Pending",
//   //"approvals": ["approvalObjectId1", "approvalObjectId2"], // Replace with actual ObjectId references
//   "managerApprove": "Approved",
//   "managerStatus": "Approved",

// "startDate": "2024-03-01T08:00:00",
// "endDate": "2024-03-05T17:00:00",
// "actualStartDate": "2024-03-01T08:30:00",
// "actualEndDate": "2024-03-05T16:30:00",