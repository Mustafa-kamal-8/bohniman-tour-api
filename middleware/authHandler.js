const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const authenticateToken  = (req, res, next)=> {
    const atoken = req.headers['authorization'];
    console.log(atoken)

    if (!atoken) {
        return res.status(401).json({ error: 'Unauthorized 1' });
      }
    const token = atoken.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      console.log('log',user)
      req.user = user;
      next();
    });
  }


  module.exports = authenticateToken;