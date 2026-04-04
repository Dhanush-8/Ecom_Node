const Project = require("../models/project.model");

// 🔥 CREATE PROJECT (POST)
exports.createProject = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, status, owner } = req.body;

    // ✅ Validation
    if (!name || !status || !owner) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // ✅ Save to MongoDB
    const newProject = await Project.create({
      name,
      status,
      owner,
    });

    return res.status(201).json({
      message: "Project saved to DB",
      data: newProject,
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// 🔥 GET ALL PROJECTS (GET)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    return res.status(200).json({
      data: projects,
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      message: "Error fetching projects",
      error: error.message,
    });
  }
};