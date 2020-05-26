import React from 'react';
import { StyledCard } from './style';
import PropTypes from 'prop-types';

const Card = ({children, ...rest}) => {
    return (
        <StyledCard {...rest}>
            {children}
        </StyledCard>
    );
};

Card.propTypes = {
    children: PropTypes.node
}

export default Card;