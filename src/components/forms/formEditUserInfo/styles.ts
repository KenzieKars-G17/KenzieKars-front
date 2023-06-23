import styled from "styled-components"

export const DivBackgroundFormEditUser = styled.div`
    background-color: white;  
    display: flex;
    flex-direction: column;
    height: 90%;
    margin-top: 15%;
    overflow: hidden;
    padding: 20px;
    border-radius: 8px;
    width: 100vw;


    h1, h2{
        font-size: 10pt;
    }

    h2{
        text-align: left;
    }

    .title-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    form{
        height: 100%;
        overflow: scroll;

        label{
            margin: 10px 0 0 0;
            font-weight: bold;
        }

        .divButtonsType{
            padding: 10px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;

            button{
                cursor: pointer;
            }
        }
    }

    .buttons-cont{
        button{
            margin: 10px 0 10px 0;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        width: 30vw;
        margin-top: 0;
    }
`;