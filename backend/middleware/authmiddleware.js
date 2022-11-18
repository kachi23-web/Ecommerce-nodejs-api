const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// const protect = asyncHandler(async (req, res, next) => {
//     let token
  
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith('Bearer')
//     ) {
//       try {
//         // Get token from header
//         token = req.headers.authorization.split(' ')[1]
  
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
//         // Get user from the token
//         req.user = await User.findById(decoded.id).select('-password')
         
  
//         next()
//       } catch (error) {
//         console.log(error)
//         res.status(401)
//         throw new Error('Not authorized')
//       }
//     }
  
//     if (!token) {
//       res.status(401)
//       throw new Error('Not authorized, no token')
//     }
//   })
  
//   module.exports = { protect }  




// const protect = asyncHandler(async (req, res, next) => {

const verifyToken =  (req, res, next) => {
    let token
    //const authHeader = req.headers.token;
    
    // if (authHeader) {
        if(
            req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
        ){
      //const token = authHeader.split(" ")[1];
    token = req.headers.authorization.split(' ')[1]

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };
  
  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
  
  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

  module.exports = {
    // protect,
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  };