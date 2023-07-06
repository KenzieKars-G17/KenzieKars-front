import styled from "styled-components";

export const ProductPageBase = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  flex-wrap: wrap;

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    background-color: #EDEAFD;
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
      justify-content: flex-start;
      align-items: space-around;
      padding: 20px;
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
      top: 97px;
      width: 25vw;
      right: 143px;
    }
  }
`;
