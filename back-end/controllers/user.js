const User = require("../models/User");
const Card = require('../models/Card');

exports.getAllUsersGetController =async (req,res)=>{
  try{
    const users = await User.find().select('-password')
    res.status(200).json({users})
  }catch(e){
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.userProfileUpdatePutController = async (req, res) => {

  const { name, phone, address, gender } = req.body;
  const user = req.user;
  try {
    await User.findOneAndUpdate(
      { _id: user._id },
      {
        name: name || user.name,
        phone: phone || user.phone,
        address: address || user.address,
        gender: gender || user.gender,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Your profile has been updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserInfoGetController = async(req,res)=>{
  try{
    const user = req.user;
    const card = await Card.findOne({user:user._id})
    res.status(200).json({
      userDetail:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        gender:user.gender,
        address:user.address,
        cardNumber:card.number,
        since:card.since
      }
    })
  }catch(e){
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.deleteUserDeleteController = async(req,res)=>{
  try{
    const { id } = req.params
    await User.findOneAndDelete({_id:id})
    await Card.findOneAndDelete({user:id})
    res.status(200).json({message:'Successfully deleted the user'})
  }catch(e){
    res.status(500).json({message:'Internal server error'})
  }
}