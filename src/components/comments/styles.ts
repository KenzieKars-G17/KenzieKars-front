import styled from "styled-components";

export const CommentsDiv = styled.div`
    background-color: white;
    width: 95vw;

    .UserDetails{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 0 20px;
        gap: 10px;
    }

    h2{
        margin: 20px 0 20px 20px;
    }

    p{
     text-align: center;  
     margin: 10px 20px 20px 20px; 
    }

    h3{
        font-size: 12pt;
    }

    img{
        width: 35px;
        height: 35px;
        border-radius: 75px;
    }

    form{
        background-color: white;
        width: 95vw;
    }
`;

export const CommentsForm = styled.form`
    background-color: white;
    width: 95vw;
`;