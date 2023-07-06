import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { useParams } from "react-router-dom";
import { DashboardUserPageBase } from "./styles";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import FormAddAnnouncement from "../../components/forms/formAddAnnouncement";
import { ProductPageContext } from "../../contexts/productPage.context";
import Loader from "../../components/loader";
import { AuthContext } from "../../contexts/auth.context";
import FormEditUserInfo from "../../components/forms/formEditUserInfo";
import FormEditUserAddress from "../../components/forms/formEditUserAddress";
import FormUpdateAnnouncement from "../../components/forms/formEditAnnouncement";
import DeleteAnnouncementModal from "../../components/modal/modalDeleteAnnouncement";
import { IUserReturn } from "../../interfaces/user.interface";
import api from "../../services/api";

const DashboardUser = () => {
  const { userId } = useParams();
  const { loading } = useAuth();
  const {
    sellerAdvertisements,
    showAddAdvertisementForm,
    getSellerAdvertisements,
    showUpdateAdvertisementForm,
    showDeleteAdvertisementModal,
    page,
  } = useContext(AdvertisementContext);

  const { showFormEditUserInfo, showFormEditUserAddress } =
    useContext(AuthContext);

  const { ShowBanner, ShowBannerPicture } = useContext(ProductPageContext);

  const [pageUser, setPageUser] = useState<IUserReturn>();

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
    ShowBanner(true);
    getSellerAdvertisements(+userId!);
    const condition = false
    ShowBannerPicture(condition)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUpdateAdvertisementForm, page, userId, pageUser]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardUserPageBase>
      <Header />
      <main>
        <h1 className="h1Title">Anúncios</h1>
        <UserCard />
        {sellerAdvertisements.length === 0 ? (
          <div className="no-advertisement">
            <p>Não há anúncios</p>
          </div>
        ) : (
          <div className="divAdvertisement">
            <Cards arr={sellerAdvertisements}/>
          </div>
        )}
      </main>
      <Footer />
      {showAddAdvertisementForm && <FormAddAnnouncement />}
      {showFormEditUserInfo && <FormEditUserInfo />}
      {showFormEditUserAddress && <FormEditUserAddress />}
      {showUpdateAdvertisementForm && <FormUpdateAnnouncement />}
      {showDeleteAdvertisementModal && <DeleteAnnouncementModal />}
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
