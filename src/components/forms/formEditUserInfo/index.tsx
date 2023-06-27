import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";

import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { iEditRegister, iRegister } from "../../../interfaces/register.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditRegisterSchema, RegisterSchema } from "../../../schemas/register.schema";
import { DivBackgroundFormEditUser } from "./styles";

const FormEditUserInfo = () => {

  const { user, editUser, SetAdvertiser, advertiser, SetShowFormEditUserInfo } = useContext(AuthContext);

  const thisUser: any = user

  useEffect(() => {
    SetAdvertiser(thisUser.seller)
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditRegister>({
    resolver: zodResolver(EditRegisterSchema),
  });

  return (
    <Modal>
      <DivBackgroundFormEditUser>
        <div className="title-box">
          <h1 className="register-title">Editar Informações pessoais</h1>
          <button onClick={SetShowFormEditUserInfo}>X</button>
        </div>
        <form
          className="register-form"
          noValidate
          onSubmit={handleSubmit(editUser)}
        >
          <div className="inputs-cont">

            <InputComponent
              label="Nome"
              placeholder="Ex: Tony Hawk"
              defaultValue={thisUser.name}
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <span className="alert-span">{errors.name.message}</span>
            )}

            <InputComponent
              label="Email"
              placeholder="Digite seu email"
              defaultValue={thisUser.email}
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <span className="alert-span">{errors.email.message}</span>
            )}

            <InputComponent
              label="CPF"
              placeholder="000.000.000-00"
              defaultValue={thisUser.cpf}
              type="text"
              {...register("cpf")}
            />
            {errors.cpf && (
              <span className="alert-span">{errors.cpf.message}</span>
            )}

            <InputComponent
              label="Celular"
              placeholder="(DDD) 90000-0000"
              defaultValue={thisUser.phone}
              type="text"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="alert-span">{errors.phone.message}</span>
            )}

            <InputComponent
              label="Data de nascimento"
              placeholder="00/00/00"
              defaultValue={thisUser.birthdate}
              type="text"
              {...register("birthdate")}
            />
            {errors.birthdate && (
              <span className="alert-span">{errors.birthdate.message}</span>
            )}

            <InputComponent
              label="Descrição"
              placeholder=""
              defaultValue={thisUser.description}
              type="text"
              {...register("description")}
            />
            {errors.description && (
              <span className="alert-span">{errors.description.message}</span>
            )}


            <div className="divTypeAccount">
              <label>Tipo de conta:</label>

              <div className="divButtonsType">

                {advertiser === true ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const condition = false;
                      SetAdvertiser(condition);
                    }}
                  >
                    Comprador
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "#4529E6", color: "white" }}
                    onClick={(e) => {
                      e.preventDefault();
                      const condition = false;
                      SetAdvertiser(condition);
                    }}
                  >
                    {" "}
                    Comprador
                  </button>
                )}

                {advertiser === true ? (
                  <button
                    style={{ backgroundColor: "#4529E6", color: "white" }}
                    onClick={(e) => {
                      e.preventDefault();
                      const condition = true;
                      SetAdvertiser(condition);
                    }}
                  >
                    Anunciante
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const condition = true;
                      SetAdvertiser(condition);
                    }}
                  >
                    Anunciante
                  </button>
                )}

              </div>

            </div>

            <InputComponent
              label="Senha"
              placeholder="Digite a senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="alert-span">{errors.password.message}</span>
            )}

            {/* <InputComponent label="Confirmar senha" placeholder="Digite a senha novamente" type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && (<span className="alert-span">{errors.confirmPassword.message}</span>)} */}
          </div>

          <div className="buttons-cont">
            <button className="bttn bttn-brand" type="submit">
              Salvar
            </button>
            <button className="bttn bttn-brand">
              Cancelar
            </button>
          </div>
        </form>
      </DivBackgroundFormEditUser>
    </Modal>
  );
};

export default FormEditUserInfo;
