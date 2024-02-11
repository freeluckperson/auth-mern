import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { createTask, getTaskById, updateTask } = useTask();

  const onSubmit = handleSubmit((task) => {
    params.id
      ? updateTask(task, params.id)
      : (createTask(task), reset(), setShowAlert(true));

    navigate("/tasks");
  });

  useEffect(() => {
    params.id &&
      getTaskById(params.id).then((response) => {
        setValue("title", response.title);
        setValue("description", response.description);
        setValue("completed", response.completed);
      });
  }, []);

  return (
    <div className="container text-center" style={{ maxWidth: "360px" }}>
      <form onSubmit={onSubmit}>
        <h2 className="mt-5">Tasks</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true, maxLength: 25 })}
            placeholder="Enter a title"
          />
          {errors.title && (
            <p className="text-decoration-underline ">
              Title is required (Max 25 characteres)
            </p>
          )}
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            {...register("description", { required: true })}
            placeholder="Enter a description"
          />
          {errors.description && (
            <p className="text-decoration-underline ">Title is required</p>
          )}
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
