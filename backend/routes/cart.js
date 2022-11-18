const express = require('express');
const router = express.Router();


const Cart = require("../models/Cart");
const {addtoCart,updateCart,deleteItem,viewProduct,viewCart,} = require('../controllers/cartController')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} =  require("../middleware/authmiddleware");





//CREATE

router.post("/", verifyToken,addtoCart)

//UPDATE
router.put("/:id", verifyTokenAndAuthorization,updateCart)

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,deleteItem)

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization,viewProduct)

// //GET ALL

router.get("/", verifyTokenAndAdmin,viewCart)

module.exports= router