const router = require("express").Router();

// Middlewares
const { isAuthenticatedUser } = require('../middlewares/auth')

// Imported controllers from user controllers
const {
  getAllUsersGetController,
  userProfileUpdatePutController,
  getUserInfoGetController
} = require("../controllers/user");

router.get("/all/users", getAllUsersGetController);
router.get("/detail",isAuthenticatedUser(), getUserInfoGetController);

router.put("/profile-update",isAuthenticatedUser(), userProfileUpdatePutController);

module.exports = router;
