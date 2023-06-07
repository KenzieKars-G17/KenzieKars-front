import React, { createContext, useState } from "react";

interface iHomePageProviderFunctions {
  showHamburgerMenu: boolean;
  ShowHamburgerMenu: () => void;

  showFilterAside: boolean;
  ShowFilterAside: () => void;

  currentWidth: number;
  updateWidth: () => void;

  showButtonFilter: boolean;

}

interface iHomePageProviderProps {
  children: React.ReactNode;
}

export const HomePageContext = createContext<iHomePageProviderFunctions>(
  {} as iHomePageProviderFunctions
);

export const HomePageProvider = ({ children }: iHomePageProviderProps) => {

  const [showFilterAside, setShowFilterAside] = useState<boolean>(false);
  const [showButtonFilter, setShowButtonFilter] = useState<boolean>(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  const ShowHamburgerMenu = (): void => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const ShowFilterAside = (): void => {
    setShowFilterAside(!showFilterAside);
  };

  const updateWidth = (): void => {
    setCurrentWidth(window.innerWidth);
    
    if(currentWidth >= 768) {
      setShowButtonFilter(false)
      setShowFilterAside(true)
    } else {
      setShowButtonFilter(true)
      setShowFilterAside(false)
    }

  };

  window.addEventListener('resize', updateWidth);

  return (
    <HomePageContext.Provider
      value={{
        showHamburgerMenu,
        showFilterAside,
        showButtonFilter,

        ShowFilterAside,
        ShowHamburgerMenu,
        
        currentWidth,
        updateWidth,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
