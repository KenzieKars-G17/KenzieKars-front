import { useContext } from "react";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { FormNewAd } from "./styles";
import { useForm } from "react-hook-form";
import { advertisementSchema } from "../../../schemas/advertisements.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Iadvertisement } from "../../../interfaces/advertisements.interfaces";

const FormAddAnnouncement = () => {
  const {
    SetShowAddAdvertisementForm,
    createAdvertisement,
    getSellerAdvertisements,
  } = useContext(AdvertisementContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iadvertisement>({ resolver: zodResolver(advertisementSchema) });

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.table_price = parseInt(data.table_price);
    await createAdvertisement(data);
    SetShowAddAdvertisementForm();
    getSellerAdvertisements();
  };

  return (
    <Modal>
      <FormNewAd noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="divTitleAndCloseButton">
          <h2>Criar anúncio</h2>
          <button onClick={SetShowAddAdvertisementForm}>X</button>
        </div>

        <div className="divInputs">
          <h3>Informações do veículo:</h3>
          <InputComponent
            type="text"
            placeholder="Mercedez-Benz"
            label="Marca"
            {...register("brand")}
          />
          {errors.brand && (
            <span className="alert-span">{errors.brand.message}</span>
          )}
          <InputComponent
            type="text"
            placeholder="A 200 CGI ADVANCE SEDAN"
            label="Modelo"
            {...register("model")}
          />
          {errors.model && (
            <span className="alert-span">{errors.model.message}</span>
          )}
          <div className="divTwoInputs">
            <InputComponent
              type="text"
              placeholder="2018"
              label="Ano"
              {...register("year")}
            />
            {errors.year && (
              <span className="alert-span">{errors.year.message}</span>
            )}
            <InputComponent
              type="text"
              placeholder="Gasolina / Etanol"
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
              placeholder="3000"
              label="Quilometragem"
              {...register("mileage")}
            />
            {errors.mileage && (
              <span className="alert-span">{errors.mileage.message}</span>
            )}
            <InputComponent
              type="text"
              placeholder="Branco"
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
              placeholder="48000"
              label="Preço tabela FIPE"
              {...register("table_price")}
            />
            {errors.table_price && (
              <span className="alert-span">{errors.table_price.message}</span>
            )}

            <InputComponent
              type="number"
              placeholder="50000"
              label="Preço"
              {...register("price")}
            />
            {errors.price && (
              <span className="alert-span">{errors.price.message}</span>
            )}
          </div>

          <InputComponent
            type="text"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            label="Descrição"
            {...register("description")}
          />
          {errors.description && (
            <span className="alert-span">{errors.description.message}</span>
          )}

          <InputComponent
            type="text"
            placeholder="https://image.com"
            label="Imagem da capa"
            {...register("cover_image")}
          />
          {errors.cover_image && (
            <span className="alert-span">{errors.cover_image.message}</span>
          )}

          {/* <InputComponent type="text" placeholder="https://image.com" label="1º Imagem da galeria" />

          <InputComponent type="text" placeholder="https://image.com" label="2º Imagem da galeria" /> */}

          {/* <button className="buttonAddField">Adicionar campo para imagem da galeria</button> */}

          <div className="divButtonCancelAndSubmit">
            <button
              className="buttonCancel"
              onClick={SetShowAddAdvertisementForm}
            >
              Cancelar
            </button>
            <button type="submit" className="buttonSubmit">
              Criar Anúncio
            </button>
          </div>
        </div>
      </FormNewAd>
    </Modal>
  );
};

export default FormAddAnnouncement;
