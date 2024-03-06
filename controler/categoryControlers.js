
const asyncHandler = require('express-async-handler');
const Type = require('../model/type');
const Category = require('../model/category');
//@desc get all trips
//@routes GET /api/trips
//@ access public
const getCategorys = asyncHandler(async (req, res)=>{
    const categories = await Category.aggregate([{
        $lookup:{
        from:'types',
        localField:"_id",
        foreignField:"category",
        as: 'subcategories',
        },
    },{
        $project:{
            _id:1,
            name:1,
            subcategories:{
                category:1,
                name:1,
            }
        }
    }]);
    console.log(' company....',categories);
    res.status(200).json({'message':" creating new Company 1",'categorys':categories});
});

//@desc get all trips
//@routes POST /api/trips
//@ access public
const createCategory = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {name } = req.body;
    
    // if(!companyName || !companyCeoName || !dist){
    //     res.status(401);
    //     throw new Error('error all fields are nessary');
    // }
    console.log(name);

    const company = await Category.create({
       name
    });
    console.log(company)
    res.status(201).json({'message':" creating newCompany", 'company': company});
});


//@desc get all trips
//@routes GET /api/trips
//@ access public
const getCategory = asyncHandler( async (req, res)=>{
    const {name , age} = req.params.id;
    console.log(name);
    res.status(200).json({'message':" geting singleCompany", 'id':req.params.id ,});
});


//@desc get all trips
//@routes PUT /api/trips
//@ access public
const updateCategory = asyncHandler( async (req, res)=>{
    const {name , age} = req.body;
    const {id} = req.params.id;
    const company = await Category.updateOne({age:555},{$set:{age:150}});
   
    console.log(name);
    res.status(200).json({'message':" updating singleCompany", 'id': id , 'new Category': company});
});


//@desc get all trips
//@routes DELET /api/trips
//@ access public
const deleteCategory = asyncHandler( async (req, res)=>{
    const {name , age} = req.params.id;
    console.log('deleting');
    try {
        console.log('Deleting all companies');
        const result = await Category.deleteMany({});
        console.log('All documents removed successfully');
        res.status(200).json({ message: 'Deleting all trips', result });
      } catch (error) {
        console.error('Error removing documents:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    console.log('yes.....');
    res.status(200).json({'message':" deleting singleCategory", 'Category': req.body});
})





module.exports = { getCategorys,getCategory , createCategory , updateCategory,deleteCategory}