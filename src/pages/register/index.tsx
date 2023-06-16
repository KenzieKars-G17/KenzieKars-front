import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { RegisterSchema } from "./validator";

import { StyledRegister } from "./styles";
import { useAuth } from "../../hooks";

import { tRegister } from "./types";
import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";

const Register = () => {
  const { registerUser } = useAuth();

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegister>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: tRegister) => {
    registerUser(data);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledRegister>
        <section className="register-content">
          <div className="tittle-box">
            <h1 className="register-title">Cadastro</h1>
          </div>
          <form
            className="register-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="inputs-cont">

              <h2>Informações pessoais</h2>

              <InputComponent label="Nome" placeholder="Ex: Tony Hawk" type="text" {...register("name")} />
              {errors.name && (<span className="alert-span">{errors.name.message}</span>)}

              <InputComponent label="Email" placeholder="000.000.000-00" type="text" {...register("cpf")} />
              {errors.cpf && (<span className="alert-span">{errors.cpf.message}</span>)}

              <InputComponent label="Cpf" placeholder="Digitar email" type="email" {...register("email")} />
              {errors.email && (<span className="alert-span">{errors.email.message}</span>)}

              <InputComponent label="Celular" placeholder="(DDD) 90000-0000" type="text" {...register("cellphone")} />
              {errors.cellphone && (<span className="alert-span">{errors.cellphone.message}</span>)}

              <InputComponent label="Data de nascimento" placeholder="00/00/00" type="text" {...register("birthDate")} />
              {errors.birthDate && (<span className="alert-span">{errors.birthDate.message}</span>)}

              <InputComponent label="Descrição" placeholder="" type="text" {...register("description")} />
              {errors.description && (<span className="alert-span">{errors.description.message}</span>)}

              <h2>Informações pessoais</h2>

              <InputComponent label="Cep" placeholder="00.000-000" type="text" {...register("cep")} />
              {errors.cep && (<span className="alert-span">{errors.cep.message}</span>)}

              <div className="divTwoInputs">

                <InputComponent label="Estado" placeholder="Digitar estado" type="text" {...register("state")} />
                {errors.state && (<span className="alert-span">{errors.state.message}</span>)}

                <InputComponent label="Cidade" placeholder="Digitar cidade" type="text" {...register("city")} />
                {errors.city && (<span className="alert-span">{errors.city.message}</span>)}

              </div>

              <InputComponent label="Rua" placeholder="Digitar rua" type="text" {...register("street")} />
              {errors.rua && (<span className="alert-span">{errors.rua.message}</span>)}

              <div className="divTwoInputs">

                <InputComponent label="Número" placeholder="Digitar número" type="text" {...register("number")} />
                {errors.number && (<span className="alert-span">{errors.number.message}</span>)}

                <InputComponent label="Complemento" placeholder="Digitar complemento" type="text" {...register("complement")} />
                {errors.complement && (<span className="alert-span">{errors.complement.message}</span>)}

              </div>


              <div className="divTypeAccount">

                <label>Tipo de conta:</label>
                <div className="divButtonsType">
                  <button>Comprador</button>
                  <button>Anunciante</button>
                </div>


              </div>

              <InputComponent label="Senha" placeholder="Digitar senha" type="password" {...register("password")} />
              {errors.password && (<span className="alert-span">{errors.password.message}</span>)}

              <InputComponent label="Confirmar senha" placeholder="Digitar senha" type="password" {...register("password")} />
              {errors.password && (<span className="alert-span">{errors.password.message}</span>)}

            </div>

            <div className="buttons-cont">
              <button className="bttn bttn-brand" type="submit">
                Finalizar cadastro
              </button>
            </div>
          </form>
        </section>
      </StyledRegister>
      <Footer />
    </>
  );
};

export default Register;