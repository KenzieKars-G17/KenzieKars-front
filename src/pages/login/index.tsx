import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { LoginSchema } from "./validator";

import { StyledLogin } from "./styles";
import { useAuth } from "../../hooks";

import { tLogin } from "./types";
import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";

const Login = () => {
  const { login } = useAuth();

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
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
                <span>Esqueci minha senha</span>
              </a>
            </div>
            <div className="buttons-cont">
              <button className="bttn bttn-brand" type="submit">
                Entrar
              </button>
              <p>Ainda não possui uma conta?</p>
              <button className="bttn bttn-gray" type="button">
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
