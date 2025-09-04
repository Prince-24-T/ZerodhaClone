const { Signup, Login } = require("../controllers/AuthController.js");
const { userVerification } = require("../middleware/AuthMiddleware.js");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification); // changed from POST /

module.exports = router;
