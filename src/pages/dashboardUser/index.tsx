import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { DashboardUserPageBase } from "./styles";
import { useContext, useEffect } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import FormAddAnnouncement from "../../components/forms/formAddAnnouncement";
import { ProductPageContext } from "../../contexts/productPage.context";

const DashboardUser = () => {
  const { sellerAdvertisements, showAddAdvertisementForm } =
    useContext(AdvertisementContext);

  const { ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    ShowBanner(true);
  }, []);

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
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
