import { useContext, useEffect } from "react";
import Cards from "../../components/cards";
import FilterAside from "../../components/filterAside";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { HomePageContext } from "../../contexts/homepage.context";
// import { FilterContext } from "../../contexts/filter.context";
import { HomePageBase } from "./styles";
import { ProductPageContext } from "../../contexts/productPage.context";
// import { useContext } from "react";

const HomePage = () => {
  
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

  const { ShowFilterAside, showFilterAside, showButtonFilter  } = useContext(HomePageContext)
  const { ShowBannerPicture } = useContext(ProductPageContext)

  useEffect(() => {
    const condition = true
    ShowBannerPicture(condition)
  }, [])

  return (
    <HomePageBase>
      <Header />

      <main>
        {showFilterAside === true ? <FilterAside/> : null}
        <Cards />
      </main>

    {/*COMPONENTIZAR E PADRONIZAR ESTE BOTÃO DE FILTROS*/}
    {showButtonFilter === true ? (
      <button onClick={ShowFilterAside} style={{ margin: "5px 25vw", width: "50vw", backgroundColor: "#5126EA", color: "white", border: "none"}}>
        Filtros
      </button>
    ) : null}
    {/*COMPONENTIZAR E PADRONIZAR ESTE BOTÃO DE FILTROS*/}

      <Footer />
    </HomePageBase>
  );
};

export default HomePage;
