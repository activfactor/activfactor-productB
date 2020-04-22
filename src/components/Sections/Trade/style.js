import styled from 'styled-components';

export const Container = styled.main`
    padding: 15px;
    margin-bottom: 100px;
    &::after {
        display: block;
        content: "";
        clear: both;
    }
    ${({theme}) => theme.small`
        padding: 0;
        margin-bottom: 70px;
    `}
`

export const ContentWrapper = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 30px 40px;

`

export const InputWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px
`

export const Input = styled.input`
    min-width: 200px;
    &:first-child{
        margin-right: 10px;
    }
    &:last-child{
        margin-left: 10px;
    }

    ${({theme}) => theme.verySmall`
        min-width: 130px;
    `}
`

export const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: ${props => props.theme.colors.danger};
    font-size: ${props => props.theme.fontSizes.lg};
`

export const TableWrapper = styled.div`
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
`