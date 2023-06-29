import { useContext } from "react";
import { UlCards } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import { TAdvertisementArray } from "../../interfaces/advertisements.interfaces";
import { useLocation, useParams } from "react-router-dom";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import avatar from "../../assets/avatar.png";
import api2 from "../../services/api2";
import { ProductPageContext } from "../../contexts/productPage.context";

interface CardsProps {
  arr: TAdvertisementArray;
}

const Cards = ({ arr }: CardsProps) => {
  const { user, setLoading } = useContext(AuthContext);

  const { getAdvertisementById, SetShowUpdateAdvertisementForm, setSelectedAd } = useContext(AdvertisementContext);

  const {setBrands} = useContext(ProductPageContext)

  const { userId } = useParams();

  const isUserSeller = user?.seller && user.id === parseInt(userId!);

  const location = useLocation();

  const isHome = location.pathname === "/";

  const getBrands = async () => {
    try {
      const response = await api2.get("cars");
      const data = response.data;
      const keys = Object.keys(data);
      setBrands(keys);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UlCards>
      {arr.map((announcement) => {
        return (
          <li key={Math.random()}>
            {announcement.is_active ? (
              <div className="divActive">
                <p>Ativo</p>
              </div>
            ) : (
              <div className="divInactive">
                <p>Inativo</p>
              </div>
            )}
            <img
              src={announcement.cover_image}
              alt={announcement.model}
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                getAdvertisementById(announcement.id);
                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }}
            />
            <div className="textContainer">
              <h2>
                {announcement.brand}-{announcement.model}
              </h2>
              <p>{announcement.description}</p>
              <div className="announcerDetails">
                <img src={avatar} alt="ProfilePic" className="profilePic" />
                <h3 className="userName">{announcement.user?.name}</h3>
              </div>
            </div>
            <div className="productDetailsPreview">
              <span className="km">{announcement.mileage} KM</span>
              <span className="year">{announcement.year}</span>
              <span className="price">R$ {announcement.price}</span>
            </div>
            {!isHome && isUserSeller && (
              <div className="divButtonsAdmin">
                <button className="btnEdit" onClick={()=>{
                  setSelectedAd(announcement)
                  // getBrands()
                  SetShowUpdateAdvertisementForm()}}>Editar</button>
                <button className="btnDetails">Ver detalhes</button>
              </div>
            )}
          </li>
        );
      })}
    </UlCards>
  );
};

export default Cards;
