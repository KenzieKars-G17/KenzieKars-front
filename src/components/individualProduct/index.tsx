import { IndividualProductBase } from "./styles";
import { useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import api from "../../services/api";

const IndividualProduct = () => {
  const { advertisementById } = useContext(AdvertisementContext);
  const price = +advertisementById?.price;

  const formattedPrice = () => {
    const parts = price?.toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  };

  const openWhatsApp = async () => {
    const findUser = await api.get(`users/${advertisementById.user.id}`);
    console.log(findUser.data.phone);
    window.open(
      `https://api.whatsapp.com/send?phone=${findUser.data.phone}`,
      "_blank"
    );
  };

  return (
    <IndividualProductBase>
      <section className="mainPicture">
        <img src={advertisementById && advertisementById.cover_image} />
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
            <button className="buyButton" onClick={openWhatsApp}>
              Comprar
            </button>
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
