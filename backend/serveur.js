const express = require('express')
const port = 4444
const app = express()
const cors = require('cors')
const userRooter = require('./rooter/rooterlog')
const {makepdf} = require('./rooter/rooterpdf')
const {crud} = require('./rooter/rooterpost')
const {checkoutrouter} =require('./rooter/rooterstripe')
const connectdb = require('./config/config')

app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:false,
    optionsSuccessStatus:200
    }))
app.listen(port,
    console.log("cool")
    )
connectdb()
app.use('/',makepdf)
app.use('/',userRooter)
app.use('/',crud)
app.use('/',checkoutrouter)