const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); 
connectDB(); 
const app = express();

app.use(express.json());

app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});