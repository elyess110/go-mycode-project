const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    country:String,
    phonenum:Number,
    age:Number,
    profilepic:String,
    commit:[{commit:String}],
    like:Number
})

module.exports=mongoose.model("users",userSchema)

  