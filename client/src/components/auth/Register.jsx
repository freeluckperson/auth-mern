import { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/register")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch();
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="container mt-5 w-25 ">
        <h2 className="text-center">Register</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a username"
            value={register.userName}
            onChange={(event) =>
              setRegister({ ...register, userName: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control  "
            placeholder="Enter a email"
            value={register.email}
            onChange={(event) =>
              setRegister({ ...register, email: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter a password"
            value={register.password}
            onChange={(event) =>
              setRegister({ ...register, password: event.target.value })
            }
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
