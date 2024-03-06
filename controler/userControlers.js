const asyncHandler = require('express-async-handler');

const Users = require('../model/user');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getUsersById = asyncHandler(async (req, res)=>{
    const user = await Users.find({
        });//username:req.params.id
    res.status(200).json({'message':" creating new Company 1",'u':user});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createUser = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {username ,email ,password , roles , phoneNo, active, company} = req.body;
    console.log(username);
    // if(!role || !roleDisc || !createdBy){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
   
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(username);

    const User = await Users.create({
        username ,email ,password:hashedPassword , roles , phoneNo, active, company
    });

    res.status(201).json({'message':" creating newuser", 'user': User});
});



const getUser = asyncHandler(async (req, res)=>{
    console.log(req.params.id);
    const user = await Users.findOne({_id:req.params.id});
    res.status(200).json({'message':" geting new user 1",'u':user});
});



const deleteUser = asyncHandler( async (req, res)=>{
    // const {name , age} = req.params.id;
    console.log('deleting',req.params.id );
    try {
        console.log('Deleting all  users');
        const result = await Users.deleteMany({});
        console.log('All documents removed successfully');
        res.status(200).json({ message: 'Deleting all  users', result });
      } catch (error) {
        console.error('Error removing documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json({ message: 'Internal server' });
    
});


module.exports = { getUsersById,createUser , getUser , deleteUser }