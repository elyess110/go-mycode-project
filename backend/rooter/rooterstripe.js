const router = require('express').Router()
const session = require('../controller/controllerstripe')

router.post("/api/checkstripe",session.paymentt)

module.exports={checkoutrouter:router}