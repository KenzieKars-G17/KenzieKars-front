import { useContext, useEffect } from "react";
import Cards from "../../components/cards";
import FilterAside from "../../components/filterAside";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAuth } from "../../hooks";
import { HomePageContext } from "../../contexts/homepage.context";
import { HomePageBase } from "./styles";
import { ProductPageContext } from "../../contexts/productPage.context";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import Loader from "../../components/loader";
import { ModalWrapper } from "../../components/modal/filterModal/styles";
import FormEditUserInfo from "../../components/forms/formEditUserInfo";
import { AuthContext } from "../../contexts/auth.context";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import FormEditUserAddress from "../../components/forms/formEditUserAddress";

const HomePage = () => {

  const { loading, logout } = useAuth();
  const { filteredAd } = useContext(AdvertisementContext);
  const { ShowBanner } = useContext(ProductPageContext);

  const isTokenExpired = (token: string) => {
    const decodedToken: any = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
  };
  useEffect(() => {
    const jwtToken = localStorage.getItem("@TOKEN");
    if (jwtToken && isTokenExpired(jwtToken)) {
      toast.error("Seu token expirou, logue novamente!");
      logout();
    }
    const condition = true;
    ShowBanner(condition);
  }, []);

  const {
    ShowFilterAside,
    showFilterAside,
    showButtonFilter,
    currentWidth,
    updateWidth,
  } = useContext(HomePageContext);
  const { ShowBannerPicture } = useContext(ProductPageContext);

  const { showFormEditUserInfo, showFormEditUserAddress } = useContext(AuthContext);

  const handleScrollToTop = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const condition = true;
    ShowBannerPicture(condition);

    setTimeout(() => {
      updateWidth();
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <HomePageBase>
      <Header />
      <main>
        {showFilterAside === true && currentWidth >= 768 ? (
          <FilterAside />
        ) : null}
        {showFilterAside === true && currentWidth < 768 ? (
          <ModalWrapper>
            <FilterAside />
          </ModalWrapper>
        ) : null}
        <Cards arr={filteredAd} />
      </main>

      {showButtonFilter === true && currentWidth < 768 ? (
        <button
          onClick={() => {
            handleScrollToTop();

            setTimeout(() => {
              ShowFilterAside();
            }, 300);


          }}
          style={{
            margin: "5px 25vw",
            width: "50vw",
            backgroundColor: "#5126EA",
            color: "white",
            border: "none",
          }}
        >
          Filtros
        </button>
      ) : null}

      {showFormEditUserInfo && <FormEditUserInfo />}
      {showFormEditUserAddress && <FormEditUserAddress />}

      <Footer />
    </HomePageBase>
  );
};

export default HomePage;
