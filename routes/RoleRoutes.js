const express = require('express');
const { getRoles, createRole } = require('../controler/roleControlers');

const router = express.Router();



router.route('/').get(getRoles);

// router.route('/:id').get(getRole);

router.route('/').post(createRole)

//router.route('/:id').put(updateRole)

// router.route('/:id').delete(deleteRole)

module.exports  = router;