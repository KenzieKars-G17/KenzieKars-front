import { useEffect, useState, useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import { FilterHeader, StyledFilter } from "./styles";
import { MdClose } from "react-icons/md";
import GlobalStyles from "../../styles/GlobalStyles";
import { HomePageContext } from "../../contexts/homepage.context";

const Filter = (): JSX.Element => {
  const [brand, setBrand] = useState<string[]>([]);
  const [model, setModel] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [mileage, setMileage] = useState<number>(0);
  const [maxMileage, setMaxMileage] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const { filteredAd, setFilteredAd, allAdvertisements } =
    useContext(AdvertisementContext);

  const { ShowFilterAside } = useContext(HomePageContext);

  const filterBrandAdvertisements = async (brand: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.brand.includes(brand)
    );

    setFilteredAd(filteredCars);
  };

  const filterModelAdvertisements = async (model: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.model.includes(model)
    );
    setFilteredAd(filteredCars);
  };

  const filterColorAdvertisements = async (color: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.color.includes(color)
    );
    setFilteredAd(filteredCars);
  };
  const filterYearAdvertisements = async (year: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.year.includes(year)
    );
    setFilteredAd(filteredCars);
  };

  const filterFuelAdvertisements = async (fuel: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.fuel.includes(fuel)
    );
    setFilteredAd(filteredCars);
  };

  const filterMileageMinAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setMileage(value);
    const filteredCars = allAdvertisements.filter((ad) => {
      if (maxMileage === 0) {
        return +ad.mileage >= +value;
      }
      if (mileage === 0) {
        return +ad.mileage >= +mileage;
      } else {
        return +ad.mileage >= +value && +ad.mileage <= +maxMileage;
      }
    });

    setFilteredAd(filteredCars);
  };

  const filterMileageMaxAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setMaxMileage(value);
    const filteredCars = allAdvertisements.filter((ad) => {
      if (mileage === 0) {
        return +ad.mileage <= +value;
      }
      if (maxMileage === 0) {
        return +ad.mileage >= +mileage;
      } else {
        return +ad.mileage >= +mileage && +ad.mileage <= +value;
      }
    });
    setFilteredAd(filteredCars);
  };

  const filterPriceMinAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setPrice(value);
    const filteredCars = allAdvertisements.filter((ad) => {
      if (maxPrice === 0) {
        return +ad.price >= +value;
      }
      if (price === 0) {
        return +ad.price >= +price;
      } else {
        return +ad.price >= +value && +ad.price <= +maxPrice;
      }
    });

    setFilteredAd(filteredCars);
  };
  const filterPriceMaxAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setMaxPrice(value);
    const filteredCars = allAdvertisements.filter((ad) => {
      if (price === 0) {
        return +ad.price <= +value;
      }
      if (maxPrice === 0) {
        return +ad.price >= +price;
      } else {
        return +ad.price >= +price && +ad.price <= +value;
      }
    });
    setFilteredAd(filteredCars);
  };
  useEffect(() => {
    const filterColor = new Set<string>();
    const filterBrand = new Set<string>();
    const filterModel = new Set<string>();
    const filterYears = new Set<string>();
    const filterFuel = new Set<string>();

    if (filteredAd?.length > 0) {
      filteredAd.forEach((ad) => {
        filterBrand.add(ad.brand);
        filterColor.add(ad.color);
        filterModel.add(ad.model);
        filterYears.add(ad.year);
        filterFuel.add(ad.fuel);
      });
    } else {
      allAdvertisements.forEach((ad) => {
        filterBrand.add(ad.brand);
        filterColor.add(ad.color);
        filterModel.add(ad.model);
        filterYears.add(ad.year);
        filterFuel.add(ad.fuel);
      });
    }

    setColors(Array.from(filterColor));
    setBrand(Array.from(filterBrand));
    setModel(Array.from(filterModel));
    setFuel(Array.from(filterFuel));
    setYears(Array.from(filterYears));
  }, [allAdvertisements, filteredAd]);

  const [isAllBrands, setIsAllBrands] = useState<boolean>(false);
  const [isAllModels, setIsAllModels] = useState<boolean>(false);
  const [isAllYears, setIsAllYears] = useState<boolean>(false);
  const [isAllColors, setIsAllColors] = useState<boolean>(false);

  const handleBrands = () => setIsAllBrands(!isAllBrands);  
  const handleModels = () => setIsAllModels(!isAllModels);
  const handleYears = () => setIsAllYears(!isAllYears);
  const handleColors = () => setIsAllColors(!isAllColors);

  return (
    <>
      <GlobalStyles />
      <StyledFilter>
        <FilterHeader>
          <h3>Filtro</h3>
          <button type="button" onClick={ShowFilterAside}>
            <MdClose />
          </button>
        </FilterHeader>
        <div>
          <h3 className="title3">Marca</h3>
          <button type="button" onClick={handleBrands}>
          {isAllBrands ? "Esconder" : "Ver todas"}
          </button>
          <ul className="filter-options">
            {brand.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterBrandAdvertisements(x);
                    if (brand.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x.charAt(0).toUpperCase() + x.slice(1)}
                </p>
              </li>
            ))}
          </ul>
          <ul className={isAllBrands ? "filter-slide sliderIn" : "filter-slide"}>
            {brand.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterBrandAdvertisements(x);
                    if (brand.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x.charAt(0).toUpperCase() + x.slice(1)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title3">Modelo</h3>
          <button type="button" onClick={handleModels}>
          {isAllModels ? "Esconder" : "Ver todos"}
          </button>
          <ul className="filter-options">
            {model.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterModelAdvertisements(x);
                    if (model.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
          <ul className={isAllModels ? "filter-slide sliderIn" : "filter-slide"}>
            {model.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterModelAdvertisements(x);
                    if (model.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title3">Cor</h3>
          <button type="button" onClick={handleColors}>
          {isAllColors ? "Esconder" : "Ver todos"}
          </button>
          <ul className="filter-options">
            {colors.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterColorAdvertisements(x);
                    if (colors.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
          <ul className={isAllColors ? "filter-slide sliderIn" : "filter-slide"}>
            {colors.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterColorAdvertisements(x);
                    if (colors.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title3">Ano</h3>
          <button type="button" onClick={handleYears}>
          {isAllYears ? "Esconder" : "Ver todos"}
          </button>
          <ul className="filter-options">
            {years.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterYearAdvertisements(x);
                    if (years.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
          <ul className={isAllYears ? "filter-slide sliderIn" : "filter-slide"}>
            {years.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterYearAdvertisements(x);
                    if (years.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title3">Combustível</h3>
          <ul className="filter-options">
            {fuel.map((x, i) => (
              <li key={i * Math.random()}>
                <p
                  className="paragraph"
                  onClick={() => {
                    filterFuelAdvertisements(x);
                    if (fuel.length === 1) {
                      setFilteredAd([]);
                      setFilteredAd(allAdvertisements);
                    }
                  }}
                >
                  {x}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="form-box">
          <h3 className="title3">Km</h3>
          <form className="filter-form">
            <input
              type="number"
              placeholder="Minimo"
              onChange={filterMileageMinAdvertisements}
            />
            <input
              type="number"
              placeholder="Máximo"
              onChange={filterMileageMaxAdvertisements}
            />
          </form>
        </div>
        <div className="form-box">
          <h3 className="title3">Preço</h3>
          <form className="filter-form">
            <input
              type="number"
              placeholder="Minimo"
              onChange={filterPriceMinAdvertisements}
            />
            <input
              type="number"
              placeholder="Máximo"
              onChange={filterPriceMaxAdvertisements}
            />
          </form>
        </div>
        <div className="button-filter-box">
          <button>Ver Anuncios</button>
        </div>
      </StyledFilter>
    </>
  );
};

export default Filter;
