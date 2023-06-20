import styled from "styled-components";

export const LoadStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 22, 0.9);

  .loader-bar {
    height: 2.5rem;
    width: 0.6rem;
    margin: 0 0.3rem;
    border-radius: 2rem;
    animation: loader 2s ease-in-out infinite;
  }
  .bar-1 {
    background: linear-gradient(to right, #00e6e6, #00ccff, #0099ff, #0066ff);
    animation-delay: 0s;
    box-shadow: 0px 0px 15px 3px #00e6e6;
  }

  .bar-2 {
    background: linear-gradient(to right, #00ccff, #0099ff, #0066ff, #00e6e6);
    animation-delay: 0.1s;
    box-shadow: 0px 0px 15px 3px #00ccff;
  }

  .bar-3 {
    background: linear-gradient(to right, #0099ff, #0066ff, #00e6e6, #00ccff);
    animation-delay: 0.2s;
    box-shadow: 0px 0px 15px 3px #0099ff;
  }

  .bar-4 {
    background: linear-gradient(to right, #0066ff, #00e6e6, #00ccff, #0099ff);
    animation-delay: 0.3s;
    box-shadow: 0px 0px 15px 3px #0066ff;
  }

  @keyframes loader {
    0% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(2);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;
