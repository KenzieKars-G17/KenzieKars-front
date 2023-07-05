import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: #0b0d0d;
`;

export const FooterInnerContainer = styled.div`
  /* flex: 70%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  height: 140px;
  display: flex;
  @media screen and (max-width: 768px) {
    height: 310px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
`;

export const TradeMark = styled.span`
  color: white;
`;

export const ToTopButton = styled.button`
  border: none;
  margin: 0;
  box-sizing: border-box;
  width: auto;
  overflow: visible;
  background: transparent;
  padding: 0%;
  outline: none;

  &:focus {
    outline: none;
  }
`;
