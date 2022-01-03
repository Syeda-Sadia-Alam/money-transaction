const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// Models
const User = require("../models/User");
const Card = require("../models/Card");

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
  try {
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
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
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
  if (email) {
    if (!email.includes("@")) {
      errors.email = "Please provide a valid email address";
    }
  }

  const hasUser = await User.findOne({email})
  if(hasUser){
    return res.status(409).json({message:'This email is already registered!'})
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
    const token = jwt.sign({ email, name, password }, "financeDesk");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    let sendMailToClint = await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject:
        "[FinanceDesk] Confirmation link to complete the registration process",

      html: `
			<P>Click on the link below to complete the registration process.</P>
			<a href="${process.env.DOMAIN_NAME}/user/signup/verification/${token}" target="blank">${process.env.DOMAIN_NAME}/user/signup/verification/${token}</a>
			<p>
			Thanks
			</p>
			`,
    });
    // Need to Handler this Error
    if (!sendMailToClint.response) {
      return res
        .status(403)
        .json({ message: "Internal server error with email" });
    }
    res.status(200).json({
      message: "Please check email to complete the verification process",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Email verification to done user account creation
exports.emailVerificationToCreatedAccountGetController = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(404).json({ message: "Token not found!" });
    }
    const { name, email, password } = jwt.verify(token, "financeDesk");

    const hasUser = await User.findOne({email})
    if(hasUser){
      return res.status(403).json({message:'You have already completed verification process'})
    }

    const hasPassword = await bcrypt.hash(password, 10);
    // Create user object with mongoose model
    const createUser = new User({
      name,
      email,
      password: hasPassword,
    });

    // Create user account object with mongoose model
    const createCard = new Card({
      user: createUser._id,
      status: "activated",
      currencyType: "USD",
      number: new Date().valueOf(),
    });
    // Saves user and card in MongoDB
    const createdUser = await createUser.save();
    const createdCard = await createCard.save();
    // To adding card id with created user
    await User.findOneAndUpdate(
      { _id: createdUser._id },
      {
        card: createdCard._id,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Registration has been successfully completed!" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// Verify User Token
exports.verifyUserTokenGetController = async (req, res) => {
  const token = req.headers["x-user-auth-token"];
  if (!token) {
    return res.status(200).json(false);
  }
  try {
    const { email } = jwt.verify(token, "financeDesk");
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json(false);
    }
    res.status(200).json(true);
  } catch (error) {
    res.status(200).json(false);
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
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
