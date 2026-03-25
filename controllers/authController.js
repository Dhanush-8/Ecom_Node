const User = require("../models/User");

// ✅ LOGIN FUNCTION
const loginUser = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing email or password",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    return res.json({
      success: true,
      message: "Login successful",
      user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ SIGNUP FUNCTION (ADD THIS BACK)
const signupUser = async (req, res) => {
  const { username, email, password } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields required",
    });
  }

  try {
    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // ✅ Save new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving user",
    });
  }
};

// ✅ EXPORT BOTH (VERY IMPORTANT)
module.exports = { loginUser, signupUser };