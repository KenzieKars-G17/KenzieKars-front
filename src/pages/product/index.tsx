import Footer from "../../components/footer";
import Header from "../../components/header";
import { ProductPageBase } from "./styles";
import IndividualProduct from "../../components/individualProduct";
import UserDetails from "../../components/userDetails";
import Comments from "../../components/comments";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { ProductPageContext } from "../../contexts/productPage.context";
import Loader from "../../components/loader";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import FormEditUserInfo from "../../components/forms/formEditUserInfo";
import FormEditUserAddress from "../../components/forms/formEditUserAddress";
import Modal from "../../components/modal";

const ProductPage = () => {
  const { loading } = useAuth();
  const { ShowBannerPicture, ShowBanner } = useContext(ProductPageContext);
  const { showFormEditUserInfo, showFormEditUserAddress } =
    useContext(AuthContext);
  const { advertisementById, getAdvertisementById } =
    useContext(AdvertisementContext);
  const { id } = useParams();

  const [imageToShow, setImageToShow] = useState();
  const [showImageModal, setShowImageModal] = useState(false);

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
                <li style={{cursor:"pointer"}} key={image.id}>
                  <img
                    src={image.image}
                    alt=""
                    onClick={() => {
                      setImageToShow(image.image);
                      setShowImageModal(true);
                    }}
                  />
                </li>
              ))}
          </ul>
        </section>
        {advertisementById && <UserDetails user={advertisementById.user} />}
        <Comments />
      </main>

      {showImageModal && (
        <Modal>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
            <button onClick={()=>{setShowImageModal(false)}} style={{width:"25%", display:"flex", justifyContent:"center"}}>Fechar</button>
          <img src={imageToShow} style={{ width: "65%" }} />
          </div>

        </Modal>
      )}

      {showFormEditUserInfo && <FormEditUserInfo />}
      {showFormEditUserAddress && <FormEditUserAddress />}

      <Footer />
    </ProductPageBase>
  );
};

export default ProductPage;
