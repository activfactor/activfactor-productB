import React from 'react';
import { StyledCard, StyledHeader, StyledCardContent } from './style';
import PropTypes from 'prop-types';

const ChartCard = ({children, title, margin, width}) => {
    return (
        <StyledCard margin={margin} width={width}>
            {title && (<StyledHeader title={title}/>)}
            <StyledCardContent>
                {children}
            </StyledCardContent>
        </StyledCard>
    );
};

ChartCard.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
    margin: PropTypes.string,
    width: PropTypes.string
}

export default ChartCard;