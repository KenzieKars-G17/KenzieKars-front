import { useContext } from "react";
import Banner from "../banner";
import Navbar from "./navbar";
import { ProductPageContext } from "../../contexts/productPage.context";

const Header = () => {
  const { showBanner } = useContext(ProductPageContext);
  return (
    <header id="header">
      <Navbar></Navbar>
      {showBanner && <Banner />}
    </header>
  );
};

export default Header;
