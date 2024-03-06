const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password:String,
    phoneNo: Number,
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }],
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Companys' },
    active:Boolean

    
});



module.exports = mongoose.model("Users",userSchema);


