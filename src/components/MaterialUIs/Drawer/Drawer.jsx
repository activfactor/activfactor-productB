import React from 'react';
import { StyledIconButton } from './style';
import {Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const StyledDrawer = ({opened, anchor, children, toggleDrawer}) => {

  return (
    <>
      <StyledIconButton
        color="primary"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="end"
        size="medium"
      >
        <MenuIcon fontSize="large"/>
      </StyledIconButton>
      <Drawer anchor={anchor} open={opened} onClose={toggleDrawer(false)}>
        {children}
      </Drawer>
      </>
  );
}

StyledDrawer.prototypes = {
    opened: PropTypes.bool,
    anchor: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
    children: PropTypes.element
}

export default StyledDrawer;

