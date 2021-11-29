const { model, Schema } = require("mongoose");
const shortid = require('shortid')
const date = new Date()

const schema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
 
  amount: {
    type: Number,
    required: true,
  },
  platform:String,
  number:String,
  date: {
    type: String,
    default: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  },
  method: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiver:{
    type: Schema.Types.ObjectId,
    ref: "User",
  }
  
});

const History = new model("History", schema);

module.exports = History;
