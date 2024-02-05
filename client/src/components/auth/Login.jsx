import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, loginErr } = useAuth();

  const onSubmit = handleSubmit(async (value) => {
    const response = await signin(value);
    if (response) console.log(response);
  });

  return (
    <div className="text-center ">
      {loginErr?.map((err, i) => (
        <label className="form-control-sm  bg-danger " key={i}>
          {err}
        </label>
      ))}
      <form onSubmit={onSubmit}>
        <h2 className="mt-5  ">Login</h2>
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
