import { useContext, createContext, useState } from "react";
import {
  getTasksRequest,
  createTasksRequest,
  updateTasksRequest,
  deleteTasksRequest,
  getTaskByIdRequest,
} from "../api/tasks";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used within a taskProvider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  const createTask = async (task) => {
    const res = await createTasksRequest(task);
    console.log(res);
  };

  const getTask = async () => {
    const res = await getTasksRequest();
    setTasks(res.data.tasks);
  };

  const getTaskById = async (id) => {
    try {
      const res = await getTaskByIdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const delTask = async (id) => {
    await deleteTasksRequest(id);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, getTask, delTask, getTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Boilerplate de Context
// import { useContext, createContext } from "react";
// const TaskContext = createContext();
// export const useTask = () => {
//   const context = useContext(TaskContext);
//   if (!context) throw new Error("useTask must be used within a taskProvider");
//   return context;
// };
// export function TaskProvider({ children }) {
//   return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
// }
