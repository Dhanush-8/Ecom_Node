const User = require("../models/User");

const loginUser = (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing email or password",
    });
  }

  if (email === "admin@gmail.com" && password === "1234") {
    return res.json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
};

// ✅ ADD THIS FUNCTION
const signupUser = async (req, res) => {
  const { username, email, password } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields required",
    });
  }

  try {
    const newUser = new User({ username, email, password });

    await newUser.save(); // 👈 THIS LINE SAVES TO DB

    res.json({
      success: true,
      message: "User saved in DB",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving user",
    });
  }
};

// ✅ EXPORT BOTH
module.exports = { loginUser, signupUser };