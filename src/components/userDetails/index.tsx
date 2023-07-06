import { useNavigate } from "react-router-dom";
import {UserDetailsDiv} from "./styles"
import { IUserReturn, IuserId } from "../../interfaces/user.interface";
import { useEffect, useState } from "react";
import api from "../../services/api";
import avatar from "../../assets/avatar.png";

interface userDetailProps{
user: IuserId
}

const UserDetails = ({user}:userDetailProps )=> {

  const [pageUser, setPageUser] = useState<IUserReturn>();

  const getApiUser = async () => {
    try {
      const response = await api.get(`users/${user.id}`);

      setPageUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiUser();
  }, [pageUser]);

  const navigate = useNavigate();
  return (
    <UserDetailsDiv>
      <img src={avatar}/>
      <h3>{user.name}</h3>
      <p>{pageUser?.description}</p>
      <button onClick={()=> navigate(`/user/${user.id}`)}>Ver todos os anúncios</button>
    </UserDetailsDiv>
  )
}

export default UserDetails