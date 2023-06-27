import { useContext, useState } from "react";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { FormUpdateAd } from "./styles";
import { useForm } from "react-hook-form";
import { updateAdvertisementSchema } from "../../../schemas/advertisements.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TupdateAdvertisement } from "../../../interfaces/advertisements.interfaces";

const FormUpdateAnnouncement = () => {
  const {
    SetShowUpdateAdvertisementForm,
    updateAdvertisement,
    // getSellerAdvertisements,
    SetShowDeleteAdvertisementModal,
    selectedAd,
    // SetIsAdActive,
    // isAdActive,
    // updateAdvertisementStatus
  } = useContext(AdvertisementContext);

  const [teste, setTeste] = useState()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TupdateAdvertisement>({
    resolver: zodResolver(updateAdvertisementSchema),
  });

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.table_price = parseInt(data.table_price);
    await updateAdvertisement(selectedAd!.id, data);
    SetShowUpdateAdvertisementForm();
  };

  return (
    <Modal>
      <FormUpdateAd noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="divTitleAndCloseButton">
          <h2>Editar anúncio</h2>
          <button onClick={SetShowUpdateAdvertisementForm}></button>
        </div>

        <div className="divInputs">
          <h3>Informações do veículo:</h3>
          <InputComponent
            type="text"
            placeholder={selectedAd!.brand}
            defaultValue={selectedAd!.brand}
            label="Marca"
            {...register("brand")}
          />
          {errors.brand && (
            <span className="alert-span">{errors.brand.message}</span>
          )}
          <InputComponent
            type="text"
            placeholder={selectedAd!.model}
            defaultValue={selectedAd!.model}
            label="Modelo"
            {...register("model")}
          />
          {errors.model && (
            <span className="alert-span">{errors.model.message}</span>
          )}
          <div className="divTwoInputs">
            <InputComponent
              type="text"
              placeholder={selectedAd!.year}
              defaultValue={selectedAd!.year}
              label="Ano"
              {...register("year")}
            />
            {errors.year && (
              <span className="alert-span">{errors.year.message}</span>
            )}
            <InputComponent
              type="text"
              placeholder={selectedAd!.fuel}
              defaultValue={selectedAd!.fuel}
              label="Combustível"
              {...register("fuel")}
            />
            {errors.fuel && (
              <span className="alert-span">{errors.fuel.message}</span>
            )}
          </div>

          <div className="divTwoInputs">
            <InputComponent
              type="text"
              placeholder={selectedAd!.mileage}
              defaultValue={selectedAd!.mileage}
              label="Quilometragem"
              {...register("mileage")}
            />
            {errors.mileage && (
              <span className="alert-span">{errors.mileage.message}</span>
            )}
            <InputComponent
              type="text"
              placeholder={selectedAd!.color}
              defaultValue={selectedAd!.color}
              label="Cor"
              {...register("color")}
            />
            {errors.color && (
              <span className="alert-span">{errors.color.message}</span>
            )}
          </div>

          <div className="divTwoInputs">
            <InputComponent
              type="number"
              placeholder={selectedAd!.table_price + ""}
              defaultValue={selectedAd!.table_price}
              label="Preço tabela FIPE"
              {...register("table_price")}
            />
            {errors.table_price && (
              <span className="alert-span">{errors.table_price.message}</span>
            )}

            <InputComponent
              type="number"
              placeholder={selectedAd!.price + ""}
              defaultValue={selectedAd!.price}
              label="Preço"
              {...register("price")}
            />
            {errors.price && (
              <span className="alert-span">{errors.price.message}</span>
            )}
          </div>

          <InputComponent
            type="text"
            placeholder={selectedAd!.description}
            defaultValue={selectedAd!.description}
            label="Descrição"
            {...register("description")}
          />
          {errors.description && (
            <span className="alert-span">{errors.description.message}</span>
          )}

          <InputComponent
            type="text"
            placeholder={selectedAd!.cover_image}
            defaultValue={selectedAd!.cover_image}
            label="Imagem da capa"
            {...register("cover_image")}
          />
          {errors.cover_image && (
            <span className="alert-span">{errors.cover_image.message}</span>
          )}

          <div className="divButtonsType">
               {/* {teste? <input value={teste} {...register("is_active")} /> : <input value={selectedAd?.is_active} {...register("is_active")} />} */}
        
              {/* <button
                style={isAdActive? { backgroundColor: "#4529E6", color: "white" }: {backgroundColor: "transparent"}}
                type="button"
                onClick={() => {
            
                  SetIsAdActive(true);
                  // ()=> updateAdvertisementStatus(selectedAd.id,condition)
                }}
              >
                Sim
              </button>
            
              <button
                style={!isAdActive? { backgroundColor: "#4529E6", color: "white" }: {backgroundColor: "transparent"}}
                type="button"
                onClick={() => {
                  SetIsAdActive(false);
                }}
              >
                Não
              </button>          */}
          </div>

          {/* <InputComponent type="text" placeholder="https://image.com" label="1º Imagem da galeria" />

          <InputComponent type="text" placeholder="https://image.com" label="2º Imagem da galeria" /> */}

          {/* <button className="buttonAddField">Adicionar campo para imagem da galeria</button> */}

          <div className="divButtonDeleteAndSubmit">
            <button
              className="buttonDeleteAd"
              onClick={SetShowDeleteAdvertisementModal}
            >
              Excluir anúncio
            </button>
            <button className="buttonSubmit" type="submit">
              Salvar Alterações
            </button>
          </div>
        </div>
      </FormUpdateAd>
    </Modal>
  );
};

export default FormUpdateAnnouncement;
