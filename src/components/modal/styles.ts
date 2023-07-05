import styled from "styled-components";

export const DivBackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #808080ba;
  display: flex;
  justify-content: center;
  align-items: center;

  .divModalInfo {
    border-radius: 8px;
    box-shadow: 1pt 1pt 5pt black;
  }

  h2{
    padding: 10px;
  }
`;