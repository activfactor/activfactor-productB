import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0px ${props => props.theme.spacing.xsm};
    min-width: 180px;
    ${({theme}) => theme.verySmall`
        margin: ${props => props.theme.spacing.min};
    `}
`