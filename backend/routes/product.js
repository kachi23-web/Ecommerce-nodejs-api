const express = require('express');
const router = express.Router();

const {createProduct, 
    updateProduct,
    deleteProduct,
    displayProduct,    
    allProducts,} = require('../controllers/productController')
    const {verifyTokenAndAdmin} =require('../middleware/authMiddleware')

    

    





// http://localhost:5000/api/products/

router.post('/', verifyTokenAndAdmin, createProduct)

router.put("/:id", verifyTokenAndAdmin,updateProduct)
router.delete("/:id", verifyTokenAndAdmin,  deleteProduct)
router.get("/find/:id",  displayProduct)
router.get("/",  allProducts)



module.exports =router