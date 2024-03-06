
const asyncHandler = require('express-async-handler');
const us = require('../model/user');
const Trip = require('../model/trip');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getTrips = asyncHandler(async (req, res)=>{
    console.log(req.params.id);
    const trips = await Trip.find({user:req.params.id});
    res.status(200).json({'message':" creating new trips 1",'trips':trips});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createTrips = asyncHandler(async (req, res)=>{
    console.log('trip is ready');
    const {
        title,
        startDate,
        endDate,
        actualStartDate,
        actualEndDate,
        destination,
        purpose,
        user,
        companyId,
        project,
        expenses,
        members,
        status,
        approvals
      } = req.body;

      console.log(title, Date(startDate));
    
      console.log(title, req.body);
    
      const trip = await Trip.create({
        title,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        actualStartDate: new Date(actualStartDate),
        actualEndDate: new Date(actualEndDate),
        destination,
        purpose,
        companyId,
        project,
        expenses,
        members,
        status,
        approvals,
        user, //req.user._id // Assuming you have authentication middleware setting req.user
        // Include other fields as needed
      });
    
      console.log(trip);
      res.status(201).json({ 'message': "Creating new trip", 'trips': trip });
});


const ck = asyncHandler(async (req , res) => {
    console.log('yooo');
    res.json({"msg":"we gatit bro", "user":req.body});
})


//@desc get all trips
//@routes GET /api/trips
//@ access public
const getTrip = asyncHandler( async (req, res)=>{
   // const {id}= req.params.id;
    console.log(req.params.id);
    const user = await Trip.find({companyId:'65e22620ab1e9cf6b271c433'});
    res.status(200).json({'message':" creating new trips 1",'u':user});
    
});


//@desc get all trips
//@routes PUT /api/trips
//@ access public
const updateTrip = asyncHandler( async (req, res)=>{
    const {name , age} = req.body;
    const {id} = req.params.id;
    const user = await us.updateOne({age:555},{$set:{age:150}});
   
    console.log(name);
    res.status(200).json({'message':" updating single trip", 'id': id , 'user': user});
});


//@desc get all trips
//@routes DELET /api/trips
//@ access public
const deleteTrip = asyncHandler( async (req, res)=>{
    // const {name , age} = req.params.id;
    console.log('deleting');
    try {
        console.log('Deleting all trips');
        const result = await Trip.deleteMany({});
        console.log('All documents removed successfully');
        res.status(200).json({ message: 'Deleting all trips', result });
      } catch (error) {
        console.error('Error removing documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    console.log('yes.....')
    res.status(200).json({'message':" deleting single trip", 'aaa':a ,});
});




const deleteTripById = asyncHandler(async (req, res) => {
    console.log('i m in delete')
    try {
      const tripId = req.params.id;
        console.log('ggggggggg---->',tripId)
      // Check if the trip with the given ID exists
      const existingTrip = await Trip.findByIdAndDelete(tripId);
      console.log('existing trip --.>',existingTrip)
      if (!existingTrip) {
        return res.status(404).json({ message: 'Trip not found' });
      }
  
    //   // Delete the trip
    //   await existingTrip.remove();

    //   const deletedTrip = await Trip.findByIdAndDelete(tripId);

    //   if (!deletedTrip) {
    //     return res.status(404).json({ message: 'Trip not found' });
    //   }
  
      console.log('removed...')
      // Optionally, you can return the updated list of trips
      const updatedTrips = await Trip.find();
      console.log('update...',updatedTrips)
      res.status(200).json({ message: 'Trip deleted successfully', 'trips': updatedTrips });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



// Trip Planning:

// POST /api/trips: Create a new trip.
// GET /api/trips/:tripId: Get details of a specific trip.
// GET /api/trips: Get a list of all trips.
// PUT /api/trips/:tripId: Update an existing trip.
// DELETE /api/trips/:tripId: Delete a trip.




// const express = require('express');
// const mongoose = require('mongoose');
// const Trip = require('./models/Trip'); // Assuming you have a Trip model
// const Expense = require('./models/Expense'); // Assuming you have an Expense model

// const app = express();

// // Define a route for showing trip details
// app.get('/trip/:tripId', async (req, res) => {
//   const { tripId } = req.params;

//   try {
//     // Fetch trip details
//     const trip = await Trip.findById(tripId);
//     if (!trip) {
//       return res.status(404).json({ error: 'Trip not found' });
//     }

//     // Fetch ongoing expenses for the trip
//     const ongoingExpenses = await Expense.find({ tripId: mongoose.Types.ObjectId(tripId), status: 'Pending' });

//     // Render the trip detail page with ongoing expenses
//     res.render('tripDetail', { trip, ongoingExpenses });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   date: { type: Date, required: true },
//   transportation: { type: Number, default: 0 },
//   meals: { type: Number, default: 0 },
//   hotel: { type: Number, default: 0 },
//   phoneCalls: { type: Number, default: 0 },
//   other: { type: Number, default: 0 },
// });

// const Expense = mongoose.model('Expense', expenseSchema);

// async function getAllExpenseCategories() {
//   try {
//     const sampleExpense = await Expense.findOne(); // Get a sample document to inspect its keys
//     const expenseCategories = Object.keys(sampleExpense.toObject()).filter(key => key !== '_id' && key !== 'date');
//     return expenseCategories;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// // Usage
// getAllExpenseCategories()
//   .then(categories => console.log(categories))
//   .catch(error => console.error(error));


  
module.exports = {getTrip,getTrips,createTrips,updateTrip ,ck,deleteTripById ,deleteTrip}