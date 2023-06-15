import { useContext, useEffect } from "react";
import Cards from "../../components/cards";
import FilterAside from "../../components/filterAside";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { HomePageContext } from "../../contexts/homepage.context";
// import { FilterContext } from "../../contexts/filter.context";
import { HomePageBase } from "./styles";
import { ProductPageContext } from "../../contexts/productPage.context";
import Modal from "../../components/modal";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import FormAddAnnouncement from "../../components/forms/formAddAnnouncement";
// import { useContext } from "react";

const HomePage = () => {

  const { allAdvertisements } = useContext(AdvertisementContext);
  const { ShowBanner } = useContext(ProductPageContext);

  // const {
  //   showAllBrands,
  //   showAllModels,
  //   showAllColors,
  //   showAllYears,
  //   showAllFuels,

  //   selectBrand,
  //   selectModel,
  //   selectColor,
  //   selectYear,
  //   selectFuel,
  //   SetMinKm,
  //   SetMaxKm,
  //   SetMinPrice,
  //   SetMaxPrice,

  //   brandSelected,
  //   modelSelected,
  //   colorSelected,
  //   yearSelected,
  //   fuelSelected,
  //   minKm,
  //   maxKm,
  //   minPrice,
  //   maxPrice,
  // } = useContext(FilterContext);

  useEffect(()=>{
    const condition = true
    ShowBanner(condition)
  },[])

  const {
    ShowFilterAside,
    showFilterAside,
    showButtonFilter,
    currentWidth,
    updateWidth,
  } = useContext(HomePageContext);
  const { ShowBannerPicture } = useContext(ProductPageContext);

  useEffect(() => {
    const condition = true;
    ShowBannerPicture(condition);

    setTimeout(() => {
      updateWidth();
    }, 1000);
  }, []);

  return (
    <HomePageBase>
      <Header />

      <main>
        {showFilterAside === true && currentWidth >= 768 ? (
          <FilterAside />
        ) : null}
        {showFilterAside === true && currentWidth < 768 ? (
          <Modal>
            <FilterAside />
          </Modal>
        ) : null}
        <Cards arr={allAdvertisements} />
      </main>

      {/*COMPONENTIZAR E PADRONIZAR ESTE BOTÃO DE FILTROS*/}
      {showButtonFilter === true && currentWidth < 768 ? (
        <button
          onClick={ShowFilterAside}
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
      {/*COMPONENTIZAR E PADRONIZAR ESTE BOTÃO DE FILTROS*/}

      <Footer />
    </HomePageBase>
  );
};

export default HomePage;
