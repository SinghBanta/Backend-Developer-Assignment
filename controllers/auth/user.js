const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register User
exports.register = async (req, res) => {
    try {
        const { name, email, address, password, bio, profilePicture } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists!" });

        user = new User({ name, email, address, password, bio, profilePicture });
        await user.save();
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "1h" });
        console.log("Generated Token:", token);
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found!" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
try {
    const { name, address, bio, profilePicture } = req.body;

    if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "Unauthorized: User not authenticated" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found!" });

    if (name) user.name = name;
    if (address) user.address = address;
    if (bio) user.bio = bio;
    if (profilePicture) user.profilePicture = profilePicture;

    await user.save();
    res.json({ message: "Profile updated successfully", user });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
