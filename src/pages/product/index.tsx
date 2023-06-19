import Footer from "../../components/footer";
import Header from "../../components/header";
import { ProductPageBase } from "./styles";
import IndividualProduct from "../../components/individualProduct";
import UserDetails from "../../components/userDetails";
import Comments from "../../components/comments";
import { useContext, useEffect } from "react";
import { ProductPageContext } from "../../contexts/productPage.context";


const ProductPage = () => {

  const { ShowBannerPicture, ShowBanner } = useContext(ProductPageContext);

  useEffect(() => {
    const condition = false
    ShowBannerPicture(condition)
    ShowBanner(!condition)
  }, [])

  return (
    <ProductPageBase>

      <Header />

      <main>

        <IndividualProduct />
        <section className="pictures">
          <h2>Fotos</h2>
          <ul>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>
            <li>
              <img src="https://s2.glbimg.com/dXOjXVKuSt3tSTpjY9huNuBJX9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg" />
            </li>

          </ul>
        </section>
        <UserDetails />
        <div className="divComments">
          <Comments />
        </div>

      </main>

      <Footer />
    </ProductPageBase>
  );
};

export default ProductPage;
