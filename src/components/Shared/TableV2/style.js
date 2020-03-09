import styled from 'styled-components';
import { variant } from 'styled-system';

export const DataSingle = styled.div`
    text-align: center !important;
    display: flex;
    align-items: center;
    justify-content: center;
    td{
        text-align: center !important;
    }
    input{
        cursor: pointer;
        max-width: 80px !important;
        padding: 10px !important;
        margin: 10px;
        font-size: 11px;
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
            },
            success: {
                color: props.theme.colors.success
            }
        }
    })}
`

export const TableHeader = styled.thead`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border-radius: 5px;
    th{
        text-align: center !important;
    }
`

export const Value = styled.div`
    text-align: center;
    width: 100% !important;
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

export const LoaderContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`