/* eslint-disable @typescript-eslint/no-explicit-any */
import api2 from "../../../services/api2";
import { useContext, useEffect, useState } from "react";
import { AdvertisementContext } from "../../../contexts/advertisements.context";
import { ProductPageContext } from "../../../contexts/productPage.context";
import { AuthContext } from "../../../contexts/auth.context";
import { InputComponent } from "../../InputComponent";
import Modal from "../../modal";
import { FormNewAd } from "./styles";
import { useForm } from "react-hook-form";
import { advertisementSchema } from "../../../schemas/advertisements.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Iadvertisement } from "../../../interfaces/advertisements.interfaces";
import { toast } from "react-toastify";

const FormAddAnnouncement = () => {
  const {
    SetShowAddAdvertisementForm,
    createAdvertisement,
    getSellerAdvertisements,
  } = useContext(AdvertisementContext);
  const { user } = useContext(AuthContext);
  const { brands } = useContext(ProductPageContext);
  const [images, setImages] = useState<any>([]);
  const [moreImage, setMoreImage] = useState<number>(0);
  const [models, setModels] = useState<string[]>([]);
  const [carSpecs, setCarSpecs] = useState<any>(null);

  const getModels = async (e: any) => {
    const value = e.target.value;

    try {
      setModels([]);
      setCarSpecs(null);

      const response = await api2.get(
        `https://kenzie-kars.herokuapp.com/cars?brand=${value}`
      );
      setModels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarSpecs = async (e: any) => {
    const value = e.target.value;
    const findCar = models.find((car: any) => car.name === value);
    setCarSpecs(findCar);
  };
  
  const addMoreImages = () => {

if (moreImage >= 4) {
  return toast.error("Atingiu o limite de imagens");
}
setMoreImage((prevData) => prevData + 1);

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iadvertisement>();

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.table_price = parseInt(carSpecs.value);
    if (carSpecs.fuel === 1) {
      data.fuel = "Flex";
    }
    if (carSpecs.fuel === 3) {
      data.fuel = "electric";
    }
    data.year = carSpecs.year;
    data.cover_image = images[0];
    data.gallery_image_1 = images.length > 1 && images[1]
    data.gallery_image_2 = images.length > 2 && images[2]
    data.gallery_image_3 = images.length > 3 && images[3]
    data.gallery_image_4 = images.length > 4 && images[4]
    console.log(data);
    await createAdvertisement(data);
    SetShowAddAdvertisementForm();
    getSellerAdvertisements(user!.id);
  };

  return (
    <Modal>
      <FormNewAd
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="divTitleAndCloseButton">
          <h2>Criar anúncio</h2>
          <button onClick={SetShowAddAdvertisementForm}>X</button>
        </div>

        <div className="divInputs">
          <h3>Informações do veículo:</h3>
          <fieldset>
            <label htmlFor="">Marca</label>
            <select {...register("brand")} onChange={(e) => getModels(e)}>
              <option value="">Selecione uma marca</option>
              {brands &&
                brands.map((item: any, index: number) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </fieldset>
          {errors.brand && (
            <span className="alert-span">{errors.brand.message}</span>
          )}

          <fieldset>
            <label htmlFor="">Modelo</label>
            <select {...register("model")} onChange={(e) => getCarSpecs(e)}>
              <option value="">Selecione uma marca</option>
              {models.map((item: any, index) => (
                <option key={index} value={item.name}>
                  {item.name}
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
              placeholder="2018"
              label="Ano"
              value={carSpecs?.year}
              {...register("year")}
            />
            {errors.year && (
              <span className="alert-span">{errors.year.message}</span>
            )}
            {carSpecs?.fuel === 1 ? (
              <InputComponent
                type="text"
                placeholder="Gasolina / Etanol"
                label="Combustível"
                value="Flex"
                {...register("fuel")}
              />
            ) : carSpecs?.fuel === 3 ? (
              <InputComponent
                type="text"
                placeholder="Gasolina / Etanol"
                label="Combustível"
                value="Elétrico"
                {...register("fuel")}
              />
            ) : (
              <InputComponent
                type="text"
                placeholder="Gasolina / Etanol"
                label="Combustível"
                {...register("fuel")}
              />
            )}
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
              value={carSpecs?.value}
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
            type="file"
            placeholder="https://image.com"
            label="Imagem da capa"
            {...register("cover_image")}
            onChange={(event: any) => {
              const newImages = Array.from(event.target.files);
              setImages((prevState: any) => [...prevState, ...newImages]);
            }}
          />
          {errors.cover_image && (
            <span className="alert-span">{errors.cover_image.message}</span>
          )}

          {moreImage === 0 && null}

          {moreImage === 1 && (
            <div>
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
            </div>
          )}

          {moreImage === 2 && (
            <div>
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />

              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
            </div>
          )}

          {moreImage === 3 && (
            <div>
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
            </div>
          )}

          {moreImage === 4 && (
            <div>
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
              <InputComponent
                type="file"
                placeholder="https://image.com"
                label=""
                onChange={(event: any) => {
                  const newImages = Array.from(event.target.files);
                  setImages((prevState: any) => [...prevState, ...newImages]);
                }}
              />
            </div>
          )}

          <button type="button" onClick={addMoreImages}>
            Adicionar Campo de Imagem
          </button>

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
