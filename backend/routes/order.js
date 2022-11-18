const express = require('express');
const router = express.Router();


const Cart = require("../models/Order");

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } =  require("../middleware/authmiddleware");

//CREATE

router.post("/", verifyToken)
  
  //UPDATE
  router.put("/:id", verifyTokenAndAdmin)
  
  //DELETE
  router.delete("/:id", verifyTokenAndAdmin)
  
  //GET USER ORDERS
  router.get("/find/:userId", verifyTokenAndAuthorization)
  
  // //GET ALL
  
  router.get("/", verifyTokenAndAdmin)
  
  // GET MONTHLY INCOME
  
  router.get("/income", verifyTokenAndAdmin)
  
  module.exports = router;
  