import styled from "styled-components";

export const InputFieldStyled = styled.input`
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    background: #FFCE00;
    border: none;
    border-bottom: 3px solid black;

    width: 100%;

    &::placeholder{
        color: #000;
    }
    
    -webkit-box-shadow: 0 0 0px 1000px #FFCE00 inset;
`;
