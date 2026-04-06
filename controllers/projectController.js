const Project = require("../models/project.model");

// 🔥 CREATE PROJECT (POST)
exports.createProject = async (req, res) => {
  try {
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

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params; // URL param
    const { name, status, owner } = req.body;

    if (!name || !status || !owner) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, status, owner },
      { new: true } // 👈 returns updated data
    );

    if (!updatedProject) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      message: "Error updating project",
      error: error.message,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      message: "Error deleting project",
      error: error.message,
    });
  }
};