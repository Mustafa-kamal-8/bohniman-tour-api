const express = require('express');
const multer = require('multer');
const asyncHandler = require('express-async-handler');
const expenses  = require("../model/exp");
const router = express.Router();

//const storage = multer.memoryStorage();
// Create a folder for uploads (make sure it exists)
const uploadFolder = './uploads';

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // You can also generate a unique filename if needed
  },
});

const upload = multer({ storage: storage });

// Define the route for file uploads with the middleware
router.post('/upload', upload.single('file'), asyncHandler( async (req, res) =>{
  // Check if a file was provided in the request
  if (!req.file) {
   res.status(400).send('No file uploaded.');
  }

  // Access the file using req.file
  const file = req.file;
  console.log(' my file body........',req.body)

  // Access other text data using req.body
  //const otherTextData = req.body.other_text_data;

  // Handle the file and other text data as needed
  console.log('File:', file);
  //console.log('Other Text Data:', otherTextData);

  // Example: Save the file to the server
  // fs.writeFileSync('path/to/save/' + file.originalname, file.buffer);



  const { description, amount, date, category, type, attachments, trip, user } = req.body;

    // console.log(dist);
    // if(!name || !age || !dist){
    //     res.status(401);
    //     throw new Error('error all fields are nessary expanse');
    // }
    
    console.log('this is cat === ',category);

    // // Check if any of the required fields is missing
    // if (!description || !amount || !date || !category || !type || !attachments || !trip || !user) {
    // res.status(401);
    // throw new Error('Error: All fields are necessary for an expense.');
    // }
    const exp = await expenses.create({
        description, amount, date:Date(date),category, type, attachments, trip, user
    });
    console.log(exp);
    res.status(200).json({'message':" creating newExpanse", 'body': req.body});

  //return res.status(200).send('File uploaded successfully.');
}));

module.exports = router;
