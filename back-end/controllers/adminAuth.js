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

        const token = jwt.sign({email,name:admin.name},'financeDeskAdminToken')
        res.status(200).json({message:'Successfully logged!',token})
    }catch(error){
        return res.status(500).json({message:'Internal server error'})
    }
}
// Verify User Token
exports.verifyAdminTokenGetController = async(req,res)=>{
    const token = req.headers["x-admin-auth-token"];
    if (!token) {
      return res.status(200).json(false);
    }
    try {
      const { email } = jwt.verify(token, "financeDeskAdminToken");
      const admin = await Admin.findOne({ email });
      if(!admin){
        return res.status(200).json(false);
      }
      res.status(200).json(true);
    }catch(error){
      res.status(200).json(false)
    }
  }
  
// User change password controller
exports.adminChangePasswordPutController = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const admin = req.admin;

  if (!oldPassword || !newPassword) {
    return res.status(403).json({
      message: "Please provide your old and new password",
    });
  }
  if(oldPassword!==admin.password){
    return res.status(403).json({
      message: "Your old password is invalid!",
    });
  }
  try {
  
    await Admin.findOneAndUpdate(
      { _id: admin._id },
      {
        password: newPassword,
      },
      { new: true }
    );
    const token = jwt.sign({email:admin.email,name:admin.name},'financeDeskAdminToken')
    res.status(200).json({
      message: "Your password has been successfully updated!",
      token
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// Providing admin detail
exports.getAdminDetailGetController = async(req,res)=>{
  try{
    const admin = req.admin 
    res.status(200).json({
      adminDetail:{
        name:admin.name,
        email:admin.email
      }
    })
  }catch(e){
    res.status(500).json({message:'Internal server error'})
  }
}