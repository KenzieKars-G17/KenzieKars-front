import styled from "styled-components";

export const FieldSetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.8rem;
  width: 100%;
  border: none;
  font-family: "Inter", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  label {
    font-size: 1.4rem;
    font-weight: 600;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 1.6rem;
    gap: 1rem;
    width: 100%;
    height: 4.8rem;

    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    border: 0.15rem solid var(--color-grey-8);
    border-radius: 0.4rem;
    transition: 0.3s ease-in;

    margin: 0;
    box-sizing: border-box;
  }
  input:focus,
  input:hover {
    border: 0.15rem solid var(--color-brand-2);
  }

  input[type="file"] {
    padding: 5px 5px 5px 15px;
    color: var(--color-grey-3);
  }

  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #084cdf;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    display: none;
    text-align: center;
  }

  input[type="file"]::file-selector-button:hover {
    background: #0d45a5;
  }
`;
