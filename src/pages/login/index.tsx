import { ProductPageContext } from "../../contexts/productPage.context";
import { InputComponent } from "../../components/InputComponent";
import { iLogin } from "../../interfaces/login.interfaces";

import { LoginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../../components/header";

import Footer from "../../components/footer";
import { useForm } from "react-hook-form";

import { StyledLogin } from "./styles";
import { useAuth } from "../../hooks";


const Login = () => {
  const { login } = useAuth();

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledLogin>
        <section className="login-content">
          <div className="tittle-box">
            <h1 className="login-title">Login</h1>
          </div>
          <form
            className="login-form"
            noValidate
            onSubmit={handleSubmit(login)}
          >
            <div className="inputs-cont">
              <InputComponent
                label="Email"
                placeholder="Digitar email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="alert-span">{errors.email.message}</span>
              )}
              <InputComponent
                label="Senha"
                placeholder="Digitar senha"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <span className="alert-span">{errors.password.message}</span>
              )}
              <a href="">
                <span onClick={()=>{
                  navigate("/reset-password")
                }}>Esqueci minha senha</span>
              </a>
            </div>
            <div className="buttons-cont">
              <button className="bttn bttn-brand" type="submit">
                Entrar
              </button>
              <p>Ainda não possui uma conta?</p>
              <button className="bttn bttn-gray" type="button" onClick={()=>{
                navigate("/register")
              }}>
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </StyledLogin>
      <Footer />
    </>
  );
};

export default Login;
