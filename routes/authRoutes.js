const express = require("express");
const router = express.Router();

// ✅ BOTH must be imported
const { loginUser, signupUser } = require("../controllers/authController");

router.post("/login", loginUser);
router.post("/register", signupUser);

module.exports = router;