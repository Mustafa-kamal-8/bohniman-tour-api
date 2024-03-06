const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const connect = await mongoose.connect('mongodb+srv://bradyfiction001:mrinmoydas@cluster1.kdxs0vb.mongodb.net/trip_expanse?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected', connect.connection.host , connect.connection.name);
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = connectDB;