import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, loginErr, isAuthenticated } = useAuth();
  console.log(loginErr);

  const onSubmit = handleSubmit(async (value) => {
    const response = await signin(value);
    if (response) console.log(response);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="container text-center " style={{ maxWidth: "360px" }}>
      {loginErr?.map((err, i) => (
        <label className="form-control " key={i}>
          {err}
        </label>
      ))}
      <form onSubmit={onSubmit}>
        <h2 className="mt-5  ">Login</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter an email"
          />
          {errors.email && (
            <p className="text-decoration-underline">Email is required</p>
          )}
        </div>

        <div>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter a password"
          />
          {errors.password && (
            <p className="text-decoration-underline">Password is required</p>
          )}
        </div>
        <p>
          Do not have a account? click <Link to="/register">Here</Link>
        </p>
        <button type="submit" className="btn btn-outline-dark mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
