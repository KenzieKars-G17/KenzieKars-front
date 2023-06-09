import { useEffect, useState } from "react";
import StyledFilter from "./styles";
import api2 from "../../services/api2";
import { iData } from "./types";

const Filter = (): JSX.Element => {
  const [dataKeys, setDataKeys] = useState<iData>();
  const [years] = useState([2022, 2021, 2018, 2015, 2013, 2012, 2010]);
  const [fuel] = useState(["Diesel", "Etanol", "Gasolina", "Flex"]);
  const [colors] = useState([
    "Azul",
    "Branca",
    "Cinza",
    "Prata",
    "Preta",
    "Verde",
  ]);

  useEffect(() => {
    (async () => {
      const resp = await api2.get<iData>("cars");
      setDataKeys(resp.data); 
    })();
  }, []);

  return (
    <StyledFilter>
      <div>
        <h3 className="title3">Marca</h3>
        <ul className="filter-options">
          {dataKeys &&
            Object.keys(dataKeys).map((x, i) => (
              <li key={i * Math.random()}>
                <p className="paragraph">
                  {x.charAt(0).toUpperCase() + x.slice(1)}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Modelo</h3>
        <ul className="filter-options">
          {dataKeys &&
            Object.values(dataKeys).map((x, i) => (
              <li key={i * Math.random()}>
                <p className="paragraph">
                  {x[0].name.split(" ")[0].charAt(0).toUpperCase() +
                    x[0].name.split(" ")[0].slice(1)}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Cor</h3>
        <ul className="filter-options">
          {colors &&
            Object.values(colors).map((x, i) => (
              <li key={i * Math.random()}>
                <p className="paragraph">{x}</p>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Ano</h3>
        <ul className="filter-options">
          {years &&
            Object.values(years).map((x, i) => (
              <li key={i * Math.random()}>
                <p className="paragraph">{x}</p>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="title3">Combustível</h3>
        <ul className="filter-options">
          {fuel &&
            Object.values(fuel).map((x, i) => (
              <li key={i * Math.random()}>
                <p className="paragraph">{x}</p>
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
