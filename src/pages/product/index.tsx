import Footer from "../../components/footer";
import Header from "../../components/header";
import { ProductPageBase } from "./styles";
import IndividualProduct from "../../components/individualProduct";
import UserDetails from "../../components/userDetails";
import Comments from "../../components/comments";
import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";


const ProductPage = () => {

  const { ShowBannerPicture } = useContext(ProductPageContext);

  useEffect(() => {
    const condition = false
    ShowBannerPicture(condition)
  }, [])

  return (
    <ProductPageBase>

      <Header />

      <main>
        
        <IndividualProduct/>
        <UserDetails/>
        <Comments/>

      </main>

      <Footer />
    </ProductPageBase>
  );
};

export default ProductPage;
