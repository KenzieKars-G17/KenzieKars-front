import styled from "styled-components";

export const StyledRegister = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.2rem 1.6rem;
  width: 100vw;
  max-width: 100vw;
  background-color: var(--color-grey-8);

  button {
    cursor: pointer;
  }

  .divTypeAccount {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: space-between;
    gap: 5px;

    label {
      font-weight: bold;
    }

    .divButtonsType {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    button {
      width: 45%;
      border: 1pt solid lightgray;
      text-align: center;
    }
  }

  .divTwoInputs {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  .tittle-box {
    width: 100%;
  }

  @media (min-width: 700px) {
    padding: 2rem 1.6rem;
  }

  .register-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    width: 100%;
    max-width: 412px;
    background: var(--color-grey-10);
    border-radius: 0.4rem;
    overflow-x: hidden;
    padding: 2.4rem;
  }

  .register-title {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--color-grey-0);
    margin-bottom: 2.4rem;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .inputs-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 2.4rem;
    gap: 15px;

    h2 {
      font-weight: bold;
      font-size: 10pt;
    }
  }

  .alert-span {
    font-size: 1.2rem;
    line-height: 1;
    color: var(--color-alert-1);
    margin-top: -4px;
  }

  .inputs-cont > a {
    align-self: flex-end;
    margin-right: 1.6rem;
    text-decoration: none;
  }

  .inputs-cont > a > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-grey-2);
  }

  .inputs-cont > a > span:hover {
    text-decoration: underline;
    color: var(--color-brand-2);
  }

  .bttn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 2.8rem;
    gap: 1rem;
    width: 100%;
    height: 4.8rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 0;
    outline: none;
    border-radius: 0.4rem;
    transition: 0.3s ease;
  }

  .bttn-brand {
    color: var(--color-white);
    background: var(--color-brand-1);
    border: 0.15rem solid var(--color-brand-1);
  }

  .bttn-brand:hover {
    background: var(--color-random-12);
    border: 0.15rem solid var(--color-random-12);
  }

  .bttn-gray {
    color: var(--color-grey-0);
    background: var(--color-grey-10);
    border: 0.15rem solid var(--color-grey-4);
  }

  .bttn-gray:hover {
    background: var(--color-grey-0);
    color: var(--color-white);
  }

  .buttons-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .buttons-cont > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-grey-2);
  }
`;
