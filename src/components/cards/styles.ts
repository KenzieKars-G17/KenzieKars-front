import styled from "styled-components";

export const UlCards = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  max-width: 100%;
  height: 375px;
  justify-content: flex-start;

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    flex-shrink: 0;
    width: 200px;
  }

  img {
    width: 100%;
  }

  .km,
  .year {
    background-color: #edeafd;
    color: #4529e6;
    padding: 5px;
    font-size: 10pt;
    font-weight: bold;
  }

  .price {
    font-weight: bold;
  }

  .productDetailsPreview {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-items: center;
  }

  .profilePic {
    width: 25px;
    height: 25px;
    border-radius: 75%;
  }

  h2 {
    text-align: center;
  }

  p {
    max-width: 100%;
    text-align: center;
  }

  .announcerDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .userName {
    margin: 0 0 0 5px;
    font-size: 12pt;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: 100%;
    gap: 50px;

    li{
        height: 10%;
    }
  }
`;
