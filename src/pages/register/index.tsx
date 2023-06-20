import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { RegisterSchema } from "./validator";

import { StyledRegister } from "./styles";
import { useAuth } from "../../hooks";

import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect, useState } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";
import { iRegister } from "../../interfaces/register.interfaces";
import { AuthContext } from "../../contexts/auth.context";


const Register = () => {

  const { registerUser } = useAuth();

  const { SetAdvertiser, advertiser} = useContext(AuthContext)
 
  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: zodResolver(RegisterSchema),
  });

  console.log(errors);

  
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
            onSubmit={handleSubmit(registerUser)}
          >
            <div className="inputs-cont">

              <h2>Informações pessoais</h2>

              <InputComponent label="Nome" placeholder="Ex: Tony Hawk" type="text" {...register("name")} />
              {errors.name && (<span className="alert-span">{errors.name.message}</span>)}

              <InputComponent label="Email" placeholder="Digite seu email" type="text" {...register("email")} />
              {errors.email && (<span className="alert-span">{errors.email.message}</span>)}

              <InputComponent label="CPF" placeholder="000.000.000-00" type="text" {...register("cpf")} />
              {errors.cpf && (<span className="alert-span">{errors.cpf.message}</span>)}

              <InputComponent label="Celular" placeholder="(DDD) 90000-0000" type="text" {...register("phone")} />
              {errors.phone && (<span className="alert-span">{errors.phone.message}</span>)}

              <InputComponent label="Data de nascimento" placeholder="00/00/00" type="text" {...register("birthdate")} />
              {errors.birthdate && (<span className="alert-span">{errors.birthdate.message}</span>)}

              <InputComponent label="Descrição" placeholder="" type="text" {...register("description")} />
              {errors.description && (<span className="alert-span">{errors.description.message}</span>)}

              <h2>Endereço</h2>

              <InputComponent label="CEP" placeholder="00.000-000" type="text" {...register("address.cep")} />
              {errors.address?.cep && (<span className="alert-span">{errors.address?.cep.message}</span>)}

              <div className="divTwoInputs">
                <InputComponent label="Estado" placeholder="Digite o estado" type="text" {...register("address.state")} />
                {errors.address?.state && (<span className="alert-span">{errors.address?.state.message}</span>)}

                <InputComponent label="Cidade" placeholder="Digite a cidade" type="text" {...register("address.city")} />
                {errors.address?.city && (<span className="alert-span">{errors.address?.city.message}</span>)}
              </div>

              <InputComponent label="Rua" placeholder="Digite a rua" type="text" {...register("address.street")} />
              {errors.address?.street && (<span className="alert-span">{errors.address?.street.message}</span>)}

              <div className="divTwoInputs">
                <InputComponent label="Número" placeholder="Digite o número" type="text" {...register("address.number")} />
                {errors.address?.number && (<span className="alert-span">{errors.address?.number.message}</span>)}

                {/* <InputComponent label="Complemento" placeholder="Digite o complemento" type="text" {...register("address.complement")} />
                {errors.address?.complement && (<span className="alert-span">{errors.address?.complement.message}</span>)} */}
              </div>

              <div className="divTypeAccount">
                <label>Tipo de conta:</label>
                <div className="divButtonsType">

                  {advertiser === true ? 
                  <button onClick={(e)=>{
                    e.preventDefault()
                    const condition = false
                    SetAdvertiser(condition)
                  }}>Comprador</button>
                   : 
                   <button style={{backgroundColor:"#4529E6", color:"white"}} onClick={(e)=>{
                    e.preventDefault()
                    const condition = false
                    SetAdvertiser(condition)
                  }}> Comprador</button>}

                  {advertiser === true ?
                  <button style={{backgroundColor:"#4529E6", color:"white"}} onClick={(e)=>{
                    e.preventDefault()
                    const condition = true
                    SetAdvertiser(condition)
                  }}>Anunciante</button> 
                  :
                  <button onClick={(e)=>{
                    e.preventDefault()
                    const condition = true
                    SetAdvertiser(condition)
                  }}>Anunciante</button>}
                </div>
              </div>

              <InputComponent label="Senha" placeholder="Digite a senha" type="password" {...register("password")} />
              {errors.password && (<span className="alert-span">{errors.password.message}</span>)}

              {/* <InputComponent label="Confirmar senha" placeholder="Digite a senha novamente" type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && (<span className="alert-span">{errors.confirmPassword.message}</span>)} */}

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
