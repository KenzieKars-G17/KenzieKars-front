import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { SubmitHandler, useForm } from "react-hook-form";

import { InputComponent } from "../../InputComponent";

const FormLogin = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    localStorage.removeItem("@TOKEN");
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        label="email"
        placeholder="email"
        type="email"
        {...register("email")}
      />
      <InputComponent
        label="password"
        placeholder="password"
        type="password"
        {...register("password")}
      />
      <button>Logar</button>
    </form>
  );
};

export default FormLogin;
