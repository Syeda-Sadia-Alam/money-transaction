const router = require("express").Router();

// Middlewares
const { isAuthenticatedUser,isAuthenticatedAdmin } = require('../middlewares/auth')
const {
  getAllCardsGetController,
  getCardGetController,
  changeCardStatusGetController,
  cardDepositPostController,
  cardWithdrawPostController,
  cardTransferPostController,
  getCardHistoryGetController,
  getAllUserHistoriesGetController,
  changeHistoryStatusGetController,
  addMoneyToCardGetController,
  getBankDetailGetController
} = require("../controllers/card");


router.get("/all/cards",isAuthenticatedAdmin(),getAllCardsGetController );

router.get("/",isAuthenticatedUser(), getCardGetController);
router.get("/status/:id",isAuthenticatedAdmin(),changeCardStatusGetController);
router.get("/history/status/:id",isAuthenticatedAdmin(),changeHistoryStatusGetController);

router.get("/histories",isAuthenticatedUser(), getCardHistoryGetController);
router.get("/all/histories",isAuthenticatedAdmin(), getAllUserHistoriesGetController);
router.post("/deposit",isAuthenticatedUser(), cardDepositPostController);

router.post("/withdraw",isAuthenticatedUser(), cardWithdrawPostController);

router.post("/transfer",isAuthenticatedUser(), cardTransferPostController);
router.get("/add/money/:id",isAuthenticatedUser(),addMoneyToCardGetController);
router.get("/bank/detail",isAuthenticatedAdmin(),getBankDetailGetController);

module.exports = router;
