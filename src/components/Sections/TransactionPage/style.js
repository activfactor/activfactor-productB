import styled from 'styled-components';

export const Container = styled.main`
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

export const Header = styled.h1`
    font-family: ${props => props.theme.fonts.medium};
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.black};
    margin: 25px 0 20px;
`