const asyncHandler = require('express-async-handler');
const us = require('../model/user');
const Types = require('../model/type');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getTypes = asyncHandler(async (req, res)=>{
    const company = await Types.find();
    console.log(' company....', company);
    res.status(200).json({'message':" creating new Company 1",'Company':company});
});



const getTypeById = asyncHandler(async (req, res)=>{
     const types = await Types.find({category:req.params.category});
     console.log(' company....', types);
    res.status(200).json({'message':" getting a Type 1", "types":types});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createType = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {name , category} = req.body;
    
    // if(!companyName || !companyCeoName || !dist){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
    // }
    console.log(category);

    const company = await Types.create({
       name , category
    });
    console.log(company)
    res.status(201).json({'message':" creating newCompany", 'company': company});
});


module.exports = { getTypes, getTypeById,   createType}