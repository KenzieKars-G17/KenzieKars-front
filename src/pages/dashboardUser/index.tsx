import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { DashboardUserPageBase } from "./styles";
import { useContext, useEffect } from "react";
import { useAuth } from "../../hooks";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import FormAddAnnouncement from "../../components/forms/formAddAnnouncement";
import { ProductPageContext } from "../../contexts/productPage.context";
import Loader from "../../components/loader";
import { AuthContext } from "../../contexts/auth.context";
import FormEditUserInfo from "../../components/forms/formEditUserInfo";

const DashboardUser = () => {

  const { loading } = useAuth();
  const { sellerAdvertisements, showAddAdvertisementForm } = useContext(AdvertisementContext);
  const { showFormEditUserInfo } = useContext(AuthContext)

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(true);
  }, []);
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
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
