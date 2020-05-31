import React,{useState, useCallback, useMemo} from 'react';
import { Checkbox } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FactorsSkeleton } from 'components/Skeleton';

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

    const factorsList = useMemo(() => {
      if (descriptions){
        return Object.keys(descriptions.factors)
      }
    }, [descriptions]);
    
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
          <Grid item xs={12}>
          {
            factorsList && factorsList.length>0 
            ? factorsList.map(factor => (
              <Checkbox key={factor} {...getProps(factor)}/>
            ))
            : <FactorsSkeleton />
          }
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