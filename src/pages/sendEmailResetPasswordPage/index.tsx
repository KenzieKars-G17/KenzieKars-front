import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";
import { SendEmailResetPasswordSchema } from "../../schemas/sendEmailResetPassword.schema";

import { StyledEmailResetPage } from "./styles";

import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";
import { iSendEmailResetPassword } from "../../interfaces/sendEmailResetPassword.interfaces";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const SendEmailResetPasswordPage = () => {
  const navigate = useNavigate();

  const { sendEmailResetPassword } = useAuth();

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSendEmailResetPassword>({
    resolver: zodResolver(SendEmailResetPasswordSchema),
  });

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledEmailResetPage>
        <section className="email-content">
          <div className="tittle-box">
            <h1 className="email-title">Recuperação de senha</h1>
          </div>
          <form
            className="email-form"
            noValidate
            onSubmit={handleSubmit(sendEmailResetPassword)}
          >
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
      </StyledEmailResetPage>
      <Footer />
    </>
  );
};

export default SendEmailResetPasswordPage;
