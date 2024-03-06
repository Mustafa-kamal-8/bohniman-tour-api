
const express = require('express');
const { getUsersById, createUser , getUser,deleteUser} = require('../controler/userControlers');

const router = express.Router();



router.route('/').get(getUsersById);

router.route('/:id').get(getUser);

router.route('/').post(createUser)

// router.route('/:id').put(updateRole)

router.route('/:id').delete(deleteUser)


module.exports = router;

