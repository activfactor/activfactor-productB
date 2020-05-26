import React, {useState, useCallback} from 'react';
import { StyledCheckbox, HelpIcon, StyledFormControlLabel } from './style';
import Tooltip from '../Tooltip';
import PropTypes from 'prop-types';

const Checkbox = ({onChange, color, label, size, withTooltip, tooltipTitle, withArrow, margin, value, checked}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = useCallback(() => {
        setIsChecked(prevVal => !prevVal);
        if (onChange){
            onChange(value);
        }
    }, [onChange, value]);
    return (
      <div style={{ margin: margin ? margin : 0 }}>
          {label && <StyledFormControlLabel
          control={
            <StyledCheckbox
              value={value}
              size={size}
              checked={typeof checked !== "undefined" ? checked : isChecked}
              onChange={handleChange}
              color={color}
            />
          }
          label={label}
        />}
        {!label && 
            <StyledCheckbox
            value={value}
            size={size}
            checked={typeof checked !== "undefined" ? checked : isChecked}
            onChange={handleChange}
            color={color}
          />
        }
        {withTooltip && (
          <Tooltip title={tooltipTitle} arrow={withArrow}>
            <HelpIcon color="primary" />
          </Tooltip>
        )}
      </div>
    );
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    color: PropTypes.oneOf(['primary','secondary']),
    label: PropTypes.string,
    size: PropTypes.oneOf(['small','medium']),
    withTooltip: PropTypes.bool,
    tooltipTitle: PropTypes.string,
    withArrow: PropTypes.bool,
    margin: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
}

Checkbox.defaultProps = {
    color: 'primary',
    size: 'small',
    withTooltip: false
}

export default Checkbox;