const { model, Schema } = require("mongoose");

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
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

const User = new model("User", schema);

module.exports = User;
