import { useNavigate } from "react-router-dom";
import {UserDetailsDiv} from "./styles"
import { IuserId } from "../../interfaces/user.interface";

interface userDetailProps{
user: IuserId
}

const UserDetails = ({user}:userDetailProps )=> {

  const navigate = useNavigate();
  return (
    <UserDetailsDiv>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPbmsnR5M4YrRifgCOMvnsQb6sZtDpspVrZjdtCtVkMuYM0QGrF_3nt8co8zdfbY4NYs&usqp=CAU"/>
      <h3>{user.name}</h3>
      <p>Vendedor autônomo de carros e caminhonetes, no mercado desde 1960 oferecendo serviços confiáveis e de qualidade</p>
      <button onClick={()=> navigate(`/user/${user.id}`)}>Ver todos os anúncios</button>
    </UserDetailsDiv>
  )
}

export default UserDetails