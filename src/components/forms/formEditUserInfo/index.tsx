import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { useForm } from "react-hook-form";

import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { iEditRegister } from "../../../interfaces/register.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditRegisterSchema } from "../../../schemas/register.schema";
import { DivBackgroundFormEditUser } from "./styles";

const FormEditUserInfo = () => {

  const { user, editUser, SetAdvertiser, SetShowFormEditUserInfo, deleteUser } = useContext(AuthContext);

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
        <div className="header-modal">
          <h1>Editar Perfil</h1>
          <button onClick={SetShowFormEditUserInfo}>X</button>
        </div>
        <div className="title-box">
          <h2 className="register-title">Informações pessoais</h2>
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
            <button className="bttn bttn-cancel">
              Cancelar
            </button>
            <button className="bttn bttn-delete" type="button" onClick={() => { deleteUser(thisUser.id); SetShowFormEditUserInfo(); }}>Excluir Perfil</button>
            <button className="bttn bttn-brand" type="submit">
              Salvar Alterações
            </button>
          </div>
        </form>
      </DivBackgroundFormEditUser>
    </Modal>
  );
};

export default FormEditUserInfo;
