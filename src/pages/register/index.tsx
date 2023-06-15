import { useContext, useEffect } from "react";
import Footer from "../../components/footer";
import FormRegister from "../../components/forms/formRegister";
import Header from "../../components/header";
import { ProductPageContext } from "../../contexts/productPage.context";
import { RegisterPageBase } from "./styles";

const RegisterPage = () => {

  const { ShowBanner } = useContext(ProductPageContext)

  useEffect(()=>{
    const condition = false
    ShowBanner(condition)
  },[])

  
  return (
    <RegisterPageBase>
      <Header />
      <main>
        <FormRegister />
      </main>
      <Footer />
    </RegisterPageBase>
  );

};

export default RegisterPage;
