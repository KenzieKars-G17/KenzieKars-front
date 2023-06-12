import React from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLogoContainer,
  Hamburger,
  FazerLoginButton,
  CadastrarButton,
} from "./styles";
import LogoNav from "../../../assets/LogoNav.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLogoContainer>
              <img src={LogoNav} alt="Menu Logo" />
            </NavbarLogoContainer>
          </LeftContainer>
          <RightContainer>
            <FazerLoginButton>Fazer Login</FazerLoginButton>
            <CadastrarButton>Cadastrar</CadastrarButton>
            <Hamburger />
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
