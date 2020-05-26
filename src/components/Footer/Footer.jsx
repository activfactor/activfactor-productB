import React from 'react';
import { BottomWrapper, Container, TopWrapper, LinksWrapper, DescriptionWrapper } from './style';
import { NavigationLink } from '../MaterialUIs';
import { Grid } from '@material-ui/core';

const Footer = () => {
    return (
        <Container component="footer">
            <TopWrapper>
                <LinksWrapper>
                    <NavigationLink label="About" to="/about" variant="footer"/>
                    <NavigationLink label="Contact us" to="/contact" variant="footer"/>
                    <NavigationLink label="FAQ" to="/faq" variant="footer"/>
                    <NavigationLink label="Terms of service" to="/terns" variant="footer"/>
                    <NavigationLink label="Privacy policy" to="/policy" variant="footer"/>
                </LinksWrapper>
                <DescriptionWrapper>
                    Please note that this online platform as well as the entirety of its 
                    content is purely for educational purposes and should not in any way substitute
                    the opinion or advice of a certified financial advisor. If you seek counselling 
                    or advice concerning a personal situation, you should contact an independent certified 
                    professional
                </DescriptionWrapper>
            </TopWrapper>
            <BottomWrapper>
                Wealthface @2019
            </BottomWrapper>
        </Container>
    );
};

export default Footer;