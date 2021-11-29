const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

exports.isAuthenticatedUser = () => {
  return async (req, res, next) => {
    const token = req.headers["x-user-auth-token"];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Permission denied for missing token!" });
    }
    try {
      const { email } = jwt.verify(token, "financeDesk");
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Permission denied for invalid token" });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

exports.isAuthenticatedAdmin = () => {
  return async (req, res, next) => {
    const token = req.headers["x-admin-auth-token"];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Permission denied for missing token!" });
    }
    try {
      const { email } = jwt.verify(token, "financeDeskAdminToken");
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res
          .status(401)
          .json({ message: "Permission denied for invalid token" });
      }
      req.admin = admin;
      next();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};
