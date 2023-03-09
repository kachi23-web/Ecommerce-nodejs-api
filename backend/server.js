const express = require('express'); 
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { required } = require('nodemon/lib/config')
const colors= require('colors')


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
app.use("/api/carts", require('./routes/cart'));
app.use("/api/orders", require('./routes/order'));
app.use("/api/checkout", require('./routes/checkout'));

app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
