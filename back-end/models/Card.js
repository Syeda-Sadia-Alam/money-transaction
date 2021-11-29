const { model, Schema } = require("mongoose");

const date = new Date()

const schema = new Schema({
  belance: {
    type: Number,
    default:0
  },
  number: {
    type: Number,
    required:true,
    unique:true
  },
  currencyType:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  since: {
    type: String,
    default:`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Card = new model("Card", schema);

module.exports = Card;
