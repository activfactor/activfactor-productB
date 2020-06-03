import React from "react";
import {
  Grow,
  Grid,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  Paper,
} from "@material-ui/core";
import Button from "../Button";
import { StyledButtonGroup } from './style';
import PropTypes from 'prop-types';

const DropDownButton = ({
  options,
  handleMenuClick,
  label,
  color,
  variant,
  fullWidth,
  disabled
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleMenuItemClick = (event, index, option) => {
    handleMenuClick(option);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} style={{width: fullWidth ? '100%' : 'unset'}}>
        <StyledButtonGroup
          fullWidth={fullWidth}
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
          disabled={disabled}
        >
          <Button
            color={color}
            variant={variant}
            label={label}
            fullWidth={true}
            withDropDownIcon={true}
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
            aria-label="select merge strategy"
          />
        </StyledButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{zIndex: 1000}}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map(({label, disabled}, index) => (
                      <MenuItem
                        key={label}
                        selected={index === selectedIndex}
                        onClick={(event) =>
                          handleMenuItemClick(event, index, label)
                        }
                        disabled={disabled}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

DropDownButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool
    })),
    handleMenuClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    color: PropTypes.oneOf(['primary','secondary']),
    variant: PropTypes.oneOf(['contained','outlined']),
    fullWidth: PropTypes.bool,
}

DropDownButton.defaultProps = {
    color: 'primary',
    variant: 'contained'
}

export default DropDownButton;
