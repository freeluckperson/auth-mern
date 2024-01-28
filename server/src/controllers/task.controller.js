import Task from "../models/task.model.js";

export const getByIdOrAll = async (req, res) => {
  try {
    const { taskId } = req.query;
    const task = taskId
      ? await Task.findById(taskId)
      : await Task.find({ user: req.user.id }).populate("user");
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

    const newTask = new Task({
      title,
      description,
      completed,
      user: req.user.id,
    });
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
    const updater = await Task.findByIdAndUpdate(
      taskId,
      { title, description, completed },
      { new: true }
    );
    !updater
      ? res.status(400).json("Task not found")
      : res.status(200).json(updater);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const taskDeleted = async (req, res) => {
  try {
    const { taskId } = req.params;
    const taskDel = await Task.findByIdAndDelete(taskId);
    if (!taskDel) return res.status(400).json("User not found");
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
