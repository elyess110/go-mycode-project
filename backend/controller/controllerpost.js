const movies = require('../model/movie')

exports.addnew = async(req,res)=>{
    try {
        const crud=new movies(req.body)
        await crud.save()
        res.status(200).send({msg:"ok",crud})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.getnew = async(req,res)=>{
    try {
        const crud=await movies.find()
        res.status(200).send({msg:"ok",crud})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.deletenew = async(req,res)=>{
    try {
        const crud=await movies.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"ok",crud})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.upnew = async(req,res)=>{
    try {
        const crud=await movies.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true})
        res.status(200).send({msg:"ok",crud})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.getone = async(req,res)=>{
    try {
        const crud=await movies.findById(req.params.id)
        res.status(200).send({msg:"ok",crud})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.comment = async(req,res)=>{
    try {
        const user=new movies(req.body)
        await user.save()
        res.status(200).send({msg:"ok",user})
    } catch (error) {
        res.status(500).send(error)
    }
}