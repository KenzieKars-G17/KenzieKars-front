import { zodResolver } from "@hookform/resolvers/zod";
import GlobalStyles from "../../styles/GlobalStyles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useForm } from "react-hook-form";

import { StyledResetPage } from "./styles";

import { InputComponent } from "../../components/InputComponent";

import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";
import { ResetPasswordSchema } from "../../schemas/ResetPassword.schema";
import { iResetPassword } from "../../interfaces/resetPassword.interfaces";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const { token } = useParams();

  const resetPassword = async (data: iResetPassword) => {
    try {
      await api.patch(`users/resetPassword/${token}`, data);
      toast.success("Senha atualizada com sucesso!");
    } catch (error) {
      toast.error("Ops, alguma coisa deu errado!");
    }
  };

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
          <form
            className="reset-form"
            noValidate
            onSubmit={handleSubmit(resetPassword)}
          >
            <div className="inputs-cont">
              <InputComponent
                label="Ensina uma nova senha"
                placeholder="Digitar senha"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <span className="alert-span">{errors.password.message}</span>
              )}
              <InputComponent
                label="Confirme sua senha"
                placeholder="Digitar senha"
                type="password"
                {...register("confirm")}
              />
              {errors.confirm && (
                <span className="alert-span">{errors.confirm.message}</span>
              )}
            </div>
            <div className="buttons-cont">
              <button className="bttn bttn-brand" type="submit">
                Confirmar
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
