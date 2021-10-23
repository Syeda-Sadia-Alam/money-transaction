const { model, Schema } = require("mongoose");
const shortid = require("shortid");
const schema = new Schema({
  customerId: {
    type: String,
    unique: true,
    default: shortid.generate(),
  },
  accountType: String,
  since: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  transactionHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "TransactionHistory",
    },
  ],
});

const Account = new model("Account", schema);

module.exports = Account;
