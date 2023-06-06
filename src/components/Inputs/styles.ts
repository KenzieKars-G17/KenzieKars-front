import styled from "styled-components";

export const FieldSetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.6rem;
  padding: 0;
  max-width: 31.5rem;
  border: none;
  font-family: "Inter", sans-serif;

  label {
    font-size: 1.4rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 1.2rem 0.8rem;
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    border: 0.15rem solid var(--color-grey-8);
    border-radius: 0.4rem;
  }
  input:focus {
    border: 0.1rem solid var(--color-brand-2);
  }
`;
