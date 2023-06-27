import styled from "styled-components";
import closeButtonImage from "../../../assets/buttonX.svg";

export const FormUpdateAd = styled.form`
  background-color: white;
  width: 95vw;
  height: 80vh;
  position: relative;
  top: 40px;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 2px;

  button{
    cursor: pointer;
  }

  .divButtonsType{
            padding: 10px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
  }

  .divTitleAndCloseButton {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

  h2 {
    font-size: 2rem;
    font-family: Lexend;
  }

  h3 {
    margin: 0 0 0 10px;
    align-self: flex-start;
    font-size: 1.5rem;
  }

  .divInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    fieldset {
      max-width: 100%;
      gap: 5px;
    }

    label {
      font-size: 12pt;
      margin: 20px 0 0 10px;
    }

    input::placeholder {
      font-size: 10pt;
      color: var(--color-grey-3);
    }

    input {
      margin: 0 0 0 10px;
      width: 88%;
      border: 1pt solid var(--color-grey-3);
      height: 35px;
      font-size: 15px;
    }
  }

  .divTwoInputs {
    display: flex;

    input {
      width: 75%;
    }
  }

  .buttonAddField {
    background-color: var(--color-brand-4);
    margin: 20px 0;
    width: 95%;
    color: var(--color-brand-1);
    font-size: 10pt;
    font-weight: bold;
  }

  .divButtonDeleteAndSubmit {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    font-weight: bold;
    width: 100%;
    gap: 10px;

    .buttonDeleteAd {
      border-radius: 4px;
      background-color: var(--color-grey-6);
      color: var(--color-grey-2);
      min-width: 16px;
    }

    .buttonSubmit {
      border-radius: 4px;
      border: 1.5px solid var(--color-brand-3);
      background-color: var(--color-brand-3);
      color: var(--color-brand-4); 
      min-width: 16px;
    }

    .buttonSubmit:hover{
      background-color: var(--color-brand-1);
    }
  }

  @media (min-width: 768px) {
    width: 30vw;
  }
`;
