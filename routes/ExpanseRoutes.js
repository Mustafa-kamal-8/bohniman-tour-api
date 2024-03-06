const express = require('express');
const multer = require('multer');
const {  getExpanses ,getExpanse , createExpanse ,dailyTripExp, updateExpanse,deleteExpanse} = require('../controler/expanseControlers');

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



// router.route('/').get((req , res)=>{
//     res.json({"expanse":"expanse is created just now"});
// });

router.route('/:id').get(getExpanses);

router.route('/upload').post(upload.single('file'), createExpanse);

//router.route('/insert').post(dailyTripExp)

router.route('/:id').put(updateExpanse)

router.route('/:id').delete(deleteExpanse)

module.exports  =router;