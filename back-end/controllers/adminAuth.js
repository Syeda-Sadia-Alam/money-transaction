const Admin = require("../models/Admin")
const jwt = require('jsonwebtoken');

exports.adminLoginPostController = async(req,res)=>{
    const { email,password } = req.body
    try{
        const admin = await Admin.findOne({email})

        if(!admin){
            return res.status(403).json({message:'Unregistered email address'})
        }

        if(admin.password!==password){
            return res.status(403).json({message:'Invalid credentials!'})
        }

        const token = jwt.sign({email,name:admin.name},'admin_token')
        res.status(200).json({message:'Successfully logged!',token})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:'Internal server error'})
    }
}