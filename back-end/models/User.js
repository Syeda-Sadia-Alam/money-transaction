const { model, Schema } = require("mongoose");
const date = new Date();

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: String,
  password: {
    type: String,
    required: true,
  },
  gender: String,
  address: String,
  since: {
    type: String,
    default: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
  },
  history: [
    {
      type: Schema.Types.String,
      ref: "History",
    },
  ],
  card: {
    ref: "Card",
    type: Schema.Types.ObjectId,
  },
});

const User = new model("User", schema);

module.exports = User;
