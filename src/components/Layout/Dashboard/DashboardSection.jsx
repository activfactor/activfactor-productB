import React from 'react';
import { TableContainer, HeaderWrapper } from './style';
import PropTypes from 'prop-types'

const DashboardSection = ({renderHeader, renderContent, width, margin}) => {
    return (
    <TableContainer component="div" width={width} margin={margin}>
      <HeaderWrapper>
          {renderHeader()}
      </HeaderWrapper>
      {renderContent()}
    </TableContainer>
    );
};

DashboardSection.propTypes = {
    renderHeader: PropTypes.func.isRequired,
    renderContent: PropTypes.func.isRequired,
    width: PropTypes.string,
    margin: PropTypes.string
}

export default DashboardSection;