import styled from "styled-components";

export const DashboardUserPageBase = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  position: relative;

  .h1Title{
    margin: 50px 0 0 50px;
    font-size: 15pt;
    font-weight: bolder;
  }

  main {
    margin: 10px 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-direction: column;

    .divAdvertisement {
      /* height: auto; */
      margin-top: 75px;
      margin-bottom: 75px;
      /* max-width: 100%; */
      width: 100%;
      padding-left: 5%;
      padding-right: 5%;
      display: flex;

      li{
       height: 400px;
      }


      @media (min-width: 768px) {
        margin-top: 10px;
        align-items: flex-start;
        ul{
        width: 100vw;
        justify-content: flex-start;
        gap: 12%;
        margin: 50px 0 0 0;

        li{
          height: 390px
        }
      }
      }



      @media (max-width: 768px) {
        margin-top: 120px;
      }
    }
    .no-advertisement {
      margin-top: 120px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .divPurpleBackground {
      height: 357px;
      background-color: #4529e6;
      width: 100vw;
    }
  }

  .pictures {
    width: 95vw;
    height: 330px;
    background-color: white;
    border-radius: 8px;
    display: none;
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
    .pictures {
      display: flex;
      position: absolute;
      top: 106px;
      width: 25vw;
      right: 143px;
    }
  }
`;
