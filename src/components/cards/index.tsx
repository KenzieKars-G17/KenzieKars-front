import { useContext } from "react";
import { UlCards } from "./styles";
import { AuthContext } from "../../contexts/auth.context";
import { AdvertisementContext } from "../../contexts/advertisements.context";


const Cards = () => {
  
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

  
  const {allAdvertisements} = useContext(AdvertisementContext)

  const {user} = useContext(AuthContext)

  return (
    <UlCards>
      {allAdvertisements.map((announcement) => {
        return (
          <li key={Math.random()}>
            <img src={announcement.cover_image} alt={announcement.model} />
            <h2>{announcement.brand}-{announcement.model}</h2>
            <p>{announcement.description}</p>
            <div className="announcerDetails">
              <img
                src={announcements[0].profilePic}
                alt="ProfilePic"
                className="profilePic"
              />
              <h3 className="userName">{announcements[0].profileName}</h3>
            </div>
            {user && <button>teste</button>}
            <div className="productDetailsPreview">
              <span className="km">{announcement.mileage} KM</span>
              <span className="year">{announcement.year}</span>
              <span className="price">R$ {announcement.price}</span>
            </div>
          </li>
        );
      })}
    </UlCards>
  );
};

export default Cards;
