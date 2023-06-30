import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { useParams } from "react-router-dom";
import { DashboardUserPageBase } from "./styles";
import { useContext, useEffect } from "react";
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

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(true);
    getSellerAdvertisements(+userId!);
  }, [showUpdateAdvertisementForm, page]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardUserPageBase>
      <Header />
      <main>
        <UserCard />
        <div className="divAdvertisement">
          {sellerAdvertisements.length === 0 ? (
            <div />
          ) : (
            <Cards arr={sellerAdvertisements} />
          )}
        </div>
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
