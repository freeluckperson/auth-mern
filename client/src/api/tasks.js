import axios from "./axios.js";

export const getTasksRequest = () => axios("/tasks");

export const createTasksRequest = (task) => axios.post("/tasks", task);

export const updateTasksRequest = (task) =>
  axios.put(`/tasks/${task._id}`, task);

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`);
