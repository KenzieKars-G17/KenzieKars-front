import styled from "styled-components";


export const ModalWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 81.6px;
  left: 0;
  background-color: #ffffff;
  border-top: var();
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 99;
  animation: modalFade .5s ease-in; 

  @media (min-width: 768px) {
  }

  @keyframes modalFade {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

