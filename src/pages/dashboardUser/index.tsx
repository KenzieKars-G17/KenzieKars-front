import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { DashboardUserPageBase } from "./styles";
import { useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import FormAddAnnouncement from "../../components/forms/formAddAnnouncement";

const DashboardUser = () => {

  const { sellerAdvertisements, showAddAdvertisementForm } = useContext(AdvertisementContext);

  console.log(sellerAdvertisements);

  return (
    <DashboardUserPageBase>
      <Header />
      <main>
        <UserCard />
        <div className="divAdvertisement">
          {sellerAdvertisements.length === 0 ? (
            <h2>Sem Anuncios</h2>
          ) : (
            <Cards arr={sellerAdvertisements} />
          )}
        </div>
      </main>
      <Footer />
      {showAddAdvertisementForm && <FormAddAnnouncement/>}
      
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
