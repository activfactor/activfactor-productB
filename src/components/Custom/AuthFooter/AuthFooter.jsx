import React from 'react';
import { FooterTitle, Wrapper } from './style';
import PropTypes from 'prop-types';

const AuthFooter = ({label}) => {
    return (
        <Wrapper>
            <FooterTitle component="h4">{label}</FooterTitle>
        </Wrapper>
    );
};

AuthFooter.propTypes={
    label: PropTypes.string
}

AuthFooter.defaultProps = {
    label: '© Wealthface 2020'
}

export default AuthFooter;