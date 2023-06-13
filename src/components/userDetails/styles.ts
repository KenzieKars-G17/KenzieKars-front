import styled from "styled-components";

export const UserDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 95vw;
  border-radius: 8px;
  gap: 20px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 75%;
    margin: 40px 0 0 0;
  }

  h2 {
    margin: 0;
  }

  p {
    text-align: center;
    margin: 0 15px 0 15px;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 8px;
    margin: 0 0 20px 0;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 448px;
    width: 25vw;
    right: 143px;
  }
`;
