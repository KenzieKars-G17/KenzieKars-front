import api2 from "../../services/api2";
import { useContext } from "react";
import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { AuthContext } from "../../contexts/auth.context";
import { ProductPageContext } from "../../contexts/productPage.context";

const UserCard = () => {
  const { SetShowAddAdvertisementForm } = useContext(AdvertisementContext);
  const { user, SetShowFormEditUserInfo, SetShowFormEditUserAddress } =
    useContext(AuthContext);
  const { setBrands } = useContext(ProductPageContext);

  const getBrands = async () => {
    try {
      const response = await api2.get("https://kenzie-kars.herokuapp.com/cars");
      const data = response.data;
      const keys = Object.keys(data);

      setBrands(keys);
    } catch (error) {
      console.log(error);
    }
  };
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
        <button
          onClick={() => {
            SetShowAddAdvertisementForm();
            getBrands();
          }}
        >
          Criar Anuncio
        </button>
        <button onClick={SetShowFormEditUserInfo}>Editar perfil</button>
        <button onClick={SetShowFormEditUserAddress}>Editar endereço</button>
      </div>
    </UserCardDiv>
  );
};

export default UserCard;
