import styled from 'styled-components';
import { variant } from 'styled-system';

export const DataSingle = styled.td`
    text-align: center !important;
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
`

export const TableHeader = styled.thead`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border-radius: 5px;
`

export const Value = styled.div`
    text-align: center;
    &:first-child{
        margin-bottom: ${props => props.theme.spacing.sm};
    }
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
`