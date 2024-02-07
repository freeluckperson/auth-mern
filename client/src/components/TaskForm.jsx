import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createTask } = useTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    reset();
    setShowAlert(true);
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
      {showAlert && (
        <div className="alert  alert-primary mt-2" role="alert">
          Task created successfully
        </div>
      )}
    </div>
  );
};

export default TaskForm;
