import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";

const UserCard = () => {
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

      <button>Criar Anuncio</button>
    </UserCardDiv>
  );
};

export default UserCard;
