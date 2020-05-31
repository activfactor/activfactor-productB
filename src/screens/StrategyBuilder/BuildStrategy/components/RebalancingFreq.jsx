import React,{useCallback, useMemo} from 'react';
import { ToggleButton } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const RebalancingFreq = ({onUpdate, initialValue}) => {
    const {descriptions} = useSelector(state => state.appConfig);
    const getSubLabel = useCallback((freq) => {
        if (descriptions){
            return descriptions.rebalancingFreq[freq]
        }
    }, [descriptions]);

    const handleClick = useCallback((freq) => () => {
        if(onUpdate){
            onUpdate(freq);
        }
    }, [onUpdate]);

    const colorsProps = useMemo(() => ({
        monthly: "darkness",
        quarterly: "dark",
        semesterly: "main",
        yearly: "light"
    }), []);

    const getProps = useCallback((freq, label) => ({
        onClick: handleClick(freq),
        height: "135px",
        label: label,
        subLabel: getSubLabel(freq),
        colorTheme: "primary",
        colorDarkness: colorsProps[freq],
        active: initialValue === freq
    }), [getSubLabel, handleClick,initialValue, colorsProps]);

    return (
        <ActionsBlock title="Rebalancing Frequencies">
            <Grid container direction="row">
                <Grid container item direction="row" md={6} sm={12}>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton {...getProps('monthly', 'Monthly')} />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton {...getProps('quarterly', 'Quarterly')}/>
                    </Grid>
                </Grid>
                <Grid container item direction="row" md={6} sm={12}>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton {...getProps('semesterly', 'Semesterly')} />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton {...getProps('yearly','Yearly')}/>
                    </Grid>
                </Grid>
            </Grid>
        </ActionsBlock>
    );
};

RebalancingFreq.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    initialValue: PropTypes.oneOf(['monthly','yearly','semesterly', 'quarterly', ''])
}

export default RebalancingFreq;