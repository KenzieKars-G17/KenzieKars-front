import { useContext } from "react";
import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { AuthContext } from "../../contexts/auth.context";

const UserCard = () => {
  const { SetShowAddAdvertisementForm } = useContext(AdvertisementContext);
  const { user, SetShowFormEditUserInfo, SetShowFormEditUserAddress } = useContext(AuthContext);

  return (
    <UserCardDiv>
      <img></img>
      <NameAndCategoryDiv>
        <h3>{user?.name}</h3>
        {user?.seller && (
          <Category>
            <span>Anunciante</span>
          </Category>
        )}
      </NameAndCategoryDiv>
      <p>{user?.description}</p>
      <div className="divButtons">
        <button onClick={SetShowAddAdvertisementForm}>Criar Anuncio</button>
        <button onClick={SetShowFormEditUserInfo}>Editar perfil</button>
        <button onClick={SetShowFormEditUserAddress}>Editar endereço</button>
      </div>
    </UserCardDiv>
  );
};

export default UserCard;
