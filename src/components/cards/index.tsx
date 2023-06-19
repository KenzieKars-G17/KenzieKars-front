import { useContext } from "react";
import { UlCards } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import { TAdvertisementArray } from "../../interfaces/advertisements.interfaces";
import { useNavigate } from "react-router-dom";

interface CardsProps {
  arr: TAdvertisementArray;
}

const Cards = ({ arr }: CardsProps) => {

  const navigate = useNavigate()
  
  const announcements = [
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750,
    },
  ];

  const { user } = useContext(AuthContext);

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
            <img src={announcement.cover_image} alt={announcement.model} onClick={()=>{navigate("/product-page")}}/>
            <h2>
              {announcement.brand}-{announcement.model}
            </h2>
            <p>{announcement.description}</p>
            <div className="announcerDetails">
              <img
                src={announcements[0].profilePic}
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
            {user?.name === announcement.user?.name && (
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
