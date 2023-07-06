import Footer from "../../components/footer";
import Header from "../../components/header";
import { ProductPageBase } from "./styles";
import IndividualProduct from "../../components/individualProduct";
import UserDetails from "../../components/userDetails";
import Comments from "../../components/comments";
import { useContext, useEffect } from "react";
import { useAuth } from "../../hooks";
import { ProductPageContext } from "../../contexts/productPage.context";
import Loader from "../../components/loader";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import FormEditUserInfo from "../../components/forms/formEditUserInfo";
import FormEditUserAddress from "../../components/forms/formEditUserAddress";

const ProductPage = () => {
  const { loading } = useAuth();
  const { ShowBannerPicture, ShowBanner } = useContext(ProductPageContext);
  const { showFormEditUserInfo, showFormEditUserAddress } = useContext(AuthContext);
  const { advertisementById, getAdvertisementById } =
    useContext(AdvertisementContext);
  const { id } = useParams();

  useEffect(() => {
    const condition = false;
    ShowBannerPicture(condition);
    ShowBanner(!condition);
    getAdvertisementById(id);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ProductPageBase>
      <Header />

      <main>
        <IndividualProduct />
        <section className="pictures">
          <h2>Fotos</h2>
          <ul>
            {advertisementById &&
              advertisementById.images.map((image: any) => (
                <li key={image.id}>
                  <img src={image.image} alt="" />
                </li>
              ))}
          </ul>
        </section>
        {advertisementById && <UserDetails user={advertisementById.user} />}
        <Comments />
      </main>
      
      {showFormEditUserInfo && <FormEditUserInfo />}
      {showFormEditUserAddress && <FormEditUserAddress />}

      <Footer />
    </ProductPageBase>
  );
};

export default ProductPage;
