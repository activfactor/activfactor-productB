import React from 'react';
import { HeaderWrapper, Container, Header } from './style';
import PropTypes from 'prop-types';

const ActionsBlock = ({children, title}) => {
    return (
        <Container>
            <HeaderWrapper component="div">
                <Header component="h1">{title}</Header>
            </HeaderWrapper>
            {children}
        </Container>
    );
};

ActionsBlock.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default ActionsBlock;