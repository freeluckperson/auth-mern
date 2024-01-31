import { useForm } from "react-hook-form";
import { loginRequest } from "../../api/auth";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (value) => {
    const res = await loginRequest(value);
    console.log(res);
  });

  return (
    <div className="container-fluid text-center ">
      <form onSubmit={onSubmit} className="">
        <h2 className="mt-5">Login</h2>
        <div className="mb-2">
          <input
            className="form-control-lg bg-white"
            type="email"
            placeholder="Enter an email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control-lg bg-white"
            type="password"
            placeholder="Enter a password"
            {...register("password", { required: true })}
          />
        </div>
        <button className="btn btn-outline-dark " type="submit">
          Sing in
        </button>
      </form>
    </div>
  );
};

export default Login;
