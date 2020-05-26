import React from 'react';
import PropTypes from 'prop-types';
import { StyledDetails, StyledExpansionPanel, StyledSummary } from './style';
import { ExpandMore } from '@material-ui/icons';

const ExpandPanel = ({renderDetails, renderSummary , theme}) => {
    return (
        <StyledExpansionPanel>
            <StyledSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                theme={theme}
            >
                {renderSummary()}
            </StyledSummary>
            <StyledDetails>
                {renderDetails()}
            </StyledDetails>
        </StyledExpansionPanel>
    );
};

ExpandPanel.propTypes = {
    renderDetails: PropTypes.func.isRequired,
    renderSummary: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['light','main','dark','default'])
}

ExpandPanel.defaultProps = {
    theme: 'light'
}

export default ExpandPanel;