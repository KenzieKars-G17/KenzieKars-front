import styled from "styled-components";

export const DivBackgroundFormEditUser = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 95%;
  margin-top: 10%;
  overflow: hidden;
  padding: 20px;
  border-radius: 8px;
  width: 100vw;

  h1,
  h2 {
    font-size: 10pt;
  }

  h2 {
    text-align: left;
  }

  .header-modal{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      padding-left: 10px;
    }
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      cursor: pointer;
    }
  }

  form {
    height: 100%;
    margin: 10px;
    overflow-y: scroll;

    label {
      margin: 10px 0 0 0;
      font-weight: bold;
    }

    .divButtonsType {
      padding: 10px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;

      button {
        cursor: pointer;
      }
    }
  }

  .buttons-cont {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    button {
      margin: 10px 0 10px 0;
      cursor: pointer;
      background-color: #5126ea;
      color: white;
    }

    .bttn-cancel{
      border: 1.5px solid var(--color-grey-6);
      background: var(--color-grey-6);
      color: var(--color-grey-2);
    }

    .bttn-delete {
      padding: 0.75rem 1.75rem;
      border: 1.5px solid var(--color-alert-2);
      background: var(--color-alert-2);
      font-size: 1rem;
      font-family: Inter;
      font-weight: 600;
      line-height: 0rem;
      color: var(--color-alert-1);
    }
  }

  @media (min-width: 768px) {
    width: 30vw;
    margin-top: 0;
    height: 90%;
  }
`;
