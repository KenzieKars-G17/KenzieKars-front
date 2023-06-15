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
`;
