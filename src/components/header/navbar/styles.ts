import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const NavbarContainer = styled.nav`
  /* position: relative; */
  width: 100%;
  height: 80px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-color: #dee2e6;
  background-color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
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
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
    display: none;
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
  background-color: salmon;
  background-color: #fdfdfd;
  @media screen and (max-width: 768px) {
    border-style: none;
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

export const Hamburger = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 18px;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 30%);
  }
`;

export const NavbarExtendedContainer = styled.div``;
