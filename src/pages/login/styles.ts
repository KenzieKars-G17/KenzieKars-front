import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.2rem 1.6rem;
  width: 100vw;
  background-color: var(--color-grey-8);
  @media (min-width: 700px) {
    padding: 12rem 1.6rem;
  }

  button{
    cursor: pointer;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    width: 412px;
    max-width: 100%;
    height: 542px;

    background: var(--color-grey-10);
    border-radius: 0.4rem;
    overflow-x: hidden;
  }

  .tittle-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 76.7%;
    min-width: 287px;
  }

  .login-title {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--color-grey-0);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 76.7%;
    min-width: 287px;
    height: 392px;

    .inputs-cont {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: 203px;

      .alert-span {
        font-size: 1.2rem;
        line-height: 1;

        color: var(--color-alert-1);
        margin-top: -4px;
      }

      > a {
        align-self: flex-end;
        margin-right: 1.6rem;
        text-decoration: none;
        > span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2.4rem;

          color: var(--color-grey-2);
          &:hover {
            text-decoration: underline;
            color: var(--color-brand-2);
          }
        }
      }
    }

    .bttn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.2rem 2.8rem;
      gap: 1rem;

      width: 100%;
      height: 4.8rem;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 0px;

      outline: none;
      border-radius: 0.4rem;

      transition: 0.3s ease;
    }

    .bttn-brand {
      color: var(--color-white);
      background: var(--color-brand-1);
      border: 0.15rem solid var(--color-brand-1);
      &:hover {
        background: var(--color-random-12);
        border: 0.15rem solid var(--color-random-12);
      }
    }

    .bttn-gray {
      color: var(--color-grey-0);
      background: var(--color-grey-10);
      border: 0.15rem solid var(--color-grey-4);
      &:hover {
        background: var(--color-grey-0);
        color: var(--color-white);
      }
    }

    .buttons-cont {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 168px;

      > p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;

        color: var(--color-grey-2);
      }
    }
  }
`;
