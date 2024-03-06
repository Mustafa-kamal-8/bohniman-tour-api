const asyncHandler = require('express-async-handler');

const Projects = require('../model/project');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getProjects = asyncHandler(async (req, res)=>{
    const project = await Projects.find({supervisor:req.params.id});
    res.status(200).json({'message':" creating new Company 1",'Project':project});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createProject = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {projectName , projectDescription,supervisor, members, active ,createdBy } = req.body;
    console.log(projectName);
    // if(!role || !roleDisc || !createdBy){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
    // }
    console.log(projectName);

    const project = await Projects.create({
        projectName , projectDescription, members,supervisor, active ,createdBy 
    });

    console.log(project);

    res.status(201).json({'message':" creating newproject", 'Project': project});
});



module.exports = { getProjects,createProject}