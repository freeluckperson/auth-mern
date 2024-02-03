import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, loginErr } = useAuth();
  console.log(loginErr);

  const onSubmit = handleSubmit(async (value) => {
    const response = await signin(value);
    console.log(response);
  });

  return (
    <div className="container-fluid text-center ">
      <form onSubmit={onSubmit}>
        <h2 className="mt-5 text-primary ">Login</h2>
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

export default Login;
