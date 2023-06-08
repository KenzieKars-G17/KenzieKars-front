import { UlCards } from './styles';

const Cards = () => {

  const announcements = [
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },
    {
      imgSource: "https://img.olx.com.br/images/51/515306396352820.jpg",
      alt: "image car",
      name: "Tesla model X",
      description: "Tesla model that rides alone if you want to",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU",
      profileName: "Morlock",
      km: 21,
      year: 2014,
      price: 148750
    },

  ]

  return (
    <UlCards>

      {announcements.map((announcement)=>{
        return (
          <li>
          <img src={announcement.imgSource} alt={announcement.alt} />
          <h2>{announcement.name}</h2>
          <p>{announcement.description}</p>
          <div className='announcerDetails'>
            <img src={announcement.profilePic} alt="ProfilePic" className='profilePic'/>
            <h3 className='userName'>{announcement.profileName}</h3>
          </div>
          <div className='productDetailsPreview'>
            <span className='km'>{announcement.km} KM</span>
            <span className='year'>{announcement.year}</span>
            <span className='price'>R$ {announcement.price}</span>
          </div>
        </li>
        )
      })}


    </UlCards>
  )
}

export default Cards;
