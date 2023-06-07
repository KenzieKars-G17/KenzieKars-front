import React from "react";
import LogoFooter from "../../assets/LogoFooter.png";
import ToTopArrow from "../../assets/ToTopArrow.png";
import {
  FooterContainer,
  FooterInnerContainer,
  FooterLogoContainer,
  TradeMark,
  ToTopButton,
} from "./styles";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterLogoContainer>
            <img src={LogoFooter} alt="Footer Logo" />
          </FooterLogoContainer>
          <TradeMark>© 2022 - Todos os direitos reservados.</TradeMark>
          <ToTopButton>
            <img src={ToTopArrow} alt="Scroll to top" />
          </ToTopButton>
        </FooterInnerContainer>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
