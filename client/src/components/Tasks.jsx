import { useEffect } from "react";
import { useTask } from "../context/TaskContext";

const Card = () => {
  const { tasks, delTask, getTask } = useTask();

  return (
    <>
      {tasks?.map((task, i) => (
        <div key={i} className="col-md-4 mt-4">
          <div className="card h-100 ">
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-dark  border-0 ">Edit</button>

              <button
                className="btn btn-outline-dark border-0"
                onClick={async () => {
                  await delTask(task._id);
                  await getTask();
                }}
              >
                X
              </button>
            </div>
            <div className="card-body">
              <h5 className="card-title"> {task.title.substring(0, 25)}</h5>
              <h6 className="card-subtitle mt-2 text-body-tertiary ">
                Description
              </h6>
              <p className="card-text ">{task.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Tasks = () => {
  const { getTask } = useTask();

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <div className="container-md  " style={{ marginBottom: "200px" }}>
        <div className="row mt-5">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Tasks;
