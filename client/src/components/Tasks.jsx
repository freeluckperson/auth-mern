import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";

const Card = () => {
  const { tasks } = useTask();
  console.log(tasks);

  return (
    <>
      {tasks?.map((task) => (
        <div key={task._id} className="col-md-4 mt-4">
          <div className="card h-100 ">
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
    <div className="container-md  ">
      <div className="row mt-5">
        <Card />
      </div>
    </div>
  );
};

export default Tasks;
