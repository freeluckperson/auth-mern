import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, registerErr } = useAuth();
  const navigate = useNavigate();
  console.log(registerErr);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (value) => {
    signup(value);
  });

  return (
    <div className="text-center ">
      <div className="d-flex justify-content-center ">
        {registerErr?.map((err, i) => (
          <p className="form-control-lg  w-50 bg-danger " key={i}>
            {err}
          </p>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <h2 className="mt-5 ">Register</h2>
        <div className="mb-2 ">
          <input
            className="form-control-lg bg-white "
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
            className="form-control-lg bg-white "
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
            className="form-control-lg bg-white "
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter a password"
          />
          {errors.password && (
            <p className="text-decoration-underline">Password is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-outline-dark mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
