const express = require('express');
 const router = express.Router();


const User = require("../models/User");
const {updateUser, deleteUser,getUser,getUsers,userStats} = require('../controllers/userController')

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/authmiddleware");
// const {protect} =require('../middleware/authMiddleware')


//router.route('/').get(protect, getGoals).post(protect, setGoal)

          
//UPDATE
router.route('/:id').post(verifyTokenAndAuthorization,updateUser).delete(verifyTokenAndAuthorization,deleteUser)

//DELETE
// router.delete("/:id", verifyTokenAndAuthorization,deleteUser)

//GET USER
router.get('/find/:id',verifyTokenAndAdmin, getUser)

//GET ALL USER
router.get('/', verifyTokenAndAdmin, getUsers)

//GET USER STATS


router.get('/stats',verifyTokenAndAdmin, userStats)
module.exports = router;









 module.exports = router;
 