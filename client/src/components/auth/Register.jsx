import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, registerErr } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (value) => {
    signup(value);
  });

  return (
    <div className="container text-center " style={{ maxWidth: "360px" }}>
      {registerErr?.map((err, i) => (
        <label className="form-form-control-sm  bg-danger " key={i}>
          {err}
        </label>
      ))}
      <form onSubmit={onSubmit}>
        <h2 className="mt-5 ">Register</h2>
        <div className="mb-2 ">
          <input
            className="form-control"
            type="text"
            {...register("userName", { required: true })}
            placeholder="Enter a username"
          />
          {errors.userName && (
            <p className="text-decoration-underline">UserName is required</p>
          )}
        </div>

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
          You already have an account? click <Link to="/login">Here</Link>
        </p>
        <button type="submit" className="btn btn-outline-dark mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
