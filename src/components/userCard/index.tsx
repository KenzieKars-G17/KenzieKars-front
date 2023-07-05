import api2 from "../../services/api2";
import { useContext, useState, useEffect } from "react";
import { Category, NameAndCategoryDiv, UserCardDiv } from "./styles";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { AuthContext } from "../../contexts/auth.context";
import { ProductPageContext } from "../../contexts/productPage.context";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { IUserReturn } from "../../interfaces/user.interface";

const UserCard = () => {
  const { SetShowAddAdvertisementForm } = useContext(AdvertisementContext);
  const { user, SetShowFormEditUserInfo, SetShowFormEditUserAddress } =
    useContext(AuthContext);
  const { setBrands } = useContext(ProductPageContext);
  const { userId } = useParams();

  const [pageUser, setPageUser] = useState<IUserReturn>();

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

  const getApiUser = async () => {
    try {
      const response = await api.get(`users/${userId}`);

      setPageUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiUser();
  }, []);

  return (
    <UserCardDiv>
      <img src="../../src/assets/avatar.png" alt="Profile Image" />
      <NameAndCategoryDiv>
        <h3>{pageUser?.name}</h3>
        {pageUser?.seller && (
          <Category>
            <span>Anunciante</span>
          </Category>
        )}
      </NameAndCategoryDiv>
      <p>{pageUser?.description}</p>
      {user?.id == userId && (
        <div className="divButtons">
          {pageUser?.seller && (
            <button
              onClick={() => {
                SetShowAddAdvertisementForm();
                getBrands();
              }}
            >
              Criar Anuncio
            </button>
          )}
          <button onClick={SetShowFormEditUserInfo}>Editar perfil</button>
          <button onClick={SetShowFormEditUserAddress}>Editar endereço</button>
        </div>
      )}
    </UserCardDiv>
  );
};

export default UserCard;
