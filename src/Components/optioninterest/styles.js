import styled from "styled-components";

export const OptionInterestStyled = styled.button`
    display: flex;
    //width: 184px;
    padding: 16px 40px;
    justify-content: center;
    align-items: center;
    align-content: center;
    //gap: 10px;
    flex-wrap: wrap;

    border-radius: 8px;
    border: 2px solid #000;


    //width: 142.667px;
    flex-shrink: 0;


    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;


    background-color: ${props => (props.selected ? '#000' : 'transparent')};
    color: ${props => (props.selected ? '#FF8000' : '#000')};


`;
