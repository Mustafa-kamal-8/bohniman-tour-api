const express = require('express');
const {  getCategorys, createCategory } = require('../controler/categoryControlers');

const router = express.Router();



router.route('/').get(getCategorys);

// router.route('/:id').get(getRole);

router.route('/').post(createCategory);

//router.route('/:id').put(updateRole)

// router.route('/:id').delete(deleteRole)

module.exports  = router;