import { useContext, useEffect, useState } from "react";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { FormUpdateAd } from "./styles";
import { useForm } from "react-hook-form";
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
  } = useForm<TupdateAdvertisement>();

  const onSubmit = async (data: any) => {
    // if (carSpecs.fuel === 1) {
    //   data.fuel = "Flex";
    // }
    // if (carSpecs.fuel === 3) {
    //   data.fuel = "electric";
    // } else {
    data.fuel = selectedAd!.fuel;
    // }
    if (data.cover_image.length <= 0) {
      data.cover_image = selectedAd!.cover_image;
    }
    data.is_active = isAdActive;
    console.log(data.is_active);
    data.price = parseInt(data.price);
    data.table_price = parseInt(data.table_price);
    data.cover_image = image;
    await updateAdvertisement(selectedAd!.id, data);
    SetShowUpdateAdvertisementForm();
  };

  const { brands } = useContext(ProductPageContext);

  const [image, setImage] = useState();
  const [models, setModels] = useState([]);
  const [carSpecs, setCarSpecs] = useState<any>(null);

  const getModel = async (e: any) => {
    const value = e.target.value;

    try {
      setModels([]);
      setCarSpecs(null);
      const resp = await api2.get(`cars?brand=${value}`);
      setModels(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarSpec = async (e: any) => {
    const value = e.target.value;
    const findCar = models.find((car: any) => car.name === value);
    setCarSpecs(findCar);
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
          <fieldset>
            <label htmlFor="">Marca</label>
            <select
              defaultValue={selectedAd?.brand}
              className="customSelect"
              {...register("brand")}
              onChange={(e) => {
                getModel(e);
              }}
            >
              <option value={selectedAd!.brand}>{selectedAd!.brand}</option>
              {brands &&
                brands.map((brand: any, index: any) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </fieldset>

          {errors.brand && (
            <span className="alert-span">{errors.brand.message}</span>
          )}

          <fieldset>
            <label htmlFor="">Modelo</label>
            <select
              defaultValue={selectedAd?.model}
              className="customSelect"
              {...register("model")}
              onChange={(e) => getCarSpec(e)}
            >
              <option value={selectedAd!.model}>{selectedAd!.model}</option>
              {models &&
                models.map((model: any, index) => (
                  <option key={index} value={model.name}>
                    {model.name}
                  </option>
                ))}
            </select>
          </fieldset>

          {errors.model && (
            <span className="alert-span">{errors.model.message}</span>
          )}
          <div className="divTwoInputs">
            <InputComponent
              type="text"
              placeholder={selectedAd!.year}
              defaultValue={selectedAd!.year}
              label="Ano"
              value={carSpecs?.year}
              {...register("year")}
            />
            {errors.year && (
              <span className="alert-span">{errors.year.message}</span>
            )}
            <InputComponent
              type="text"
              defaultValue={selectedAd!.fuel}
              placeholder={selectedAd!.fuel}
              value={carSpecs?.fuel === 3 ? "Eletrico" : "Flex"}
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
              placeholder={carSpecs?.value}
              value={carSpecs?.value}
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
            placeholder="Imagem da capa"
            label="Imagem da capa"
            {...register("cover_image")}
            onChange={(e: any | null) => setImage(e.target.files[0])}
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

          <div className="divButtonDeleteAndSubmit">
            <button
              className="buttonDeleteAd"
              onClick={() => {
                SetShowDeleteAdvertisementModal();
                SetShowUpdateAdvertisementForm();
              }}
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
