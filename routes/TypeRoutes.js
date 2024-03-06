const express = require('express');
const {  getTypes,getTypeById, createType } = require('../controler/typeControlers');

const router = express.Router();



router.route('/').get(getTypes);

router.route('/:category').get(getTypeById);

router.route('/').post(createType);

//router.route('/:id').put(updateRole)

// router.route('/:id').delete(deleteRole)

module.exports  = router;