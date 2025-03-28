const express = require("express");
const { register, getProfile, updateProfile } = require("../../controllers/auth/user");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
