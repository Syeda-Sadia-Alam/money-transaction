const router = require("express").Router();
const {
  getContactsGetController,
  sendContactPostController,
} = require("../controllers/contact");
// Middlewares
const { isAuthenticatedAdmin } = require("../middlewares/auth");
router.get("/", isAuthenticatedAdmin(), getContactsGetController);
router.post("/", sendContactPostController);

module.exports = router;
