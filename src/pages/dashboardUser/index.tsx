import Cards from "../../components/cards";
import { UlCards } from "../../components/cards/styles";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import { DashboardUserPageBase } from "./styles";

const DashboardUser = () => {
  return (
    <DashboardUserPageBase>
      <Header />
      <main>
        <UserCard />
      </main>
      <Footer />
    </DashboardUserPageBase>
  );
};
export default DashboardUser;
