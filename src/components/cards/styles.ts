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
    position: relative;
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

  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: 100%;
    gap: 50px;

    li {
      height: 10%;
    }
  }
`;
