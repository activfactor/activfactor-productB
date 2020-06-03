import React,{useCallback,useMemo} from 'react';
import { ToggleButton } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CardListing } from 'components/Custom/common';

const RebalancingFreq = ({onUpdate, initialValues}) => {
    const {descriptions} = useSelector(state => state.appConfig);
    const getSubLabel = useCallback((size) => {
        if (descriptions){
            return descriptions.firmSizes[size]
        }
    }, [descriptions]);

    const onClickHandler = useCallback((size) => () => {
        let updatedSelected;
        if (!initialValues.includes(size)){
            updatedSelected = [...initialValues, size];
        } else {
            updatedSelected = initialValues.filter(value => value!==size);
        }
        if (onUpdate){
            onUpdate(updatedSelected)
        }
    }, [initialValues, onUpdate]);

    const colorsProps = useMemo(() => ({
        large: "darkness",
        medium: "dark",
        small: "main",
        micro: "light"
    }), []);

    const getProps = useCallback((firmSize, label) => ({
        onClick: onClickHandler(firmSize),
        height: "135px",
        label: label,
        subLabel: getSubLabel(firmSize),
        colorTheme: "secondary",
        colorDarkness: colorsProps[firmSize],
        active: initialValues.includes(firmSize)
    }), [getSubLabel, onClickHandler,initialValues, colorsProps]);

    return (
      <ActionsBlock title="Company Size">
        <Grid container direction="row">
            <Grid item sm={3} xs={6}>
              <ToggleButton
                {...getProps("large","Large")}
              />
            </Grid>
            <Grid item sm={3} xs={6}>
              <ToggleButton
                {...getProps("medium","Medium")}
              />
            </Grid>
            <Grid item sm={3} xs={6}>
              <ToggleButton
                {...getProps("small","Small")}
              />
            </Grid>
            <Grid item sm={3} xs={6}>
              <ToggleButton
                {...getProps("micro","Micro")}
              />
            </Grid>
        </Grid>
      </ActionsBlock>
    );
};

RebalancingFreq.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    initialValues: PropTypes.arrayOf(PropTypes.string)
}

RebalancingFreq.defaultProps = {
    initialValues: []
}

export default RebalancingFreq;