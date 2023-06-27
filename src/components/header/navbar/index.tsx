import React, {
  useContext,
  useEffect,
  useState,
  MouseEventHandler,
} from "react";

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
  const { user, logout, SetShowFormEditUserInfo, SetShowFormEditUserAddress  } = useContext(AuthContext);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  const updateWidth = (): void => {
    setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
  };

  useEffect(() => {
    updateWidth();
  }, []);

  const [isOpen, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

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
          <RightContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {user && currentWidth >= 768 && (
              <>
                <div className="profileInfo">
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
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`toggle-menu-profile ${isOpen && "profile-visible"}`}
          >
            <h3 onClick={SetShowFormEditUserInfo}>Editar Perfil</h3>
            <h3 onClick={SetShowFormEditUserAddress}>Editar Endereço</h3>
            <h3 onClick={() => navigate(`/user/${user.id}`)}>Meus Anúncios</h3>
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
            <FazerLoginButton onClick={SetShowFormEditUserAddress}>
              Editar Endereço
            </FazerLoginButton>
            <FazerLoginButton
              onClick={() => {
                navigate(`/user/${user.id}`);
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
