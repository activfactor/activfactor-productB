import React,{useCallback} from 'react';
import { ToggleButton } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const RebalancingFreq = ({onUpdate, initialValue}) => {
    const handleClick = useCallback((freq) => () => {
        if(onUpdate){
            onUpdate(freq);
        }
    }, [onUpdate]);
    return (
        <ActionsBlock title="Rebalancing Frequencies">
            <Grid container direction="row">
                <Grid container item direction="row" md={6} sm={12}>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton onClick={handleClick("monthly")} height="135px" label="Monthly" subLabel="Rebalancing occurs at the beginning of each month" colorTheme="primary" colorDarkness="darkness" active={initialValue==="monthly"} />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton onClick={handleClick("quarterly")} height="135px" label="Quarterly" subLabel="Rebalancing occurs four times per year" colorTheme="primary" colorDarkness="dark" active={initialValue==="quarterly"} />
                    </Grid>
                </Grid>
                <Grid container item direction="row" md={6} sm={12}>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton onClick={handleClick("semesterly")} height="135px" label="Semesterly" subLabel="Rebalancing occurs twice per year" colorTheme="primary" colorDarkness="main" active={initialValue==="semesterly"} />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <ToggleButton onClick={handleClick("yearly")} height="135px" label="Yearly" subLabel="Rebalancing occrs one time per year" colorTheme="primary" colorDarkness="light" active={initialValue==="yearly"} />
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