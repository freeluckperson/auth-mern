import axios from "./axios.js";

export const getTasksRequest = () => axios("/tasks");

export const getTaskByIdRequest = (id) => axios(`/tasks?taskId=${id}`);

export const createTasksRequest = (task) => axios.post("/tasks", task);

export const updateTasksRequest = (task, id) => axios.put(`/tasks/${id}`, task);

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`);
