const { model, Schema } = require("mongoose");

const schema = new Schema({
  amount: {
    type: Number,
    unique: true,
    required: true,
  },
  cardNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const TransactionHistory = new model("TransactionHistory", schema);

module.exports = TransactionHistory;
