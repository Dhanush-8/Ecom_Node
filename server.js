const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); // 👈 IMPORT
connectDB(); // 👈 CALL

const app = express();

// ✅ THIS LINE IS CRITICAL
app.use(express.json());

app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});