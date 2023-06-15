import { useContext } from "react";
import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";
import { AdvertisementContext } from "../../contexts/advertisements.context";

const UserCard = () => {

  const {  SetShowAddAdvertisementForm } = useContext(AdvertisementContext);

  return (
    <UserCardDiv>
      <img></img>
      <NameAndCategoryDiv>
        <h3>Usuário Teste</h3>
        <Category>
          <span>Anunciante</span>
        </Category>
      </NameAndCategoryDiv>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <button onClick={SetShowAddAdvertisementForm}>Criar Anuncio</button>
    </UserCardDiv>
  );
};

export default UserCard;
