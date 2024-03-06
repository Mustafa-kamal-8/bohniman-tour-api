
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const Users = require('../model/user');



  const login = asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email , password)
  
      const user = await Users.findOne({ email });
      console.log(user)
  //!(await bcrypt.compare(password, user.password))
      if (!user || password !== user.password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
  
      res.json({ token , user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



  const currentUser = asyncHandler(async (req, res) => {
    try {
      // The user's ID is available in the request object due to the authenticateToken middleware
      const userId = req.user.userId;

      console.log(req.user)
  
      const user = await Users.findById(userId);

      console.log( 'gggg',user,userId)
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })


  const logout = asyncHandler( async (req, res) => {
    // Perform any additional logout-related tasks if needed
    // For example, you might want to revoke the token on the server-side
    //console.log(req.user)
    // Respond with a success message
    res.status(200).json({ message: 'Logout successful' });
  });
  

  module.exports = {login , currentUser , logout}