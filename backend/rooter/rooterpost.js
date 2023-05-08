const router = require("express").Router()
const crud = require('../controller/controllerpost')

router.post('/api/addnew',crud.addnew)
router.get('/api/getnew',crud.getnew)
router.delete('/api/deletenew/:id',crud.deletenew)
router.put('/api/upnew/:id',crud.upnew)
router.get('/api/getone/:id',crud.getone)
router.post('/api/comment',crud.comment)

module.exports={crud:router}