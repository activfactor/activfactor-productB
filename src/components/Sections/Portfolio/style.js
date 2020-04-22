import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    height: 100%;
    flex: 1;
`

export const ConnectBrokerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: ${props => props.theme.spacing.hg};
`

export const Table = styled.div`
    width: 100%;
`