import styled from 'styled-components';
import { variant } from 'styled-system';

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    ${({theme}) => theme.large`
        text-align: left;
    `}
`

export const Title = styled.div`
    font-size: 15px;
    font-family: ${props => props.theme.fonts.medium};
    margin-bottom: 7px;
    ${({theme}) => theme.small`
        font-size: 14px;
    `}
    ${({theme}) => theme.verySmall`
        font-size: 13px;
    `}
`

export const Value = styled.div`
    ${props => variant({
        variants: {
            primary: {
                color: props.theme.colors.primary
            },
            danger: {
                color: props.theme.colors.danger
            },
            secondary: {
                color: props.theme.colors.secondary
            }
        }
    })}
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    line-height: 1;
    margin-top: 10px;
    ${({theme}) => theme.small`
        font-size: 22px;
    `}

    ${({theme}) => theme.verySmall`
        font-size: 20px;
    `}
`