import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="container mt-5 w-25 ">
        <div className="mb-3">
          <h2 className="text-center">LOGIN</h2>
          <input
            type="email"
            className="form-control  "
            placeholder="Enter a email"
            value={login.email}
            onChange={(event) =>
              setLogin({ ...login, email: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter a password"
            value={login.password}
            onChange={(event) =>
              setLogin({ ...login, password: event.target.value })
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

export default Login;
