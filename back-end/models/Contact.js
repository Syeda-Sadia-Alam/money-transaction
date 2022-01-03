const { model, Schema } = require("mongoose");

const fieldConfig = {
  type: String,
  required: true,
};

const schema = new Schema({
  name: fieldConfig,
  email: fieldConfig,
  subject: fieldConfig,
  message: fieldConfig,
});

const Contact = new model("Contact", schema);

module.exports = Contact;
