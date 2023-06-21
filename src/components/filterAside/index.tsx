import { useEffect, useState, useContext } from "react";
import { AdvertisementContext } from "../../contexts/advertisements.context";
import StyledFilter from "./styles";
import api2 from "../../services/api2";
import { iData } from "./types";

const Filter = (): JSX.Element => {
  const [brand, setBrand] = useState<string[]>([]);
  const [model, setModel] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [mileage, setMileage] = useState<string>("");
  const [maxMileage, setMaxMileage] = useState<string>("");
  const [price, setPrice] = useState<string[]>([]);
  const { filteredAd, setFilteredAd, allAdvertisements } =
    useContext(AdvertisementContext);

  const filterBrandAdvertisements = async (brand: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.brand.includes(brand)
    );

    setFilteredAd(filteredCars);

    console.log(filteredCars.length);
  };

  const filterModelAdvertisements = async (model: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.model.includes(model)
    );
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };

  const filterColorAdvertisements = async (color: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.color.includes(color)
    );
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };
  const filterYearAdvertisements = async (year: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.year.includes(year)
    );
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };

  const filterFuelAdvertisements = async (fuel: string) => {
    const filteredCars = allAdvertisements.filter((ad) =>
      ad.fuel.includes(fuel)
    );
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };

  const filterMileageMinAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMileage(e.target.value);
    const filteredCars = allAdvertisements.filter(
      (ad) => +ad.mileage > +mileage
    );
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };
  const filterMileageMaxAdvertisements = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxMileage(e.target.value);
    const filteredCars = allAdvertisements.filter((ad) => {
      +ad.mileage < +mileage;
      console.log(ad);
    });
    setFilteredAd(filteredCars);
    console.log(filteredCars);
  };

  useEffect(() => {
    const filterColor = new Set<string>();
    const filterBrand = new Set<string>();
    const filterModel = new Set<string>();
    const filterYears = new Set<string>();
    const filterFuel = new Set<string>();
    const filterMileage = new Set<string>();
    const filterPrice = new Set<string>();
    if (filteredAd?.length > 0) {
      filteredAd.forEach((ad) => {
        filterBrand.add(ad.brand);
        filterColor.add(ad.color);
        filterModel.add(ad.model);
        filterYears.add(ad.year);
        filterFuel.add(ad.fuel);
        filterMileage.add(ad.mileage);
        filterPrice.add(ad.price + "");
      });
    } else {
      allAdvertisements.forEach((ad) => {
        filterBrand.add(ad.brand);
        filterColor.add(ad.color);
        filterModel.add(ad.model);
        filterYears.add(ad.year);
        filterFuel.add(ad.fuel);
        filterMileage.add(ad.mileage);
        filterPrice.add(ad.price + "");
      });
    }

    setColors(Array.from(filterColor));
    setBrand(Array.from(filterBrand));
    setModel(Array.from(filterModel));
    setFuel(Array.from(filterFuel));
    setYears(Array.from(filterYears));
    // setMileage(Array.from(filterMileage));
    setPrice(Array.from(filterPrice));
  }, [allAdvertisements, filteredAd]);

  return (
    <StyledFilter>
      <div>
        <h3 className="title3">Marca</h3>
        <ul className="filter-options">
          {brand.map((x, i) => (
            <li key={i * Math.random()}>
              <p
                className="paragraph"
                onClick={() => filterBrandAdvertisements(x)}
              >
                {x.charAt(0).toUpperCase() + x.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Modelo</h3>
        <ul className="filter-options">
          {model.map((x, i) => (
            <li key={i * Math.random()}>
              <p
                className="paragraph"
                onClick={() => filterModelAdvertisements(x)}
              >
                {x}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Cor</h3>
        <ul className="filter-options">
          {colors.map((x, i) => (
            <li key={i * Math.random()}>
              <p
                className="paragraph"
                onClick={() => filterColorAdvertisements(x)}
              >
                {x}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Ano</h3>
        <ul className="filter-options">
          {years.map((x, i) => (
            <li key={i * Math.random()}>
              <p
                className="paragraph"
                onClick={() => filterYearAdvertisements(x)}
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
                onClick={() => filterFuelAdvertisements(x)}
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
          <input type="number" placeholder="Minimo" />
          <input type="number" placeholder="Máximo" />
        </form>
      </div>
      <div className="form-box">
        <h3 className="title3">Preço</h3>
        <form className="filter-form">
          <input type="number" placeholder="Minimo" />
          <input type="number" placeholder="Máximo" />
        </form>
      </div>
    </StyledFilter>
  );
};

export default Filter;
