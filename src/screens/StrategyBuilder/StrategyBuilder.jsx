import React,{useState, useMemo, useEffect} from 'react';
import { Stepper } from 'components/MaterialUIs';
import { Container } from './style';
import { Date, DateTitle } from '../common.style';
import BuildStrategy from './BuildStrategy';
import AnalyzeResults from './AnalyzeResults';
import CustomizePortfolio from './CustomizePortfolio';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlists } from 'store/actions/watchlist.actions';
import { runStrategy, setStrategyFilters, updateStrategyFilters } from 'store/actions/strategyBuilder.actions';
import { INITIAL_STRATEGY_FILTERS } from 'config/appConfig';
import { isEmpty } from 'utils/app.utils';
import { Grid } from '@material-ui/core';
import { Autorenew, ShowChart } from '@material-ui/icons';
import AuthRequire from 'components/hoc/ForceNavigation';

const StrategyBuilder = () => {
    const {selectOptions, list, strategyResults} = useSelector(state => ({...state.appConfig, ...state.watchlists, ...state.strategyBuilder}));
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (!list || !list.userWatchlistPerformance){
            dispatch(getWatchlists());
        }
    }, [dispatch, list]);

    useEffect(() => {
      return () => {
        dispatch(
          updateStrategyFilters({
            ...INITIAL_STRATEGY_FILTERS,
          })
        );
      }
    }, [dispatch]);

    const [lastUpdate, nextUpdate, lastRebalancing, nextRebalancing] = useMemo(() => {
      if (strategyResults && !isEmpty(strategyResults)){
        const {lastUpdate, nextUpdate, lastRebalancing, nextRebalancing} = strategyResults;
        return [lastUpdate, nextUpdate, lastRebalancing, nextRebalancing]
      }
      return [null, null, null, null]
    } ,[strategyResults]);
    

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const steps = useMemo(() => ['Build your strategy', 'Analyse results', 'Customized portfolio'], []);
    const runStrategyHandler = async (params, filters) => {
        dispatch(setStrategyFilters(filters));
        dispatch(runStrategy(params));
        setActiveStepIndex(1);
    }
    const onModifyStrategy = () => {
        setActiveStepIndex(0);
    }

    const handleErrorClosed = () => {
        setActiveStepIndex(0);
    }

    const onCustomizePortfolio = () => {
        setActiveStepIndex(2);
    }

    const onAnalyzeResults = () => {
        setActiveStepIndex(1);
    }

    return (
      <>
      <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
            {lastUpdate && nextUpdate && activeStepIndex>0 && (<Grid item xs={12} md={6}>
                <Autorenew /> <DateTitle component="span">Updates:</DateTitle>
                <Date component="span">Last: {lastUpdate} - Next: {nextUpdate}</Date>
            </Grid>)}
            {lastRebalancing && nextRebalancing && activeStepIndex>0 && (<div>
                <ShowChart /> <DateTitle component="span">Rebalancing:</DateTitle>
                <Date component="span">Last: {lastRebalancing} - Next: {nextRebalancing}</Date>
            </div>)}
          </Grid>
      <Container>
        <Stepper steps={steps} activeStepIndex={activeStepIndex} />
        {activeStepIndex === 0 ? (
          <BuildStrategy
            runStrategy={runStrategyHandler}
            options={selectOptions}
          />
        ) : activeStepIndex === 1 ? (
          <AnalyzeResults
            handleErrorClosed={handleErrorClosed}
            onModifyStrategy={onModifyStrategy}
            onCustomizePortfolio={onCustomizePortfolio}
          />
        ) : (
          <CustomizePortfolio onAnalyzeResults={onAnalyzeResults} />
        )}
      </Container>
      </>
    );
};

export default AuthRequire(StrategyBuilder);