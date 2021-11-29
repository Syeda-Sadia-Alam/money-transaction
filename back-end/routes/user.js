const router = require("express").Router();

// Middlewares
const { isAuthenticatedUser,isAuthenticatedAdmin } = require('../middlewares/auth')

// Imported controllers from user controllers
const {
  getAllUsersGetController,
  userProfileUpdatePutController,
  getUserInfoGetController,
  deleteUserDeleteController
} = require("../controllers/user");

router.get("/all/users",isAuthenticatedAdmin(), getAllUsersGetController);
router.get("/detail",isAuthenticatedUser(), getUserInfoGetController);

router.put("/profile-update",isAuthenticatedUser(), userProfileUpdatePutController);
router.delete('/delete/:id',isAuthenticatedAdmin(),deleteUserDeleteController)
module.exports = router;
