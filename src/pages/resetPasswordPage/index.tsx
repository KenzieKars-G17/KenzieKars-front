import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { ResetPasswordSchema } from "../../schemas/resetPassword.schema";

import { StyledResetPage } from "./styles";

import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";
import { iResetPassword } from "../../interfaces/resetPassword.interfaces";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledResetPage>
        <section className="reset-content">
          <div className="tittle-box">
            <h1 className="reset-title">Recuperação de senha</h1>
          </div>
          <form className="reset-form" noValidate onSubmit={handleSubmit()}>
            <div className="inputs-cont">
              <InputComponent
                label="Ensina seu E-mail para recuperação"
                placeholder="Digitar email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="alert-span">{errors.email.message}</span>
              )}
            </div>
            <div className="buttons-cont">
              <button className="bttn bttn-brand" type="submit">
                Confirmar
              </button>
              <p>Ainda não possui uma conta?</p>
              <button
                onClick={() => navigate("/register")}
                className="bttn bttn-gray"
                type="button"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </StyledResetPage>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
