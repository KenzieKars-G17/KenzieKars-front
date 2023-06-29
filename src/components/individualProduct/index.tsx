import { IndividualProductBase } from "./styles";
import { useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";

const IndividualProduct = () => {
  const { advertisementById } = useContext(AdvertisementContext);
  const price = +advertisementById?.price;

  const formattedPrice = () => {
    const parts = price?.toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  };
  return (
    <IndividualProductBase>
      <section className="mainPicture">
        <img src={advertisementById.cover_image} />
      </section>

      {advertisementById && (
        <>
          <section className="resume">
            <h1>
              {advertisementById.brand} {advertisementById.model}
            </h1>
            <div className="yearAndKm">
              <span className="km">{advertisementById.mileage} KM</span>
              <span className="year">{advertisementById.year}</span>
            </div>
            <span className="price">R$ {formattedPrice()}</span>
            <button className="buyButton">Comprar</button>
          </section>

          <section className="description">
            <h2>Descrição</h2>
            <p>{advertisementById.description}</p>
          </section>
        </>
      )}
    </IndividualProductBase>
  );
};

export default IndividualProduct;
