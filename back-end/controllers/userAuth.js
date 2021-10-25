const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Models
const User = require("../models/User");
const Account = require("../models/Account");

// User login controller
exports.userLoginPostController = async (req, res) => {
  const { email, password } = req.body;
  let hasError = false;
  if (!email) {
    hasError = true;
  }
  if (!password) {
    hasError = true;
  }
  if (hasError) {
    return res.status(403).json({ message: "Invalid credentials!" });
  }
  try{
    const hasUser = await User.findOne({ email });
    if (!hasUser) {
      return res.status(403).json({ message: "User is not registered!" });
    }
    const isMatchPassword = await bcrypt.compare(password, hasUser.password);
    if (!isMatchPassword) {
      return res.status(403).json({ message: "Invalid credentials!" });
    }
    const token = jwt.sign({ email, name: hasUser.name }, "financeDesk");
    res.status(200).json({ message: "Successfully logged!", token });
  }catch(err){
    console.log(err)
    res.status(500).json({message:'Internal server error'})
  }

};
// User registration controller
exports.userSignupPostController = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = {};
  if (!name) {
    errors.name = "Please provide your name";
  }
  if (!email) {
    errors.email = "Please provide your email address";
  }
  if(email){
    if (!email.includes("@")) {
      errors.email = "Please provide a valid email address";
    }
  }

  if (!password) {
    errors.password = "Please provide a password";
  }
  if (Object.keys(errors).length !== 0) {
    return res.status(403).json({
      message: "Invalid credentials!",
      errors,
    });
  }
  try {
    const hasPassword = await bcrypt.hash(password, 10);
    // Create user object with mongoose model
    const createUser = new User({
      name,
      email,
      password: hasPassword,
    });
    // Create user account object with mongoose model
    const createAccount = new Account({
      accountType: "Checking Account",
      user: createUser._id,
    });
    // Saves user and account in MongoDB
    const cu = await createUser.save();
    const ac = await createAccount.save();

    res
      .status(201)
      .json({ message: "Registration has been successfully completed!" ,cu,ac});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// User change password controller
exports.userForgotPasswordPostController = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = req.user;

  if (!oldPassword || !newPassword) {
    return res.status(403).json({
      message: "Please provide your old and new password",
    });
  }
  try {
    const isMatched = await bcrypt.compare(oldPassword, user.password);
    if (!isMatched) {
      return res.status(403).json({
        message: "Your old password is invalid!",
      });
    }
    const hasPassword = await bcrypt.hash(newPassword, 10);

    await User.findOneAndUpdate(
      { _id: user._id },
      {
        password: hasPassword,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Your password has been successfully updated!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};