import styled from "styled-components";

export const CommentsDiv = styled.div`
  background-color: white;
  width: 95vw;


  .UserDetails {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 0 20px;
    gap: 10px;
  }

  h2 {
    margin: 20px 0 20px 20px;
  }

  p {
    text-align: center;
    margin: 10px 20px 20px 20px;
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
  max-width: 680px;
  max-height: 557px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
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

  button{
    background-color: #4529E6;
    color: white;
    margin: 0 0 0 20px;
    border-radius: 4px;
  }

  ul{
    list-style: none;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    li{
     background-color: #E9ECEF;
     border-radius: 4px;
     color: #868E96;
     padding: 5px;
     margin: 20px 0 0 0;
    }

  }

  @media (min-width: 768px) {
    width: 50vw;
    margin-left: -350px;
  }

`;
