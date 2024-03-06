const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/connectDb');
const dotenv = require('dotenv').config();
const cors = require('cors');




connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth',authRoutes);
app.use('/api/trips', require('./routes/TripRoutes'));

 app.use('/api/types', require('./routes/TypeRoutes'));

app.use('/api/companys', require('./routes/CompanyRoutes'));

app.use('/api/categorys', require('./routes/CategoryRoutes'));

app.use('/api/roles', require('./routes/RoleRoutes'));

app.use('/api/users', require('./routes/UserRoutes'));

app.use('/api/projects', require('./routes/ProjectRoutes'));

app.use('/api/files', require('./routes/fileUploadRoutes'));


app.use('/api/expanses', require('./routes/ExpanseRoutes'));

app.use(errorHandler);


app.listen(PORT , ()=>{
    console.log(`server is runnoing ${PORT}` );
})



