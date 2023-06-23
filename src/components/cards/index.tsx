import { useContext } from "react";
import { UlCards } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import { TAdvertisementArray } from "../../interfaces/advertisements.interfaces";
import { useLocation, useParams } from "react-router-dom";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import avatar from '../../assets/avatar.png';

interface CardsProps {
  arr: TAdvertisementArray;
}

const Cards = ({ arr }: CardsProps) => {
  const { user, setLoading } = useContext(AuthContext);
  
  const { getAdvertisementById } = useContext(AdvertisementContext);
  
  const { userId } = useParams();

  return (
    <UlCards>
      {arr.map((announcement) => {
        const isUserSeller = user?.seller && user.id === parseInt(userId!);      

        const location = useLocation()
      
        const isHome = location.pathname === '/'
         
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
            <h2>
              {announcement.brand}-{announcement.model}
            </h2>
            <p>{announcement.description}</p>
            <div className="announcerDetails">
              <img
                src={avatar}
                alt="ProfilePic"
                className="profilePic"
              />
              <h3 className="userName">{announcement.user?.name}</h3>
            </div>
            <div className="productDetailsPreview">
              <span className="km">{announcement.mileage} KM</span>
              <span className="year">{announcement.year}</span>
              <span className="price">R$ {announcement.price}</span>
            </div>
            {!isHome && isUserSeller && (
              <div className="divButtonsAdmin">
                <button className="btnEdit">Editar</button>
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
