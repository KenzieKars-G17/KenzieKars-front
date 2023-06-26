import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: relative;
  width: 100%;
  min-height: 80px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-color: #dee2e6;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .toggle-menu-mobile {
    opacity: 0;
    height: 0;
    width: 100%;
    overflow: hidden;
    transition: opacity 2s ease, height 2s ease;
  }

  .mobile-visible {
    opacity: 1;
    height: auto;
    padding: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
    background: #ffffff;
  }
  .toggle-menu-profile {
    display: none;
  }
  .profile-visible {
    position: fixed;
    min-width: 200px;
    height: auto;
    top: 65px;
    right: 17px;
    /* transform: translate(-50%); */
    z-index: 1;
    background: #f8f9fa;
    box-shadow: 0px 4px 40px -10px #00000040;
    padding: 1%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .profile-visible > h3 {
    color: #495057;
    font-family: "inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const FazerLoginButton = styled.button`
  min-width: 133px;
  height: 48px;
  background-color: transparent;
  border: none;
  font-family: "inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #4529e6;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: fit-content;
    padding: 0;
  }
`;

export const CadastrarButton = styled.button`
  width: 133px;
  height: 48px;
  border-radius: 4px;
  background-color: transparent;
  border-style: solid;
  border-width: 1.5px;
  border-color: #adb5bd;
  font-family: "inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #0b0d0d;
  text-decoration: none;
  outline: none;

  &:hover {
    background-color: #0b0d0d;
    color: #fdfdfd;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: #fdfdfd;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10%;
  border-left-style: solid;
  border-left-width: 2px;
  border-color: #dee2e6;
  padding-right: 3%;
  padding-left: 3%;
  background-color: #fdfdfd;
  @media screen and (max-width: 768px) {
    border-left-style: none;
  }

  .profileInfo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .profileInfo:hover {
    cursor: pointer;
  }

  .headerUserName {
    font-family: "inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .headerUserImg {
    width: 32px;
    height: 32px;
    background: #5126ea;
    border-radius: 150px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

// export const NavbarLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1.2rem;
//   height: 100%;
//   &.active {
//     color: #000000;
//   }
// `;

export const NavbarExtendedContainer = styled.div``;
