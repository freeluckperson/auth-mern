import Task from "../models/task.model.js";

export const getByIdOrAll = async (req, res) => {
  try {
    const { taskId } = req.query;
    const task = taskId ? await Task.findById(taskId) : await Task.find();
    if (!task) return res.status(500).json("Tasks not found");
    res.status(200).json(taskId ? task : { tasks: task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof completed !== "boolean"
    )
      return res.status(400).json("Invalid data types");

    const newTask = new Task({ title, description, completed });
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const reBuild = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof completed !== "boolean"
    )
      return res.status(400).json("Invalid data types");

    const foundTask = await Task.findById(taskId);
    if (!foundTask) return res.status(500).json("Task not found");

    foundTask.title = title;
    foundTask.description = description;
    foundTask.completed = completed;

    await foundTask.save();

    res.status(200).json({
      title: foundTask.title,
      description: foundTask.description,
      completed: foundTask.completed,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const taskDeleted = async (req, res) => {
  try {
    const { taskId } = req.params;
    const taskDel = await Task.findByIdAndDelete(taskId);
    if (!taskDel) return res.status(400).json("User not found");
    res.status(200).json(taskDel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
