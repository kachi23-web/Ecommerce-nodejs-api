const mongoose = require('mongoose')
const {boolean} =require("webidl-conversions")

const UserSchema = mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique:true
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    }, 
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true

})

module.exports = mongoose.model('User',UserSchema)