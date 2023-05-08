const mongoose = require('mongoose')
const connectdb = () => {
    try {
        mongoose.connect('mongodb+srv://elyess:elyess258@lassbas.22a1qqg.mongodb.net/?retryWrites=true&w=majority')
        console.log("datbase is connect")
    } catch (error) {
        console.log("error")
    }
}
module.exports=connectdb