
const asyncHandler = require('express-async-handler');
const us = require('../model/user');
const Company = require('../model/Company');
const {sendOTPEmail} = require('../utils/emailservice');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getCompanys = asyncHandler(async (req, res)=>{
    const company = await Company.find({});
    console.log(' company....', company);
    res.status(200).json({'message':" creating new Company 1",'Company':company});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public


const generateOTP = () => {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
  };


const createCompany = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {companyName , companyCeoName, email, phoneNo, companyPassword,otp, verified } = req.body;
    
    // if(!companyName || !companyCeoName || !dist){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
    // }
    console.log(companyName);

    try{
        const company = await Company.create({
            companyName , companyCeoName, email, phoneNo, companyPassword, otp, verified 
        });
        console.log(company)


        const otps = generateOTP(); // Implement your OTP generation logic
        console.log('otp is ==>', otps)

    // Step 3: Send OTP email
       await sendOTPEmail(company.email, otps);
       console.log('email sent', company._id)

       
       const uCompany = await Company.findOneAndUpdate(
        { email: company.email },
        { $set: { otp: otps } },
        { new: true }
      );

        res.status(201).json({'message':" creating newCompany and sent  otp to phone", 'company': uCompany});


    }catch(e){
        res.status(401).json({'message':" not good", 'company': e});
    }
});

const otpVarify = asyncHandler(async(req,res)=>{

    const {otp , id} = req.body;

    const company = await Company.find({_id:id});
    console.log('ok',company[0].otp , otp === company[0].otp);

    if(otp === company[0].otp){
        try{

            console.log('ok bro',company[0]._id , otp);
            const updatedCompany = await Company.findOneAndUpdate(
                { _id:id },
                { $set: { verified: true , otp:"" } },
                { new: true }
              );
            console.log('ok nice',company[0].otp , updatedCompany.verified);
            if (updatedCompany) {
                res.json({ success: true, message: 'OTP verification successful' });
                // Continue with the registration process or any other action
              } else {
                res.status(404).json({ success: false, message: 'Company not found' });
              }
        }catch(e){
            console.error('Error updating company:', error);
            res.status(500).json({ success: false, message: 'Failed to update company' });
        }
    }else{
        res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
})


//@desc get all trips
//@routes GET /api/trips
//@ access public
const getCompany = asyncHandler( async (req, res)=>{
    const {name , age} = req.params.id;
    console.log(name);
    res.status(200).json({'message':" geting singleCompany", 'id':req.params.id ,});
});


//@desc get all trips
//@routes PUT /api/trips
//@ access public
const updateCompany = asyncHandler( async (req, res)=>{
    const {name , age} = req.body;
    const {id} = req.params.id;
    const company = await Company.updateOne({age:555},{$set:{age:150}});
   
    console.log(name);
    res.status(200).json({'message':" updating singleCompany", 'id': id , 'new Company': company});
});


//@desc get all trips
//@routes DELET /api/trips
//@ access public
const deleteCompany = asyncHandler( async (req, res)=>{
    const {name , age} = req.params.id;
    console.log('deleting');
    try {
        console.log('Deleting all companies');
        const result = await Company.deleteMany({});
        console.log('All documents removed successfully');
        res.status(200).json({ message: 'Deleting all trips', result });
      } catch (error) {
        console.error('Error removing documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    console.log('yes.....');
    res.status(200).json({'message':" deleting singleCompany", 'Company': req.body});
})


module.exports = {otpVarify, getCompanys,getCompany , createCompany , updateCompany,deleteCompany}