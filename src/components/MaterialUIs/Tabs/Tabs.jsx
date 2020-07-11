import React, {useMemo} from 'react';
import { StyledPrimaryTab, StyledPrimaryTabs, StyledSecondaryTabs, StyledSecondaryTab } from './style';
import PropTypes from 'prop-types';

const CustomizedTabs = ({theme, options, handleTabClick, initialValue, minWidth}) => {

  const handleChange = (event, newValue) => {
    handleTabClick(newValue);
  };

  const Tabs = useMemo(() => theme === 'primary' ? StyledPrimaryTabs : theme === 'secondary' ? StyledSecondaryTabs : '', [theme]);
  const Tab = useMemo(() => theme === 'primary' ? StyledPrimaryTab : theme === 'secondary' ? StyledSecondaryTab : '', [theme]);

  return (
      <Tabs
        value={initialValue}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered={true}
      >
        {options && options.length>0 && options.map(option => (
          <Tab disableFocusRipple={true} disableRipple={true} minwidth={minWidth} key={option.label} label={option.label} value={option.value}/>
        ))}
      </Tabs>
  );
}

CustomizedTabs.propTypes = {
  theme: PropTypes.oneOf(['primary','secondary']),
  options: PropTypes.arrayOf(PropTypes.object),
  handleTabClick: PropTypes.func.isRequired,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.string
}

CustomizedTabs.defaultProps = {
  minWidth: '60px'
}

export default CustomizedTabs;
