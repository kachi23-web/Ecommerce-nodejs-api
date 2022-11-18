const express = require('express'); 
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { required } = require('nodemon/lib/config')
const colors= require('colors')

// const productRoute = require("../routes/product");
// const cartRoute = require("../routes/cart");
// const orderRoute = require("../routes/order");
// const stripeRoute = require("../routes/stripe");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./controllers/verifyToken");


const bodyParser = require('body-parser')
const cors = require("cors");
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
// const productRoutes = require('./routes/products')
const app = express();
connectDB();


app.use(cors());
app.use(express.json());

// http://localhost:5000/api/auths/
app.use('/api/auths', require('./routes/auth'));
 app.use("/api/users", require('./routes/user'));
 app.use("/api/products",require('./routes/product'));
//  app.use("/api/users", verifyTokenAndAuthorization,require('./routes/user'));
//  app.use("/api/users", verifyTokenAndAdmin,require('./routes/user'));
//  app.use("/api/products",verifyTokenAndAdmin, productRoutes);
app.use("/api/carts", require('./routes/cart'));
app.use("/api/orders", require('./routes/order'));
app.use("/api/checkout", require('./routes/checkout'));

app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
