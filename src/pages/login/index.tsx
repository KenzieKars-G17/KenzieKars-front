import { useContext, useEffect } from "react";
import Footer from "../../components/footer";
import FormLogin from "../../components/forms/formLogin";
import Header from "../../components/header";
import { HomePageContext } from "../../contexts/homepage.context";
import { ProductPageContext } from "../../contexts/productPage.context";
import { LoginPageBase } from "./styles";

const LoginPage = () => {

  const { ShowBanner } = useContext(ProductPageContext)

  useEffect(()=>{
    const condition = false
    ShowBanner(condition)
  },[])

  
  return (
    <LoginPageBase>
      <Header />
      <main>
        <FormLogin />
      </main>
      <Footer />
    </LoginPageBase>
  );

};

export default LoginPage;
