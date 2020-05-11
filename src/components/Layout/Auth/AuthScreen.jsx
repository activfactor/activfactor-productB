import React from 'react';
import {BigLogo} from 'components/Icons';
import { IconWrapper, ImageWrapper, Container, ContentContainer, FullWidthWrapper } from './style';
import PropTypes from 'prop-types';

const AuthScreen = ({imageSrc, children}) => {
    return (
        <section>
            <IconWrapper>
                <BigLogo width="250px" height="100px" fontSize="custom"/>
            </IconWrapper>
        <FullWidthWrapper component="section">
            <Container>
                <ContentContainer>
                    {children}
                </ContentContainer>
                <ImageWrapper>
                    <img width="100%" height="auto" src={imageSrc} alt="login wealthface" />
                </ImageWrapper>
            </Container>
        </FullWidthWrapper>
        </section>
    );
};

AuthScreen.propTypes = {
    imageSrc: PropTypes.any.isRequired,
    children: PropTypes.node
}

export default AuthScreen;