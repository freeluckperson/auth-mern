import React from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const { register, handleSubmit } = useForm();

  const { createTask } = useTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="container text-center" style={{ maxWidth: "360px" }}>
      <form onSubmit={onSubmit}>
        <h2 className="mt-5">Tasks</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter a title"
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            {...register("description", { required: true })}
            placeholder="Enter a description"
          />
        </div>
        <div className="mb-2">
          <input
            type="checkbox"
            {...register("completed", { required: false })}
          />
          <label className="form-check-label">
            <div className="mx-2 ">Completed</div>{" "}
          </label>
        </div>
        <button className="btn btn-outline-dark mt-2" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
