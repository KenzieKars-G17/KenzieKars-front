import styled from "styled-components";

const StyledFilter = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 10px 16px;
  width: 32vw;
  max-width: 32vw;
  height: 100%;
  max-height: 100vh;
  background-color: transparent;
  overflow-y: auto;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 300px;
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 130px;
    overflow: auto;
    padding: 0 0 0 8px;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 4px;
    }
    /* ::-webkit-scrollbar-thumb:hover {
      background: #868e96;
    } */
    &:hover {
      ::-webkit-scrollbar-thumb {
        background: #adb5bd;
      }
    }
  }

  .title3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;

    margin: 0;
    padding: 0;

    color: #000000;
  }

  .paragraph {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    margin: 0;
    padding: 0;
    cursor: pointer;

    color: var(--color-grey-3);
  }

  .form-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 130px;
  }

  .filter-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 100%;
    height: 100px;
    max-height: 130px;
    padding: 0 0 0 4px;
  }

  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 127px;
    height: 37px;
    background-color: #ced4da;
    outline: #868e96;
    border: none;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #868e96;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:hover,
    :focus {
      border: 2px solid #4529e6;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
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

export default StyledFilter;
