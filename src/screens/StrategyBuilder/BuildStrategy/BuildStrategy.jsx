import React, {useCallback} from 'react';
import { CheckboxesTags, Select, Slider, Switch, Button, Link } from 'components/MaterialUIs';
import { ActionsBlock } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import { Wrapper, ButtonWrapper, ActionsWrapper } from './style';
import Factors from './components/Factors';
import RebalancingFreq from './components/RebalancingFreq';
import CompanySize from './components/ComponySize';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { resetStrategyFilters, updateStrategyFilters } from 'store/actions/strategyBuilder.actions';

const BuildStrategy = ({runStrategy, options}) => {
    const {initialStrategyFilters: {
        country, nStocks, halal, factors, rebalancingFreq, firmSizes , sectors
    }} = useSelector(state => state.strategyBuilder);
    const dispatch = useDispatch();

    const onClickHandler = useCallback(() => {
        const params = {
            country: country && country.toLowerCase(),
            nStock: nStocks,
            halal,
            factors: factors.join(','),
            sectors: sectors.map(sector => sector.value).join(','),
            rebalancing: rebalancingFreq,
            firmSize: firmSizes.join(','),
            weighting: 'ew'
        }
        runStrategy(params, {
            country,
            nStocks,
            halal,
            factors,
            rebalancingFreq,
            firmSizes,
            sectors: sectors
        });
    }, [country, nStocks, factors, firmSizes, rebalancingFreq, sectors, halal, runStrategy]);

    const onResetFilters = () => {
        dispatch(resetStrategyFilters());
    }

    const handleSectorsChange = (sectors) => {
        dispatch(updateStrategyFilters({sectors}));
    };

    const handleCountryChange = (e) => {
        dispatch(updateStrategyFilters({country: e.target.value}));
    };

    const handleNumberOfStocksChange = (value) => {
        dispatch(updateStrategyFilters(({nStocks: value})));
    };

    const handleHalalChange = () => {
        dispatch(updateStrategyFilters({halal: halal === 0 ? 1 : 0}));
    };

    const handleFactorsChange = (factors) => {
        dispatch(updateStrategyFilters({factors}));
    };

    const handleRebalancingFreqChange = (freq) => {
        dispatch(updateStrategyFilters(({rebalancingFreq: freq})));
    };

    const handleCompanySizeChange = (firmSizes) => {
        dispatch(updateStrategyFilters({firmSizes}));
    };

    return (
      <Wrapper>
        <Grid container item xs={12}>
          <Grid item xs={12} md={3} lg={2}>
            <Factors onUpdate={handleFactorsChange} initialValues={factors} />
          </Grid>
          <Grid container item xs={12} md={8} lg={10}>
            <Grid item lg={9} xs={12}>
              <RebalancingFreq onUpdate={handleRebalancingFreqChange} initialValue={rebalancingFreq} />
            </Grid>
            <Grid item lg={3} xs={12}>
              <ActionsBlock title="Country">
                <Select
                  options={options.countries}
                  value={country}
                  onChange={handleCountryChange}
                  theme="default"
                />
              </ActionsBlock>
            </Grid>
            <Grid item lg={9} xs={12}>
              <CompanySize onUpdate={handleCompanySizeChange} initialValues={firmSizes}/>
            </Grid>
            <Grid item lg={3} xs={12}>
              <ActionsBlock title="Number of stocks">
                <Slider
                  defaultVal={10}
                  min={1}
                  max={50}
                  step={1}
                  value={nStocks}
                  onChange={handleNumberOfStocksChange}
                />
              </ActionsBlock>
            </Grid>
            <Grid item lg={9} xs={12}>
              <ActionsBlock title="Sectors">
                <CheckboxesTags
                  options={options.sectors}
                  onChange={handleSectorsChange}
                  value={sectors}
                />
              </ActionsBlock>
            </Grid>
            <Grid item lg={3} xs={12}>
              <ActionsBlock title="Halal stocks">
                <Switch
                  checked={halal === 1}
                  onChange={handleHalalChange}
                  label="Apply"
                  name="Halal"
                />
              </ActionsBlock>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="flex-end" alignItems="center">
            <ActionsWrapper>
                <Link to="/strategy/builder" label="Clear all filters" onClick={onResetFilters}/>
                <ButtonWrapper>
                    <Button label="Run strategy" fullWidth={true} onClick={onClickHandler}/>
                </ButtonWrapper>
            </ActionsWrapper>
        </Grid>
      </Wrapper>
    );
};

BuildStrategy.propTypes = {
    runStrategy: PropTypes.func,
    sectorsOptions: PropTypes.arrayOf(PropTypes.object)
}

export default BuildStrategy;