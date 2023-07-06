import styled from "styled-components";

export const UserCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 70%;
  height: 406px;
  border-radius: 8px;
  gap: 20px;
  padding-left: 3.3%;
  padding-right: 3.3%;
  padding-top: 44px;

  .divButtons {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 768px) {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }

    button {
      cursor: pointer;
      transition: 0.3s;

      :hover {
        background-color: #4529e6;
        transition: 0.3s;
        color: white;
      }
    }
  }

  img {
    height: 104px;
    width: 104px;
    border-radius: 75%;
  }

  h3 {
    margin: 0;
    height: auto;
    padding-top: 8px;
    font-family: "inter", sans-serif;
    font-style: normal;
    font-size: 20px;
    text-align: center;
  }

  p {
    font-family: "inter", sans-serif;
    font-style: normal;
  }

  button {
    background-color: white;
    color: #4529e6;
    width: 150px;
    border-radius: 8px;
    border-style: solid;
    border-color: #4529e6;
    text-decoration: none;
    font-family: "inter", sans-serif;
    font-style: normal;
    font-size: 16px;
    &:hover {
      background-color: #edeafd;
    }
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 46%;
    width: 87%;
    right: 143px;
  }
`;

export const NameAndCategoryDiv = styled.div`
  height: 40px;
  display: flex;
  gap: 12px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-family: "inter", sans-serif;
  font-style: normal;
  color: #4529e6;
  background-color: #edeafd;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
`;
