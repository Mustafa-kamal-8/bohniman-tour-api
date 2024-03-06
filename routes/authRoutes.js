const express = require('express');

const authenticateToken = require('../middleware/authHandler');
const { currentUser ,login ,logout} = require('../controler/auth');

const router = express.Router();



router.route('/login').post(login);
router.route('/currentuser').get(authenticateToken ,currentUser );
router.route('/logout').post( authenticateToken  ,logout);

// // router.route('/:id').put(updateRole)

// router.route('/:id').delete(deleteUser)




module.exports = router