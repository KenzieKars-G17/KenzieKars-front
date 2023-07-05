import React, { createContext, useState } from "react";
import {
  iBrand,
  iColor,
  iFuel,
  iModel,
  iYear,
} from "../interfaces/filter.interfaces";

interface iFilterProviderFunctions {

  brandSelected: iBrand | null;
  showAllBrands: boolean;
  selectBrand: (brand: iBrand) => void;

  modelSelected: iModel | null;
  showAllModels: boolean;
  selectModel: (model: iModel) => void;

  colorSelected: iColor | null;
  showAllColors: boolean;
  selectColor: (color: iColor) => void;

  yearSelected: iYear | null;
  showAllYears: boolean;
  selectYear: (year: iYear) => void;

  fuelSelected: iFuel | null;
  showAllFuels: boolean;
  selectFuel: (fuel: iFuel) => void;

  minKm: number | null;
  SetMinKm: (km: number) => void;

  maxKm: number | null;
  SetMaxKm: (km: number) => void;

  minPrice: number | null;
  SetMinPrice: (price: number) => void;

  maxPrice: number | null;
  SetMaxPrice: (price: number) => void;
}

interface iFilterProviderProps {
  children: React.ReactNode;
}

export const FilterContext = createContext<iFilterProviderFunctions>(
  {} as iFilterProviderFunctions
);

export const FilterProvider = ({ children }: iFilterProviderProps) => {

  const [showAllBrands, setShowAllBrands] = useState<boolean>(true);
  const [showAllModels, setShowAllModels] = useState<boolean>(true);
  const [showAllColors, setShowAllColors] = useState<boolean>(true);
  const [showAllYears, setShowAllYears] = useState<boolean>(true);
  const [showAllFuels, setShowAllFuels] = useState<boolean>(true);

  const [brandSelected, setBrandSelected] = useState<iBrand | null>(null);
  const [modelSelected, setModelSelected] = useState<iModel | null>(null);
  const [colorSelected, setColorSelected] = useState<iColor | null>(null);
  const [yearSelected, setYearSelected] = useState<iYear | null>(null);
  const [fuelSelected, setFuelSelected] = useState<iFuel | null>(null);

  const [minKm, setMinKm] = useState<number | null>(null);
  const [maxKm, setMaxKm] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const selectBrand = (brand: iBrand | null): void => {
    if (brand) {
      setShowAllBrands(false);
      setBrandSelected(brand);
    } else {
      setShowAllBrands(true);
      setBrandSelected(null);
    }
  };

  const selectModel = (model: iModel | null): void => {
    if (model) {
      setShowAllModels(false);
      setModelSelected(model);
    } else {
      setShowAllModels(true);
      setModelSelected(null);
    }
  };

  const selectColor = (color: iColor | null): void => {
    if (color) {
      setShowAllColors(false);
      setColorSelected(color);
    } else {
      setShowAllColors(true);
      setColorSelected(null);
    }
  };

  const selectYear = (year: iYear | null): void => {
    if (year) {
      setShowAllYears(false);
      setYearSelected(year);
    } else {
      setShowAllYears(true);
      setYearSelected(null);
    }
  };

  const selectFuel = (fuel: iFuel | null): void => {
    if (fuel) {
      setShowAllFuels(false);
      setFuelSelected(fuel);
    } else {
      setShowAllFuels(true);
      setFuelSelected(null);
    }
  };

  const SetMinKm = (km: number | null): void => {
    setMinKm(km);
  };

  const SetMaxKm = (km: number | null): void => {
    setMaxKm(km);
  };

  const SetMinPrice = (price: number | null): void => {
    setMinPrice(price);
  };

  const SetMaxPrice = (price: number | null): void => {
    setMaxPrice(price);
  };

  return (
    <FilterContext.Provider
      value={{

        showAllBrands,
        showAllColors,
        showAllFuels,
        showAllModels,
        showAllYears,

        selectBrand,
        selectModel,
        selectColor,
        selectYear,
        selectFuel,
        SetMinKm,
        SetMaxKm,
        SetMinPrice,
        SetMaxPrice,

        brandSelected,
        modelSelected,
        colorSelected,
        yearSelected,
        fuelSelected,
        minKm,
        maxKm,
        minPrice,
        maxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
