import styled from 'styled-components';
import Input from '../../../UI/Input';

export const Wrapper = styled.div`
    display: flex;
    padding: ${props => props.theme.spacing.lg};
    flex-direction: column;
`

export const Title = styled.label`
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.medium};
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.primary};
`

export const ErrMsg = styled.p`
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.danger};
    margin-top: 12px;
    margin-bottom: 0px;
`

export const ButtonsWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    ${({theme}) => theme.verySmall`
        flex-direction: column;
        justify-content: center;
    `}
`

export const StyledInput = styled.input`
    margin-top: 20px;
    width: 100%;
    &:first-child{
        margin-right: 10px;
    }
    &:last-child{
        margin-left: 10px;
    }
`