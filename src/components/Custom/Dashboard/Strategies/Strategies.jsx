import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStrategies, clearStrategyDetails } from 'store/actions/strategies.actions';
import { setStrategyName } from 'store/actions/resources.actions';
import { HeadersWrapper, ButtonWrapper } from '../commonStyle';
import { StrategyCard } from '../../common';
import { DashboardSection } from '../../../Layout';
import { Link, Button } from '../../../MaterialUIs';
import { StyledGrid, AddStrategyButton } from './style';
import { StrategiesSkeleton } from '../../../Skeleton';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { FETCH_STRATEGIES } from 'store/types';
import history from '../../../../history';
import { useTheme, useMediaQuery } from '@material-ui/core';

const Strategies = () => {
    const {list} = useSelector(state => state.strategies);
    const dispatch = useDispatch();
    const [isLoading, error, done] = useApiInfo(FETCH_STRATEGIES);
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // fetch all strategies in dashboard
    useEffect(() => {
        if(!list.userStrategyPerformance){
            dispatch(fetchStrategies());
        }
    }, [list, dispatch]);

    //render the dashboard section header
    const renderHeader = () => {
        const {lastUpdate} = list;
        return (
            <>
                <HeadersWrapper>
                    <h2>My Strategies</h2>
                    {lastUpdate && <p>Last update: {lastUpdate}</p>}
                </HeadersWrapper>
                <Link label="+ Build a new strategy" to="/strategy/builder" theme="primary" fontSize="16px" align="left"/>
            </>
        )
    }

    const onAddStrategyClick = () => {
        history.push('/strategy/builder');
    }

    const handleStrategyClick = (strategyName) => () => {
        dispatch(setStrategyName(strategyName));
    }

    const onViewAllClick = () => {
        dispatch(clearStrategyDetails());
        history.push('/strategy/monitor');
    }

    const renderContent = () => {
        const {userStrategyPerformance} = list;
        const dashboardStrategies = userStrategyPerformance && userStrategyPerformance.length>0 && userStrategyPerformance.slice(0, 3);
        const numberOfAddButtons = 3 - (dashboardStrategies.length | 0);
        return (
            <>
            <StyledGrid container justify="space-between">
                {dashboardStrategies && dashboardStrategies.length>0 && dashboardStrategies.map((strategy,index) => {
                    const {lastRebalancing,nextRebalancing,strategyName,benchmarkName,tickers,performance} = strategy
                    const tableData = performance.map(item => ([{value: item.metric},{value: item.strategy, unit: '%'},{value: item.benchmark, unit:'%'}]));
                    return (
                        <StyledGrid key={`${index}_${strategy.strategyName}`} style={{marginBottom: '20px', width: isMobile ? '100%' : 'auto'}}>
                            <StrategyCard 
                                strategyName={strategyName}
                                rebalancingLast={lastRebalancing}
                                rebalancingNext={nextRebalancing}
                                benchmark={benchmarkName}
                                tickersNumber={tickers}
                                tableData={tableData}
                                onClick={handleStrategyClick(strategyName)}
                                to="/strategy/monitor"
                            />
                        </StyledGrid>
                    )
                })}
                {numberOfAddButtons > 0 && !isMobile && Array.from(Array(numberOfAddButtons), (e,i) => {
                    return (
                        <AddStrategyButton key={`${i}_strategy`} disableTouchRipple={true} onClick={onAddStrategyClick} variant="outlined" color="primary">+</AddStrategyButton>
                    )
                })}
            </StyledGrid>
            {userStrategyPerformance.length>3 && 
                <StyledGrid container justify="center" alignItems="center">
                    <ButtonWrapper>
                        <Button label="View all" fullWidth={true} onClick={onViewAllClick}/>
                    </ButtonWrapper>
                </StyledGrid>
            }
            </>
        )
    }

    return (
        list && list.userStrategyPerformance && done ? (
            <DashboardSection margin="30px 0px" renderHeader={renderHeader} renderContent={renderContent}/>
        ) : isLoading ? <StrategiesSkeleton /> : error ? <h1>error</h1> : ''
    );
};

export default Strategies;