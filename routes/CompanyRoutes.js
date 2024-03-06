const express = require('express');
const { getCompanys,getCompany , otpVarify, createCompany , updateCompany,deleteCompany} = require('../controler/companyControlers');

const router = express.Router();



router.route('/').get(getCompanys);
router.route('/varify').post(otpVarify);

router.route('/:id').get(getCompany);

router.route('/').post(createCompany)

router.route('/:id').put(updateCompany)

router.route('/:id').delete(deleteCompany)

module.exports  = router;