import React, {useCallback, useState, useEffect} from 'react';
import {Autocomplete} from '@material-ui/lab';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { StyledTextField } from './style';
import Checkbox from '../CheckBox';
import PropTypes from 'prop-types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CheckboxesTags = ({options, onChange, value, fullWidth}) => {

  const handleChange = useCallback((e, newValue) => {
    if (onChange){
      onChange(newValue);
    }
  }, [onChange]);

  const renderOption = useCallback((option, {selected}) => 
      (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            label={option.label}
            value={option.value}
          />
        </React.Fragment>
      ), []);

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, valueToCheck) => option.value===valueToCheck.value}
      value={value}
      onChange={handleChange}
      renderOption={renderOption}
      style={{ width: '100%', maxWidth: fullWidth ? '100%' : '550px' }}
      renderInput={(params) => (
        <StyledTextField  {...params} variant="outlined" placeholder="Sectors"/>
      )}
    />
  );
}

CheckboxesTags.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.object),
  fullWidth: PropTypes.bool
}

export default CheckboxesTags

