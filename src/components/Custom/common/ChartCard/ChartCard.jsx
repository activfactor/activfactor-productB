import React from 'react';
import { StyledCard, StyledHeader, StyledCardContent } from './style';
import PropTypes from 'prop-types';

const ChartCard = ({children, title, margin, width, padding}) => {
    return (
        <StyledCard margin={margin} width={width}>
            {title && (<StyledHeader title={title}/>)}
            <StyledCardContent padding={padding}>
                {children}
            </StyledCardContent>
        </StyledCard>
    );
};

ChartCard.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
    margin: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string
}

export default ChartCard;