const Contact = require("../models/Contact");

exports.getContactsGetController = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json({ contacts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
exports.sendContactPostController = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(403)
        .json({ message: "Data must be provided in each field" });
    }
    const createContact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await createContact.save();
    res.status(201).json({
      message:
        "We have received your message, we will respond to you as soon as possible. Thanks for messaging us",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
