import React, { createContext, useState } from "react";

interface iProductPageProviderFunctions {
  showBannerPicture: boolean;
  ShowBannerPicture: (condition: boolean) => void;
}

interface iProductPageProviderProps {
  children: React.ReactNode;
}

export const ProductPageContext = createContext<iProductPageProviderFunctions>(
  {} as iProductPageProviderFunctions
);

export const ProductPageProvider = ({ children }: iProductPageProviderProps) => {

  const [ showBannerPicture, setShowBannerPicture ] = useState<boolean>(false);


  const ShowBannerPicture = (condition: boolean): void => {
    setShowBannerPicture(condition);
  };

  return (
    <ProductPageContext.Provider
      value={{
        showBannerPicture,
        ShowBannerPicture
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
