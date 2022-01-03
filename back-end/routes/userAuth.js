const router = require("express").Router();
// Middlewares
const { isAuthenticatedUser } = require("../middlewares/auth");

// Controllers
const {
  userLoginPostController,
  userSignupPostController,
  emailVerificationToCreatedAccountGetController,
  verifyUserTokenGetController,
  userForgotPasswordPostController,
} = require("../controllers/userAuth");

router.post("/auth/login", userLoginPostController);
router.post("/auth/signup", userSignupPostController);
router.get(
  "/auth/signup/verification/:token",
  emailVerificationToCreatedAccountGetController
);
router.get("/auth/token-verify", verifyUserTokenGetController);
router.put(
  "/auth/forgot-password",
  isAuthenticatedUser(),
  userForgotPasswordPostController
);

module.exports = router;
