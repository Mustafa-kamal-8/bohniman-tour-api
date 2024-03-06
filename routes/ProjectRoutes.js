
const express = require('express');
const { getProjects, createProject } = require('../controler/projectControlers');

const router = express.Router();



router.route('/:id').get(getProjects);

// router.route('/:id').get(getRole);

router.route('/').post(createProject)

// router.route('/:id').put(updateRole)

// router.route('/:id').delete(deleteRole)


module.exports = router;

