import React from 'react';
import {SVG, Wrapper} from '../style';
import PropTypes from 'prop-types';

const Logo = ({iconSize, color, onClick, withPointer}) => {
    const onClickHandler = () => () => {
        return onClick ? onClick() : null 
    }
    return (
        <Wrapper style={{cursor: withPointer ? 'pointer' : null}}>
            <SVG onClick={onClickHandler()} iconsize={iconSize} color={color} viewBox="0 0 50 40">
                <path d="M20.6352 40.0001C17.4914 36.8314 17.4914 31.6953 20.6352 28.5283L47.6438 1.3066C50.7876 4.47527 50.7876 9.61141 47.6438 12.7784L20.6352 40.0001Z"/>
                <path d="M11.4966 30.7896C8.35271 27.621 8.35271 22.4848 11.4966 19.3179L30.1524 0.513119C33.2962 3.68179 33.2962 8.81792 30.1524 11.9849L11.4966 30.7896Z"/>
                <path d="M2.35594 21.5792C-0.787918 18.4106 -0.787918 13.2744 2.35594 10.1075L12.3843 0C15.5281 3.16867 15.5281 8.3048 12.3843 11.4718L2.35594 21.5792Z"/>
            </SVG>
        </Wrapper>
        
    );
};

Logo.prototypes = {
    color: PropTypes.string,
    iconSize: PropTypes.oneOf(['small','large','custom']),
    withPointer: PropTypes.bool,
    onClick: PropTypes.func
}

Logo.defaultProps = {
    iconSize: 'small',
    color: 'primary'
}

export default Logo;