import styled from "styled-components";

export const IndividualProductBase = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  gap: 10px;

  .mainPicture {
    width: 95vw;
    height: 330px;
    background-color: white;
    margin: -360px 0 0 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      min-width: 50%;
      max-height: 60%;
      border-radius: 10%;
    }
  }

  .resume {
    width: 95vw;
    height: 280px;
    background-color: white;
    margin: 0 0 0 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      font-size: 15pt;
      text-align: center;
      margin: 20px;
    }

    .yearAndKm {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      margin: 0 0 0 20px;
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
      font-size: 10pt;
      margin: 0 0 0 20px;
      color: black;
    }

    .buyButton {
      background-color: #4529e6;
      color: white;
      width: 100px;
      margin: 0 0 0 10px;
      border-radius: 4px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      scale: 0.8;
    }

    .buyButton {
      background-color: #4529e6;
      color: white;
      width: 100px;
      margin: 0 0 0 10px;
      border-radius: 4px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      scale: 0.8;
    }
  }

  .description {
    width: 95vw;
    height: 100%;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 0 0 0;
    gap: 15px;

    h2,
    p {
      margin: 0 20px 0 20px;
    }
  }

  .pictures {
    width: 95vw;
    height: 330px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;

    h2,
    p {
      margin: 20px 0 0 20px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
    }

    li {
      width: 32%;
    }

    img {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .mainPicture {
      width: 50vw;
      margin-left: -350px;

      img {
        min-width: 20%;
        max-height: 60%;
        border-radius: 10%;
      }
    }

    .resume {
      width: 50vw;
      margin-left: -350px;
    }

    .description {
      width: 50vw;
      margin-left: -350px;
    }

    .pictures {
      display: none;
    }
  }
`;
