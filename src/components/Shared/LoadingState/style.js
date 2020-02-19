import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    min-height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding ? props.padding : '0px'}; 
`