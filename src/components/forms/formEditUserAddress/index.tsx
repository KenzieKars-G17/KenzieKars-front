import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { iEditRegister, iRegister } from "../../../interfaces/register.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditRegisterSchema, RegisterSchema } from "../../../schemas/register.schema";
import { DivBackgroundFormEditUser } from "./styles";

const FormEditUserAddress = () => {

  const { user, editUser, SetAdvertiser, advertiser, SetShowFormEditUserAddress } = useContext(AuthContext);

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
          <h1 className="register-title">Editar endereço</h1>
          <button onClick={SetShowFormEditUserAddress}>X</button>
        </div>
        <form
          className="register-form"
          noValidate
          onSubmit={handleSubmit(editUser)}
        >
          <div className="inputs-cont">
            
            <InputComponent
              label="CEP"
              placeholder="00.000-000"
              defaultValue={thisUser.address.cep}
              type="text"
              {...register("address.cep")}
            />
            {errors.address?.cep && (
              <span className="alert-span">{errors.address?.cep.message}</span>
            )}

            <div className="divTwoInputs">
              <InputComponent
                label="Estado"
                placeholder="Digite o estado"
                defaultValue={thisUser.address.state}
                type="text"
                {...register("address.state")}
              />
              {errors.address?.state && (
                <span className="alert-span">
                  {errors.address?.state.message}
                </span>
              )}

              <InputComponent
                label="Cidade"
                placeholder="Digite a cidade"
                defaultValue={thisUser.address.city}
                type="text"
                {...register("address.city")}
              />
              {errors.address?.city && (
                <span className="alert-span">
                  {errors.address?.city.message}
                </span>
              )}
            </div>

            <InputComponent
              label="Rua"
              placeholder="Digite a rua"
              defaultValue={thisUser.address.street}
              type="text"
              {...register("address.street")}
            />
            {errors.address?.street && (
              <span className="alert-span">
                {errors.address?.street.message}
              </span>
            )}

            <div className="divTwoInputs">
              <InputComponent
                label="Número"
                placeholder="Digite o número"
                defaultValue={thisUser.address.number}
                type="text"
                {...register("address.number")}
              />
              {errors.address?.number && (
                <span className="alert-span">
                  {errors.address?.number.message}
                </span>
              )}
{/* 
              <InputComponent label="Complemento" placeholder="Digite o complemento" type="text" {...register("address.complement")} />
                {errors.address?.complement && (<span className="alert-span">{errors.address?.complement.message}</span>)} */}
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
