import React, {useMemo, useState} from 'react';
import { StyledSlider, useStyles } from './style';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomSlider = ({value, min, max, step=1, onChange, defaultValue}) => {
  const classes = useStyles();
  const [movingValue, setMovingValue] = useState();
  const marks = useMemo(() =>[
    {
        value: min,
        label: min
    },
    {
        value: (max*(1/3)).toFixed(0),
        label: (max*(1/3)).toFixed(0)
    },
    {
        value: (max*(2/3)).toFixed(0),
        label: (max*(2/3)).toFixed(0),
    },
    {
        value: max,
        label: max
    }
], [max, min]);


const onChangeCommittedHandler = (event, value) => {
    if (onChange){
        setMovingValue(null);
        onChange(value);
    }
}

const onChangeHandler = (event, value) => {
    setMovingValue(value);
}


  return (
    <Box className={classes.root}>
      <StyledSlider
        defaultValue={defaultValue}
        value={movingValue || value}
        aria-labelledby="discrete-slider-custom"
        step={step}
        valueLabelDisplay="auto"
        marks={marks}
        max={max}
        min={min}
        onChange={onChangeHandler}
        onChangeCommitted={onChangeCommittedHandler}
      />
    </Box>
  );
}

CustomSlider.propTypes = {
    value: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    step: PropTypes.number,
    onChange: PropTypes.func
}

export default CustomSlider;