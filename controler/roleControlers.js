const asyncHandler = require('express-async-handler');
const us = require('../model/user');
const Roles = require('../model/Role');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getRoles = asyncHandler(async (req, res)=>{
    const role = await Roles.find({});
    res.status(200).json({'message':" creating new Company 1",'Roles':role});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createRole = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {role ,roleDesc, createdBy} = req.body;
    console.log(role);
    // if(!role || !roleDisc || !createdBy){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
    // }
    console.log(role);

    const Role = await Roles.create({
        role,roleDesc, createdBy
    });
    res.status(201).json({'message':" creating newRole", 'role': Role});
});



module.exports = { getRoles,createRole }