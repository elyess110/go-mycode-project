const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    seat:Number,
    time1:String,
    time2:String,
    time3:String,
    date1:String,
    date2:String,
    date3:String
})

module.exports=mongoose.model("movies",movieSchema)

  