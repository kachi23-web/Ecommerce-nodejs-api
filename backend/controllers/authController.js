const express = require('express');
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')


// @desc    Register new user
// @route   POST/api/auth
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password} = req.body

   
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      // Check if user exists
      const userExists = await User.findOne({ email })
    
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }
      
     //Hashed Password
     const hashedPassword = CryptoJS.AES.encrypt(password,process.env.PASS_SEC
        ).toString()

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        
      })
    
      if (user) {
        res.status(201).json({
          _id: user.id,
          username: user.username,
          email: user.email,
          isAdmin:user.isAdmin,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
})


// @desc    Authenticate user
// @route   POST/api/auth/login
// @access  Public


const loginUser= asyncHandler(async (req, res) => {
  
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
            {expiresIn:"30d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

  }
)
  

  
  
  
  
  
  // const { email, password } = req.body
  
  // Check for user email
  // const user = await User.findOne({ email })

  // if (user && (await CryptoJS.AES.decrypt(password, user.password))) {
  //   res.json({
  //     _id: user.id,
  //     username: user.username,
  //     email: user.email,
  //     token: generateToken(user._id),
  //   })
  // } else {
  //   res.status(400)
  //   throw new Error('Invalid credentials')
  // }


  // const loginUser= asyncHandler(async (req, res) => {
  // const { username, password } = req.body
  
  //Check for user email
//     const user = await User.findOne({ username })

//     const hashedPassword = CryptoJS.AES.decrypt(
//       user.password,
//       process.env.PASS_SEC
//   );
//   const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//   const inputPassword = req.body.password;
//   if(
//   originalPassword != inputPassword && 
//       res.status(401).json("Wrong Password")){
  
//     if (user && (await originalPassword(password, user.password))) {
//       res.json({
//         _id: user.id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       })

//     } else {
//       res.status(400)
//       throw new Error('Invalid credentials')
//       console.log(originalPassword, inputPassword)

//     }
//   };
// })




// Generate JWT
const generateToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET,{
      expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
    loginUser
    
}

