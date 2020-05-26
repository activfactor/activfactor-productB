import React,{useState, useCallback} from 'react';
import { Checkbox } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Factors = ({onUpdate, initialValues}) => {
    const [factors, setFactors] = useState(initialValues)
    const handleChange = useCallback((factor) => {
        let updatedSelected;
        if (!factors.includes(factor)){
            updatedSelected = [...factors, factor];
        } else {
            updatedSelected = factors.filter(value => value!==factor);
        }
        setFactors(updatedSelected);
        if (onUpdate){
            onUpdate(updatedSelected)
        }
    }, [onUpdate, factors]);
    const {descriptions} = useSelector(state => state.appConfig);
    const getTooltipTitle = useCallback((factor) => {
        if (descriptions){
            return descriptions.factors[factor];
        }
        return "";
    }, [descriptions])
    const getProps = useCallback((factor) => ({
        checked: factors.includes(factor),
        margin: "0px 0px 15px",
        onChange: handleChange,
        label: factor,
        value: factor.toLowerCase(),
        withTooltip: true,
        tooltipTitle: getTooltipTitle(factor),
        withArrow: true
    }) ,[getTooltipTitle, handleChange, factors]);
    return (
      <ActionsBlock title="Factors">
        <Grid container>
          <Grid item md={12} xs={6}>
            <Checkbox
              {...getProps("momentum")}
            />
            <Checkbox
              {...getProps("size")}
            />
            <Checkbox
              {...getProps("value")}
            />
          </Grid>
          <Grid item md={12} xs={6}>
            <Checkbox
              {...getProps("volatility")}
            />
            <Checkbox
              {...getProps("investment")}
            />
            <Checkbox
              {...getProps("profitability")}
            />
          </Grid>
        </Grid>
      </ActionsBlock>
    );
};

Factors.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    initialValues: PropTypes.array
}

Factors.defaultProps = {
    initialValues: []
}

export default Factors;