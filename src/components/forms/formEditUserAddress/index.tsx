import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { iEditAddress, iEditRegister, iRegister } from "../../../interfaces/register.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema, EditRegisterSchema, RegisterSchema } from "../../../schemas/register.schema";
import { DivBackgroundFormEditUser } from "./styles";

const FormEditUserAddress = () => {

  const { user, editUser, editUserAddress, SetAdvertiser, advertiser, SetShowFormEditUserAddress } = useContext(AuthContext);

  const thisUser: any = user

  useEffect(() => {
    SetAdvertiser(thisUser.seller)
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditAddress>({
    resolver: zodResolver(AddressSchema),
  });

  return (
    <Modal>
      <DivBackgroundFormEditUser>
        <div className="title-box">
          <h1 className="register-title">Editar endereço</h1>
          <button onClick={SetShowFormEditUserAddress}>X</button>
        </div>
        <form
          className="register-form"
          noValidate
          onSubmit={handleSubmit(editUserAddress)}
        >
          <div className="inputs-cont">
            
            <InputComponent
              label="CEP"
              placeholder="00.000-000"
              defaultValue={thisUser.address.cep}
              type="text"
              {...register("cep")}
            />
            {errors.cep && (
              <span className="alert-span">{errors.cep?.message}</span>
            )}

            <div className="divTwoInputs">
              <InputComponent
                label="Estado"
                placeholder="Digite o estado"
                defaultValue={thisUser.state}
                type="text"
                {...register("state")}
              />
              {errors.state && (
                <span className="alert-span">
                  {errors.state?.message}
                </span>
              )}

              <InputComponent
                label="Cidade"
                placeholder="Digite a cidade"
                defaultValue={thisUser.address.city}
                type="text"
                {...register("city")}
              />
              {errors.city && (
                <span className="alert-span">
                  {errors.city?.message}
                </span>
              )}
            </div>

            <InputComponent
              label="Rua"
              placeholder="Digite a rua"
              defaultValue={thisUser.address.street}
              type="text"
              {...register("street")}
            />
            {errors.street && (
              <span className="alert-span">
                {errors.street?.message}
              </span>
            )}

            <div className="divTwoInputs">
              <InputComponent
                label="Número"
                placeholder="Digite o número"
                defaultValue={thisUser.address.number}
                type="text"
                {...register("number")}
              />
              {errors.number && (
                <span className="alert-span">
                  {errors.number?.message}
                </span>
              )}

              <InputComponent label="Complemento" placeholder="Digite o complemento" type="text" {...register("complement")} />
                {errors.complement && (<span className="alert-span">{errors.complement?.message}</span>)}
            </div>

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

export default FormEditUserAddress;
