import React from 'react';
import PropsTypes from 'prop-types';
import { Container } from './style';

const SectionPage = ({children}) => {
    return (
        <Container component="main">
            {children}
        </Container>
    );
};

SectionPage.protoTypes={
    children: PropsTypes.node
}

export default SectionPage;