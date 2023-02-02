const { Router } = require("express");

const authMiddlewares = require("../middlewares/auth");
const authController = require("../controllers/auth");

const router = Router();

router.post(
  "/register",
  authMiddlewares.validateRegisterCredentials,
  authController.register
);

router.post(
  "/login",
  authMiddlewares.validateLoginCredentials,
  authController.login
);

router.get("/renew", authController.renew);

module.exports = router;
