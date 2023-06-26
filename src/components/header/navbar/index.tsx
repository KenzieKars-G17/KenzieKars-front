import React, { useContext, useEffect, useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLogoContainer,
  FazerLoginButton,
  CadastrarButton,
} from "./styles";
import LogoNav from "../../../assets/LogoNav.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth.context";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const { user, logout, SetShowFormEditUserInfo } = useContext(AuthContext);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  const updateWidth = (): void => {
    setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
  };

  useEffect(() => {
    updateWidth();
  }, []);

  const [isOpen, setOpen] = useState(false);

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
            {user && currentWidth >= 768 && (
              <>
                <div
                  className="profileInfo"
                  onClick={() => {
                    isOpen ? setOpen(false) : setOpen(true);
                  }}
                >
                  <div className="headerUserImg"></div>
                  <h2 className="headerUserName">{user.name}</h2>
                </div>
              </>
            )}
            {!user && currentWidth >= 768 && (
              <FazerLoginButton
                onClick={() => {
                  navigate("/login");
                }}
              >
                Fazer Login
              </FazerLoginButton>
            )}
            {!user && currentWidth >= 768 && (
              <CadastrarButton
                onClick={() => {
                  navigate("/register");
                }}
              >
                Cadastrar
              </CadastrarButton>
            )}
            {currentWidth <= 768 && (
              <Hamburger toggled={isOpen} toggle={setOpen} />
            )}
          </RightContainer>
        </NavbarInnerContainer>
        {user && currentWidth >= 768 && (
          <div className={`toggle-menu-profile ${isOpen && "profile-visible"}`}>
            <h3 onClick={SetShowFormEditUserInfo}>Editar Perfil</h3>
            <h3>Editar Endereço</h3>
            <h3 onClick={() => navigate("/user")}>Meus Anúncios</h3>
            <h3 onClick={logout}>Sair</h3>
          </div>
        )}
        {!user && isOpen && currentWidth <= 768 && (
          <div className={`toggle-menu-mobile ${isOpen && "mobile-visible"}`}>
            <FazerLoginButton
              onClick={() => {
                navigate("/login");
              }}
            >
              Fazer Login
            </FazerLoginButton>
            <CadastrarButton
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastrar
            </CadastrarButton>
          </div>
        )}
        {user && isOpen && currentWidth <= 768 && (
          <div className={`toggle-menu-mobile ${isOpen && "mobile-visible"}`}>
            <FazerLoginButton onClick={SetShowFormEditUserInfo}>
              Editar Perfil
            </FazerLoginButton>
            <FazerLoginButton onClick={() => console.log("abrir modal")}>
              Editar Endereço
            </FazerLoginButton>
            <FazerLoginButton
              onClick={() => {
                navigate("/user");
              }}
            >
              Meus Anúncios
            </FazerLoginButton>
            <FazerLoginButton onClick={logout}>Sair</FazerLoginButton>
          </div>
        )}
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
