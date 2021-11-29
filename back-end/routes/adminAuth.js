const router = require("express").Router();
// Middlewares
const { isAuthenticatedAdmin } = require('../middlewares/auth')

// Controllers
const { adminLoginPostController,verifyAdminTokenGetController,adminChangePasswordPutController,getAdminDetailGetController } = require('../controllers/adminAuth')

router.post("/auth/login", adminLoginPostController);
router.get("/auth/token-verify", verifyAdminTokenGetController);
router.put("/auth/change-password",isAuthenticatedAdmin(), adminChangePasswordPutController);

router.get("/detail", isAuthenticatedAdmin(),getAdminDetailGetController);

module.exports = router;
