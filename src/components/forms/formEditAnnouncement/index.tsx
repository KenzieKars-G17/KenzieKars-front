import { useContext, useEffect, useState } from "react";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { FormUpdateAd } from "./styles";
import { useForm } from "react-hook-form";
import { updateAdvertisementSchema } from "../../../schemas/advertisements.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TupdateAdvertisement } from "../../../interfaces/advertisements.interfaces";
import api2 from "../../../services/api2";
import { ProductPageContext } from "../../../contexts/productPage.context";

const FormUpdateAnnouncement = () => {
  const {
    SetShowUpdateAdvertisementForm,
    updateAdvertisement,
    SetShowDeleteAdvertisementModal,
    selectedAd,
    SetIsAdActive,
    isAdActive,
  } = useContext(AdvertisementContext);

  useEffect(() => {
    SetIsAdActive(selectedAd!.is_active);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TupdateAdvertisement>({
    resolver: zodResolver(updateAdvertisementSchema),
  });

  const onSubmit = async (data: any) => {
    data.is_active = isAdActive;
    data.price = parseInt(data.price);
    data.table_price = parseInt(data.table_price);
    await updateAdvertisement(selectedAd!.id, data);
    SetShowUpdateAdvertisementForm();
  };

  const { brands } = useContext(ProductPageContext);

  const [image, setImage] = useState();
  const [model, setModel] = useState([]);
  const [carSpecs, setCarSpecs] = useState(null);

  const getModel = async (e: any) => {
    const value = e.target.value;
    try {
      setModel([]);
      setCarSpecs(null);
      const resp = await api2.get(`cars?brand=${value}`);
      setModel(resp.data);
    } catch (error) {
      console.log(error);
    }
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
          {/* <div>
            <label htmlFor="">Marca</label>
            <select
              {...register("brand")}
              onChange={(e) => getModel(e)}
            >
              <option value="">Selecionar uma marca</option>
              {brands &&
                brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div> */}

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
            type="file"
            placeholder={selectedAd!.cover_image}
            defaultValue={selectedAd!.cover_image}
            label="Imagem da capa"
            {...register("cover_image")}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors.cover_image && (
            <span className="alert-span">{errors.cover_image.message}</span>
          )}

          <div className="divButtonsType">
            {isAdActive === true ? (
              <button
                style={{ backgroundColor: "#4529E6", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  const condition = true;
                  SetIsAdActive(condition);
                }}
              >
                Sim
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const condition = true;
                  SetIsAdActive(condition);
                }}
              >
                {" "}
                Sim
              </button>
            )}

            {isAdActive === true ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const condition = false;
                  SetIsAdActive(condition);
                }}
              >
                Não
              </button>
            ) : (
              <button
                style={{ backgroundColor: "#4529E6", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  const condition = false;
                  SetIsAdActive(condition);
                }}
              >
                Não
              </button>
            )}
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
