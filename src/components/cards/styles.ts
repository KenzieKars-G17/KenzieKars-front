import styled from "styled-components";

export const UlCards = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-x: scroll;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: 100%;
    gap: 50px;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    overflow-x: auto;
    max-width: 100%;
    flex-wrap: nowrap;
    @media (min-width: 768px) {
      justify-content: flex-start;
      flex-wrap: wrap;
      
    }

    li {
      display: flex;
      gap: 20px;
      flex-direction: column;
      height: 340px;
      padding: 0 10px;
      flex-shrink: 0;
      width: 312px;
      position: relative;
      transition: 0.3s;
      font-size: 8pt;

      img {
        cursor: pointer;
        height: 152px;
        object-fit: cover;
        transition: 0.3s;

        :hover {
          opacity: 0.8;
          transition: 0.3s;
        }
      }
    }
    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
      width: 100%;
      text-align: center;
    }

    .km {
      width: 500%;
      text-align: center;
    }

    .year {
      margin: 0 100px 0 0;
    }

    .price {
      font-weight: bold;
      font-size: 10pt;
      width: 500%;
    }

    .productDetailsPreview {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
    }

    .profilePic {
      width: 25px;
      height: 25px;
      border-radius: 75%;
    }

    h2 {
      text-align: start;
    }

    p {
      max-width: 100%;
      text-align: start;
      word-break: break-word;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .pDescription {
      font-size: 10pt;
      color: gray;
      font-weight: bold;
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

    .divActive {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 5px;
      left: 5px;

      background: #4529e6;
      color: #ffffff;

      width: 51px;
      height: 24px;

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
      }
    }

    .divInactive {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: 61px;
      height: 24px;

      position: absolute;
      top: 12px;
      left: 12px;

      background: #adb5bd;
      color: #ffffff;

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
      }
    }

    .divButtonsAdmin {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      button {
        border: 1.5px solid #212529;
        border-radius: 4px;
        color: #212529;
        font-family: "Inter";
        flex-shrink: 1;
      }

      .btnEdit {
        width: 80px;
        height: 38px;
        font-weight: 600;
        font-size: 12px;
      }
      .btnDetails {
        width: 126px;
        height: 38px;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      color: #4529e6;
      font-weight: 700;
      border: none;
      cursor: pointer;
    }
  }

`;
