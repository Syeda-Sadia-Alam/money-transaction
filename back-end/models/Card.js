const { model, Schema } = require("mongoose");

const schema = new Schema({
  belance: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  since: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
  validity: String,
  status: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Card = new model("Card", schema);

module.exports = Card;
