const router = require("express").Router()
const makepdf = require('../controller/controllerpdf')

router.post("/api/createpdf/",makepdf.createpdf)
router.get("/api/fetchpdf",makepdf.fetchpdf)
router.post("/api/postseat/",makepdf.postseat)
router.get("/api/getseat",makepdf.getseat)

module.exports = {makepdf:router}