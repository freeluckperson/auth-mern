import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (value) => {
    const res = await registerRequest(value);
    console.log(res);
  });

  return (
    <div className="container-fluid text-center ">
      <form onSubmit={onSubmit}>
        <h2 className="mt-5 ">Register</h2>

        <div className="mb-2 ">
          <input
            className="form-control-lg bg-white "
            type="text"
            {...register("userName", { required: true })}
            placeholder="Enter a username"
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control-lg bg-white "
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter an email"
          />
        </div>

        <div>
          <input
            className="form-control-lg bg-white "
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter a password"
          />
        </div>

        <button type="submit" className="btn btn-outline-dark mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
