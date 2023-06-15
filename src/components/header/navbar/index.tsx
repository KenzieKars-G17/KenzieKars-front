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
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLogoContainer>
              <img src={LogoNav} alt="Menu Logo" onClick={()=>{
              navigate("/")
            }}/>
            </NavbarLogoContainer>
          </LeftContainer>
          <RightContainer>
            <FazerLoginButton onClick={()=>{
              navigate("/login")
            }}>Fazer Login</FazerLoginButton>
            <CadastrarButton onClick={()=>{
              navigate("/register")
            }}>Cadastrar</CadastrarButton>
            <Hamburger />
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
