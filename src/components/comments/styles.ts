import styled from "styled-components";

export const CommentsDiv = styled.div`
  background-color: white;
  width: 95vw;

  .UserDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0 0 0 20px;
      gap: 10px;
    }
  }
  .buttonsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 10px;
    gap: 15px;
    justify-self: flex-end;
    svg {
      cursor: pointer;
    }
  }
  h2 {
    margin: 20px 0 20px 20px;
  }

  p {
    margin: 10px 20px 20px 20px;
  }
  .editInput {
    text-align: center;
    margin: 10px 20px 20px 20px;
    padding: 5px;
    width: 80%;
    border: 1pt solid #4529e6;
    border-radius: 8px;
    text-indent: 5px;
  }

  button {
    background-color: #4529e6;
    color: white;
    margin: 0 0 0 20px;
    border-radius: 4px;
  }

  h3 {
    font-size: 12pt;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 75px;
  }

  form {
    background-color: white;
    width: 95vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
    margin-left: -350px;
  }
`;

export const CommentsForm = styled.form`
  background-color: white;
  width: 95vw;

  .UserDetailsForm {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin: 20px 0 0 0;

    img {
      margin: 0 0 0 20px;
      width: 35px;
      height: 35px;
      border-radius: 75px;
    }
  }

  textarea {
    width: 85%;
    height: 150px;
    margin: 20px;
    border: 1pt solid lightgray;
    border-radius: 8px;
    padding: 5px;
    font-family: Arial, sans-serif;
    resize: vertical;
  }

  textarea::placeholder {
    text-indent: 5px;
    font-size: 12pt;
  }

  button {
    background-color: #4529e6;
    color: white;
    margin: 0 0 0 20px;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    padding: 10px 0px 20px 20px;

    li {
      background-color: #e9ecef;
      border-radius: 4px;
      color: #868e96;
      padding: 5px;
      margin: 20px 0 0 0;
    }
  }

  @media (min-width: 768px) {
    width: 50vw;
    margin-left: -350px;
  }
`;
