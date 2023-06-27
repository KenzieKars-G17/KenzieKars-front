import styled from "styled-components";
import closeButtonImage from "../../../assets/buttonX.svg";

export const ModalBody = styled.div`
  background-color: white;
  width: 95vw;
  height: 30vh;
  border-radius: 8px;
  padding: 15px;
  
  display: flex;
  flex-direction: column; 

  position: relative;
  top: 40px;

  button{
    cursor: pointer;
  }


  .divTitleAndCloseButton {
    display: flex;
    justify-content: space-between;
    align-items: center;


    h2 {
      font-size: 2rem;
      font-family: Lexend;
      font-weight: 500;
      padding: unset;
    }

    button {
      background-image: url(${closeButtonImage});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-color: unset;
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }
  }

  .divText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 10px;
    

    h3 {
      font-size: 1.6rem;
      font-family: Inter;
      line-height: 1.75rem;
    }

    p {
      width: fit-content;
      height: fit-content;
      color: var(--color-grey-2);
    }
  }

  .divButtons {
    display: flex;
    gap: 10px;
    align-self: flex-end;

    .buttonCancel {
      border-radius: 4px;
      border: 1.5px solid var(--color-grey-6);
      background: var(--color-grey-6);
      font-size: 1rem;
      font-family: Inter;
      font-weight: 600;
      line-height: 0rem;
      color: var(--color-grey-2);
    }

    .buttonConfirm {
      height: 3rem;
      padding: 0.75rem 1.75rem;

      border-radius: 4px;
      border: 1.5px solid var(--color-alert-2);
      background: var(--color-alert-2);
      font-size: 1rem;
      font-family: Inter;
      font-weight: 600;
      line-height: 0rem;
      color: var(--color-alert-1);
    }
  }

  @media (min-width: 768px) {
    width: 35vw;
    height: 40vh;
  }
`;
