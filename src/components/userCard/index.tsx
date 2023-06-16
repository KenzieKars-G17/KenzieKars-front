import { useContext } from "react";
import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { AuthContext } from "../../contexts/auth.context";

const UserCard = () => {
  const { SetShowAddAdvertisementForm } = useContext(AdvertisementContext);
  const { user } = useContext(AuthContext);

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
      <button onClick={SetShowAddAdvertisementForm}>Criar Anuncio</button>
    </UserCardDiv>
  );
};

export default UserCard;
