const router = require("express").Router();
// Middlewares
const { isAuthenticatedUser } = require('../middlewares/auth')

// Controllers
const { adminLoginPostController } = require('../controllers/adminAuth')

router.post("/auth/login", adminLoginPostController);


module.exports = router;
