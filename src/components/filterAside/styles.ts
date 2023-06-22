import styled from "styled-components";

export const StyledFilter = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem 1.6rem;
  width: 100%;
  min-width: 34.3rem;
  height: 100%;

  background-color: transparent;

  @media (min-width: 768px) {
    width: 28%;
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    > button {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      outline: none;      
    }
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    max-height: 13rem;
    overflow: hidden;
    padding: 0 0 0 0.8rem;
    margin-block: 2rem;
  }

  .filter-slide {
    position: absolute;
    top: 2rem;
    right: -100%;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 0.8rem;
    margin-block: 2rem;
    background-color: var(--color-grey-10);
    z-index: 0;
    opacity: 0;
    border: 1px solid var(--color-grey-4);
    animation: slide-div 0.3s ease;
  }

  .sliderIn {
    display: flex;
    right: 0;
    z-index: 100;
    opacity: 1;
  }

  @keyframes slide-div {
    0% {
      opacity: 0;
      transform: translateX(100%);

    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .title3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 3.2rem;

    margin: 0;
    padding: 0;

    color: #000000;
  }

  .paragraph {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;

    margin: 0;
    padding: 0;
    cursor: pointer;

    color: var(--color-grey-3);
  }

  .form-box {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 13rem;
  }

  .filter-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 100%;
    height: 10rem;
    max-height: 130rem;
    padding: 0 0.4rem;
  }

  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 45%;
    height: 3.7rem;
    background-color: #ced4da;
    outline: #868e96;
    border: none;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #868e96;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:hover,
    :focus {
      border: 0.2rem solid #4529e6;
    }
  }

  .button-filter-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    padding: 3.2rem;

    > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.2rem 2.8rem;
      width: 100%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 1;

      color: var(--color-white);

      background: var(--color-brand-2);
      border: 1.5px solid var(--color-brand-2);
      border-radius: 0.4rem;
    }
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0.4rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #868e96;
  }
  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #adb5bd;
    }
  }
`;

export const FilterHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  @media (min-width: 768px) {
    display: none;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    font-size: 3.5rem;
    line-height: 1;
    color: var(--color-grey-4);

    border-radius: 50%;
  }

  > h3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;

    color: var(--color-grey-1);
  }
`;
