import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0 6px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    margin-top: 30px;
    margin-bottom: 40px;
    width: 100%;
    ${({theme}) => theme.large`
        flex-direction: column;
    `}
    ${({theme}) => theme.small`
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 10px;
    `}
    ${({theme}) => theme.verySmall`
        margin-top: 10px;
        padding: 10px 4px;
    `}
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    &:first-child{
        margin-right: 50px;
    }
    ${({theme}) => theme.large`
        margin-right: 0px !important; 
        margin-bottom: 10px;
    `}
`