import Cards from "../../components/cards";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { DashboardUserPageBase } from "./styles";
import { useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";

const DashboardUser = () => {
  const { sellerAdvertisements } = useContext(AdvertisementContext);

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
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
