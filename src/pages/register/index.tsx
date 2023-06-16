import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { LoginSchema } from "./validator";

import { LoginPageBase, StyledRegister } from "./styles";
import { useAuth } from "../../hooks";

import { tRegister } from "./types";
import { InputComponent } from "../../components/InputComponent";
import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";

const Register = () => {

  const { ShowBanner } = useContext(ProductPageContext)

  useEffect(() => {
    ShowBanner(false)
    }, [])

  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<tRegister>({
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit = () => {
    const formData = getValues(); 
    registerUser(formData)
    console.log(formData);
  };

  return (
    <LoginPageBase>
      <Header />
      <StyledRegister>

        <section className="register-content">

          <div className="tittle-box">
            <h1 className="register-title">Cadastro</h1>
          </div>

          <form className="register-form" noValidate onSubmit={handleSubmit(onSubmit)}>

            <div className="inputs-cont">

              <InputComponent label="Nome" placeholder="Ex: Tony Hawk" type="text" {...register("name")}/>
              {errors.name && (<span className="alert-span">{errors.name.message}</span>)}

              <InputComponent label="Email" placeholder="000.000.000-00" type="text" {...register("cpf")}/>
              {errors.cpf && (<span className="alert-span">{errors.cpf.message}</span>)}

              <InputComponent label="Cpf" placeholder="Digitar email" type="email" {...register("email")}/>
              {errors.email && (<span className="alert-span">{errors.email.message}</span>)}

              <InputComponent label="Celular" placeholder="(DDD) 90000-0000" type="text" {...register("cellphone")}/>
              {errors.cellphone && (<span className="alert-span">{errors.cellphone.message}</span>)}

              <InputComponent label="Data de nascimento" placeholder="00/00/00" type="text" {...register("birthDate")}/>
              {errors.birthDate && (<span className="alert-span">{errors.birthDate.message}</span>)}

              <InputComponent label="Descrição" placeholder="" type="text" {...register("description")}/>
              {errors.description && (<span className="alert-span">{errors.description.message}</span>)}

              <InputComponent label="Senha" placeholder="Digitar senha" type="password" {...register("password")}/>
              {errors.password && (<span className="alert-span">{errors.password.message}</span>)}

            </div>

            <div className="buttons-cont">

              <button className="bttn bttn-brand" type="submit">
                Finalizar Cadastro
              </button>

            </div>

          </form>

        </section>

      </StyledRegister>
      <Footer />
      <GlobalStyles />
    </LoginPageBase>
  );
};

export default Register;