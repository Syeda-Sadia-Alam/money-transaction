const Card = require("../models/Card");
const User = require('../models/User');
const History = require('../models/History');

exports.getAllCardsGetController = async(req,res)=>{
  try{  
    const cards = await Card.find().populate({path:'user',select:'name email gender phone address since'})
    res.status(200).json({cards})
  }catch(e){
    res.status(500).json({ message: "Internal server error" });
  }
}
exports.getCardGetController = async (req, res) => {
  const user = req.user;
  try {
    const card = await Card.findOne({ user: user._id });
    res.status(200).json({ cardDetail:card });
  } catch (error) {

    res.status(500).json({ message: "Internal server error" });
  }
}
exports.changeCardStatusGetController = async(req,res)=>{
  try{
    const { id } = req.params
    const { status } = req.query
    const isExistCard = await Card({_id:id})
  
    if(!isExistCard){
      return res.status(404).json({message:'Inexistent card!'})
    }
    const updatedStatus = await Card.findOneAndUpdate({_id:id},{
      status
    },{new:true})
    res.status(200).json({message:`The card has been successfully ${status}`,card:updatedStatus})
  }catch(e){
    
    res.status(500).json({message:"Internal server error"})
  }
}
exports.cardDepositPostController = async(req,res)=>{
  const { amount } = req.body;
  // User Input Validation
  if(!amount){
    return res.status(403).json({message:'You must have to provide the minimum amount of deposit'})
  }
  if(amount<5){
    return res.status(403).json({message:'The minimum deposit amount is 5$'})
  }

  try{
    const user = req.user;
    const card = await Card.findOne({user:user._id})
    if(card.status==='deactivated'){
      return res.status(403).json({message:'Unfortunately! You cannot deposit right now cause your card is deactivated. Please contact with support'})
    }
    // To create deposit history
    const createHistory = new History({
      amount:amount,
      method:'deposit',
      status:'pending',
      sender:user._id,
      platform:'card'
    })
    const createdHistory = await createHistory.save()

    res.status(200).json({
      message:'Please wait while we process your deposit to completion!',
      history:createdHistory
    })
  }catch(e){  
   
    res.status(500).json({ message: "Internal server error" });
  }
}
exports.cardWithdrawPostController = async(req,res)=>{
  try{
    const { amount,number, platform } = req.body;
    const user = req.user 
    const card = await Card.findOne({user:user._id})

    // User input validation
    if(!amount){
      return res.status(403).json({message:'You must have to provide the minimum amount of withdraw'})
    }
    if(!platform){
      return res.status(403).json({message:'Please select a platform where you want to receive payment'})
    }
    if(!number){
      return res.status(403).json({message:'Please provide a number according to the withdrawal method.'})
    }
    
    if(amount<25){
      return res.status(403).json({message:'The minimum withdraw amount is 25$'})
    }
    if(card.status==='deactivated'){
      return res.status(403).json({message:'Unfortunately! You cannot withdraw right now cause your card is deactivated. Please contact with support'})
    }

    // If the balance of the card is insufficient 
    if(card.belance<25 || card.belance<amount ){
      return res.status(403).json({
        message:'Insufficient card balance!'
      })
    }

    // To create withdraw history
    const createHistory = new History({
      amount:amount,
      method:'withdraw',
      status:'pending',
      sender:user._id,
      number,
      platform
    })
    const createdHistory = await createHistory.save()

    res.status(200).json({
      message:'Please wait while we process your request of withdrawing to completion!',
      history:createdHistory
    })
    
  }catch(e){  

    res.status(500).json({ message: "Internal server error" });
  }
}
exports.cardTransferPostController = async(req,res)=>{
  const { amount, number, platform } = req.body;
  
  // Input validation
  let hasErrors = false
  if(!amount){
    hasErrors = true 
  }
  if(!number){
    hasErrors = true
  }
  if(hasErrors){
    return res.status(403).json({message:'You must have to provide the amount of transfer and card number'})
  }
  if(amount<15){
    return res.status(403).json({message:'The minimum transfer amount is 15$'})
  }
  
  try{

    let recipientCard;
    if(platform==='card'){
      recipientCard = await Card.findOne({number})
      // To check whether the card number is valid or invalid
      if(!recipientCard){
        return res.status(403).json({message:'Invalid card number!'})
      }
      if(recipientCard.status==='deactivated'){
        return res.status(403).json({message:'Unfortunately! You cannot transfer money to this card number cause currently, this card is not eligible to receive money.'})
      }
    }

    const user = req.user;
    const senderCard = await Card.findOne({user:user._id})

    if(senderCard.status==='deactivated'){
      return res.status(403).json({message:'Unfortunately! Currently, your card is not eligible to send money.Pleae contact with support'})
    }
     // If the balance of the card is insufficient 
     if(senderCard.belance<amount ){
      return res.status(200).json({
        message:'Insufficient card balance!'
      })
    }

    let recipientUser;
    if(recipientCard){
      recipientUser = await User.findOne({_id:recipientCard.user})
    }
     

    // To create transfer history
    const createHistory = new History({
      amount:amount,
      method:'transfer',
      status:'pending',
      sender:user._id,
      receiver:recipientUser?recipientUser._id:null,
      platform,
      number:number||recipientCard.number
    })
    const createdHistory = await createHistory.save()

    res.status(200).json({
      message:'Please wait while we process your deposit to completion!',
      history:createdHistory
    })
    
  }catch(e){  
    res.status(500).json({ message: "Internal server error" });
  }
}
exports.getCardHistoryGetController = async(req,res)=>{
  try{
      const user = req.user;
      const { query } = req.query

      let histories = null 
      if(!query){
        histories = await History.find({sender:user._id}).populate({
          path:'sender',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        }).populate({
          path:'receiver',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        })
      }else{
        histories = await History.find({sender:user._id,method:query}).populate({
          path:'sender',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        }).populate({
          path:'receiver',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        })
    
      }
      res.status(200).json({histories})
  }catch(e){

    res.status(500).json({ message: "Internal server error" });
  }
}
exports.getAllUserHistoriesGetController = async(req,res)=>{
  try{
      const { query } = req.query
      let histories = null 
      if(!query){
        histories = await History.find().populate({
          path:'sender',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        }).populate({
          path:'receiver',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        })
      }else{
        histories = await History.find({method:query}).populate({
          path:'receiver',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        }).populate({
          path:'receiver',
          select:'name email',
          populate:{
            path:'card',
            select:'number'
          }
        })
      }
      res.status(200).json({histories})
  }catch(e){

    res.status(500).json({ message: "Internal server error" });
  }
}
exports.changeHistoryStatusGetController = async(req,res)=>{
  try{
    const { id } = req.params
    const { status } = req.query

    if(String(status)!==String('approved')&&String(status)!=='pending'&&String(status)!=='rejected'){
      return res.status(403).json({message:'Invalid status!'})
    }

    const history = await History.findOne({_id:id})

    if(!history){
      return res.status(404).json({message:'Inexistent history!'})
    }

    if(history.status===status){
      return res.status(403).json({message:'This status has already been applied!'})
    }

    const senderCard = await Card.findOne({user:history.sender})

    let receiverCard; 
    if(history.platform==='card'){
      receiverCard = await Card.findOne({user:history.receiver})
    }

    if(senderCard.status==='deactivated'){
      return res.status(403).json({message:`Unfortunately! The sender card is not activated to ${history.method} money`})
    }
    if(receiverCard){
      if(history.method==='transfer'){
        if(receiverCard.status==='deactivated'){
          return res.status(403).json({message:`Unfortunately! The receiver card is not activated to ${history.method} money`})
        }
      }
    }


    // Checks to verify if there is money in the user's account for withdrawing and transferring.
    if(status==='approved'){
      if(history.method==='withdraw' || history.method==='transfer'){
        if(senderCard.belance===0 || senderCard.belance<history.amount){
          return res.status(403).json({
            message:'Insufficient card balance! Should be rejected this request'
          })
        }
      }
    }


    const updatedStatus = await History.findOneAndUpdate({_id:id},{
      status
    },{new:true}).populate({
      path:'sender',
      select:'name email',
      populate:{
        path:'card',
        select:'number'
      }
    }).populate({
      path:'receiver',
      select:'name email',
      populate:{
        path:'card',
        select:'number'
      }
    })

    // In deposit
    if(history.method==='deposit'){
      if(status==='approved'){
        await Card.findOneAndUpdate({user:history.sender},{
          belance:senderCard.belance+history.amount
        },{new:true})
      }
      if(status==='rejected'||status==='pending'){
        if(history.status!=='pending'&&history.status!=='rejected'){
          await Card.findOneAndUpdate({user:history.sender},{
            belance:senderCard.belance-history.amount
          },{new:true})
        }
      }
    }

  
    // In withdraw 
    if(history.method==='withdraw'){
      if(status==='approved'){
        await Card.findOneAndUpdate({user:history.sender},{
          belance:senderCard.belance-history.amount
        },{new:true})
      }
      if(status==='rejected'||status==='pending'){
        if(history.status!=='pending'&&history.status!=='rejected'){
          await Card.findOneAndUpdate({user:history.sender},{
            belance:senderCard.belance+history.amount
          },{new:true})
        }
      }
    }

    // In transfer
    if(history.method==='transfer'){
      if(status==='approved'){
        await Card.findOneAndUpdate({user:history.sender},{
          belance:senderCard.belance-history.amount
        },{new:true})
        if(receiverCard){
          await Card.findOneAndUpdate({user:history.receiver},{
            belance:receiverCard.belance+history.amount
          },{new:true})
        }
      }
      if(status==='rejected'||status==='pending'){
        if(history.status!=='pending'&&history.status!=='rejected'){
          await Card.findOneAndUpdate({user:history.sender},{
            belance:senderCard.belance+history.amount
          },{new:true})
          if(receiverCard){
            await Card.findOneAndUpdate({user:history.receiver},{
              belance:receiverCard.belance-history.amount
            },{new:true})
          }
        }
      }
    }
    res.status(200).json({message:`The ${history.method} request has been successfully ${status}`,history:updatedStatus})
  }catch(e){
  
    res.status(500).json({message:"Internal server error"})
  }
}
exports.addMoneyToCardGetController = async(req,res)=>{
  try{
    const { id } = req.params;
    const card = await Card.findOne({_id:id})
    if(!card){
      return res.status(404).json({message:'Inexistent card!'})
    } 
    if(card.status==='deactivated'){
      return res.status(403).json({message:'Unfortunately! This card is not eligible for add money. Please contact with support'})
    }

    const addMoneyToCard = await Card.findOneAndUpdate({_id:id},{
      belance:card.belance+25
    },{new:true})
    res.status(200).json({message:'Congratulations! You have earned 25$',card:addMoneyToCard})
  }catch(e){
    res.status(500).json({message:'Internal server error'})
  }
}
exports.getBankDetailGetController = async(req,res)=>{
  try{
    const cards = await Card.find()
    const histories = await History.find()
    let totalBelance = 0 
    let totalWithdraw = 0
    let totalDeposit = 0

    cards.forEach(({belance})=>{
      totalBelance+=belance
    })
    histories.forEach(({amount,method,status})=>{
      if(status==='approved'){
        if(method==='withdraw'){
          totalWithdraw+=amount
        }
        if(method==='deposit'){
          totalDeposit+=amount
        }
      }

    })
    res.status(200).json({
      bankDetail:{
        totalBelance,
        totalWithdraw,
        totalDeposit
      }
    })
  }catch(e){
    res.status(500).json({message:'Internal server error'})
  }
}