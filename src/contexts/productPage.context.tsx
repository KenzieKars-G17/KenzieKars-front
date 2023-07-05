import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface iProductPageProviderFunctions {
  showBannerPicture: boolean;
  showBanner: boolean;
  ShowBannerPicture: (condition: boolean) => void;
  ShowBanner: (condition: boolean) => void;
  brands: any;
  setBrands: Dispatch<SetStateAction<any>>;
}

interface iProductPageProviderProps {
  children: React.ReactNode;
}

export const ProductPageContext = createContext<iProductPageProviderFunctions>(
  {} as iProductPageProviderFunctions
);

export const ProductPageProvider = ({
  children,
}: iProductPageProviderProps) => {
  const [showBannerPicture, setShowBannerPicture] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [brands, setBrands] = useState();

  const ShowBannerPicture = (condition: boolean): void => {
    setShowBannerPicture(condition);
  };

  const ShowBanner = (condition: boolean): void => {
    setShowBanner(condition);
  };

  return (
    <ProductPageContext.Provider
      value={{
        showBannerPicture,
        ShowBannerPicture,
        showBanner,
        ShowBanner,
        brands,
        setBrands,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
