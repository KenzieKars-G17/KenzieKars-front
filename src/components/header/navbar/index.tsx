import React, { useContext, useEffect, useState } from "react";

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
import { AuthContext } from "../../../contexts/auth.context";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  const updateWidth = (): void => {
    setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
  };

  useEffect(() => {
    updateWidth();
  }, []);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLogoContainer>
              <img
                src={LogoNav}
                alt="Menu Logo"
                onClick={() => {
                  navigate("/");
                }}
              />
            </NavbarLogoContainer>
          </LeftContainer>
          <RightContainer>
            {user && currentWidth >= 768 ? (
              <div className="profileInfo">
                <div className="headerUserImg"></div>
                <h2 className="headerUserName">{user.name}</h2>
              </div>
            ) : (
              <FazerLoginButton
                onClick={() => {
                  navigate("/login");
                }}
              >
                Fazer Login
              </FazerLoginButton>
            )}
            {!user && (
              <CadastrarButton
                onClick={() => {
                  navigate("/register");
                }}
              >
                Cadastrar
              </CadastrarButton>
            )}
            <Hamburger />
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
