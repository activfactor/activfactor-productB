import styled from 'styled-components';
import { variant } from 'styled-system';

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    background: #fff;
    border-bottom: 1px solid ${props => props.theme.colors.grayLight};
    padding: 30px 40px;
    ${({theme}) => theme.medium`
        padding: 15px;    
    `}
    ${({theme}) => theme.small`
        grid-gap: 0;
        padding: 17px 0 10px 0;
        border-bottom: 0;
    `}
`

export const WizardItem = styled.div`
    font-family: ${props => props.theme.fonts.medium};
    font-size: 19px;
    padding-bottom: 5px;
    color: ${props => props.theme.colors.grayDark};
    border-bottom: 3px solid ${props => props.theme.colors.grayMedium};
    ${({theme}) => theme.medium`
        font-size: 16px;
    `}
    ${({theme}) => theme.small`
        font-size: 14px;
        text-align: center;
    `}
    ${props => variant({
        variants:{
            active:{
                color: props.theme.colors.primary,
                borderColor: props.theme.colors.primary
            },
            done: {
                color: props.theme.colors.primaryLight,
                borderColor: props.theme.colors.primaryLight
            }
        }
    })}
`