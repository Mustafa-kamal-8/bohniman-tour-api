
const asyncHandler = require('express-async-handler');

const Expenses  = require("../model/exp");
const Trip = require('../model/trip');
const Attachment = require('../model/file');

//@ access public
const getExpanses = asyncHandler( async ( req, res)=>{
  
  console.log('expense s--->')
   const expanses = await Expenses.find({trip:'65d24b95e1b481ff8ff27fd6'});
   console.log('expense s', expanses)
    res.status(200).json({'message':" geting Expanse", 'expanses':expanses,});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createExpanse = asyncHandler( async (req, res)=>{
    
  const attachmentIds = [];

 
 
    //const {name , age , dist} = req.body;
    const { description, amount, date, category, type, trip, user ,originalFilename} = req.body;

    // console.log(dist);
    // if(!name || !age || !dist){
    //     res.status(401);
    //     throw new Error('error all fields are nessary expanse');
    // }
    
    console.log('iiiiii',req.body , originalFilename);

    // Parse the date string to a JavaScript Date object
  const expenseDate = new Date(date);

  try {

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    // Create a new Files (Attachment) document
    const attachment = new Attachment({
      path: req.file.path, // Assuming you are storing file on disk and have req.file.path
      filename: req.file.originalname,
      data: req.file.buffer, // 'buffer' contains the file data
      contentType: req.file.mimetype,
    });
  
    // Save the attachment to the database
    const savedAttachment = await attachment.save();
    console.log(` this is attachment ==> ${savedAttachment}`);
  
    attachmentIds.push(savedAttachment._id);
  
     console.log(` this is attachment id======> ${savedAttachment._id}`)
    



    const exp = await Expenses.create({
      description,
      amount,
      date: expenseDate,
      category,
      type,
      attachments: attachmentIds,
      trip,
      user,
    });

    console.log(exp);
    res.status(200).json({ message: 'Creating new expense', body: req.body });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
    // Check if any of the required fields is missing
    // if (!description || !amount || !date || !category || !type || !attachments || !trip || !user) {
    // res.status(401);
    // throw new Error('Error: All fields are necessary for an expense.');
    // }
  //   const exp = await expenses.create({
  //       description, amount, date:Date(date),category, type, attachments, trip, user
  //   });
  //  console.log('jjjjjj',exp);
  //   res.status(200).json({'message':" creating newExpanse mmmm", 'body': req.body});
});


//@desc get all trips
//@routes GET /api/trips
//@ access public
const getExpanse = (req, res)=>{
    const {name , age} = req.params.id;
    console.log(name);
    const expanses = Expences.find({});
    res.status(200).json({'message':" geting singleExpanse", 'expanses':expanses,});
}


//@desc get all trips
//@routes PUT /api/trips
//@ access public
const updateExpanse = (req, res)=>{
    const {name , age , dist} = req.body;
    console.log(dist);
    if(!name || !age || !dist){
        res.status(401);
        throw new Error('error all fields are nessary update');
    }
    const {id} = req.params.id;
    console.log(name);
    res.status(200).json({'message':" updating singleExpanse", 'id': id , 'newExpanse': req.body});
}


//@desc get all trips
//@routes DELET /api/trips
//@ access public
const deleteExpanse = asyncHandler( async (req, res)=>{
  console.log('deleting');
  try {
      console.log('Deleting all expanse');
      const result = await Expenses.deleteMany({});
      console.log('All documents removed successfully');
      res.status(200).json({ message: 'Deleting all expanses', result });
    } catch (error) {
      console.error('Error removing documents:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  console.log('yes.....')
  //res.status(200).json({'message':" deleting single expanses", 'id':result,});
});


const insertExpenseToDailyTrip = asyncHandler( async (req , res)=>{

    //dailyTripExp();
    res.json({"message":"going to save daily exp record", "exp":exp , "dxp":dxp})
})



  
 


const getCurrentDay = (startDate, currentDate) => {
  // Parse the start and current dates
  const start = new Date(startDate);
  const current = new Date(currentDate);

  // Calculate the difference in milliseconds
  const timeDiff = current - start;

  // Calculate the number of days
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Ensure the result is a positive number
  return Math.max(1, daysDiff);
};


const addExpenseToDay = async (tripId, day, expenseId) => {
      try {
        const trip = await Trip.findById(tripId);
    
        if (!trip) {
          throw new Error('Trip not found');
        }
    
        const existingDayIndex = trip.dailyRecords.findIndex((dailyExpense) => dailyExpense.day === day);
    
        // if (existingDay) {
        //   existingDay.expenses.push(expenseId);
        // } else {
        //   trip.dailyRecords.push({
        //     day,
        //     expenses: [expenseId],
        //   });
        // }
        
        if (existingDayIndex !== -1 ) {
            // If the dailyExpenses document exists, push the expenseDetails
            trip.dailyRecords[existingDayIndex].expenses.push(expenseId);
          } else {
            // If the dailyExpenses document does not exist, create a new one and push the expenseDetails
            const newDailyRecords = {
              day,
              expenses: [expenseId],
            };
            trip.dailyExpenses.push(newDailyRecords);
          }
    
        await trip.save();
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    





const dailyTripExp = async (req, res) => {
    const { tripId } = req.body;
    console.log(tripId)
      try {
        const { tripId } = req.body;

        console.log(tripId)
    
        // Assume you have logic to check if the trip is already approved
        // and if not, set the status to 'Approved'
        // ...
    
        // Get the current day of the trip
        const currentDate = new Date(); // Replace with your logic to get the current date
        const trip = await Trip.findByIdAndUpdate(tripId, { status: 'Approved' }, { new: true });
    
        // Create an example expense (you can replace this with your logic)
        const newExpense = new expenses({
          description: 'Daily Expense',
          amount: 50,
          date: currentDate,
          category: 'Food', // Replace with your actual category
          type: 'Meal', // Replace with your actual type
          attachments: [], // Replace with your actual attachments
          trip: tripId,
          user: "65c9cd15b8dd8c5cb940de91",
          day: getCurrentDay(Date("2024-05-29"), Date('2024-06-02')),
        });
    
        const savedExpense = await newExpense.save();
    
        // Add the expense to the appropriate day of the trip
        await addExpenseToDay(tripId, savedExpense.day, savedExpense._id);
    
        return res.status(200).json({ message: 'Trip approved successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
   
    
    return res.status(200).json({ message: 'Trip approved successfully' });
    };
    

  }

// Expense Tracking:

// POST /api/expenses: Submit a new expense.
// GET /api/expenses/:expenseId: Get details of a specific expense.
// GET /api/expenses: Get a list of all expenses.
// PUT /api/expenses/:expenseId: Update an existing expense.
// DELETE /api/expenses/:expenseId: Delete an expense.

module.exports = {getExpanses,getExpanse,createExpanse,updateExpanse , dailyTripExp , deleteExpanse}



// expanse recording code.................

// const { Trip, Expenses } = require('../model');

// // Assume you have a function to get the current day of the trip
// const getCurrentDay = (startDate, currentDate) => {
//   // Your logic to calculate the day based on the start date and current date
// };

// // Function to add an expense to a specific day of the trip
// const addExpenseToDay = async (tripId, day, expenseId) => {
//   try {
//     const trip = await Trip.findById(tripId);

//     if (!trip) {
//       throw new Error('Trip not found');
//     }

//     const existingDay = trip.dailyExpenses.find((dailyExpense) => dailyExpense.day === day);

//     if (existingDay) {
//       existingDay.expenses.push(expenseId);
//     } else {
//       trip.dailyExpenses.push({
//         day,
//         expenses: [expenseId],
//       });
//     }

//     await trip.save();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// Controller to handle the approval of a trip
// const approveTrip = async (req, res) => {
//   try {
//     const { tripId } = req.params;

//     // Assume you have logic to check if the trip is already approved
//     // and if not, set the status to 'Approved'
//     // ...

//     // Get the current day of the trip
//     const currentDate = new Date(); // Replace with your logic to get the current date
//     const trip = await Trip.findByIdAndUpdate(tripId, { status: 'Approved' }, { new: true });

//     // Create an example expense (you can replace this with your logic)
//     const newExpense = new Expenses({
//       description: 'Daily Expense',
//       amount: 50,
//       date: currentDate,
//       category: 'Food', // Replace with your actual category
//       type: 'Meal', // Replace with your actual type
//       attachments: [], // Replace with your actual attachments
//       trip: tripId,
//       user: trip.user,
//       day: getCurrentDay(trip.startDate, currentDate),
//     });

//     const savedExpense = await newExpense.save();

//     // Add the expense to the appropriate day of the trip
//     await addExpenseToDay(tripId, savedExpense.day, savedExpense._id);

//     return res.status(200).json({ message: 'Trip approved successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };



//json
// {
//     "description": "Business Dinner",
//     "amount": 50.00,
//     "date": "2024-03-01T19:00:00",
//     "category": "65c9cb6c0b647563d6a4d351", // Replace with actual ObjectId reference for the category
//     "type": "65c9cb6c0b647563d6a4d351", // Replace with actual ObjectId reference for the type
//     "attachments": ["65c9cb6c0b647563d6a4d351", "65c9cb6c0b647563d6a4d351"], // Replace with actual ObjectId references for files
//     "trip": "65c9cb6c0b647563d6a4d351", // Replace with actual ObjectId reference for the trip
//     "user": "65c9cb6c0b647563d6a4d351" // Replace with actual ObjectId reference for the user
//   }