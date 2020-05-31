import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStrategies } from 'store/actions/strategies.actions';
import { setStrategyName } from 'store/actions/resources.actions';
import { HeadersWrapper } from './style';
import { StrategyCard, CardListing, AddButton, FeedBackAlert } from 'components/Custom/common';
import { DashboardSection } from 'components/Layout';
import { Link } from 'components/MaterialUIs';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { StrategiesSkeleton } from 'components/Skeleton';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { FETCH_STRATEGIES } from 'store/types';
import history from '../../../history';

const Strategies = () => {
    const {list} = useSelector(state => state.strategies);
    const dispatch = useDispatch();
    const [isLoading, error, done] = useApiInfo(FETCH_STRATEGIES);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

    const handleStrategyClick = (strategyName) => () => {
        dispatch(setStrategyName(strategyName));
    }

    const onAddStrategyClick = () => {
        history.push('/strategy/builder');
    }

    const renderContent = () => {
        const {userStrategyPerformance} = list;
        const numberOfAddButtons = 3-(userStrategyPerformance.length || 0)
        return (
            <>
            <CardListing repeat={3}>
                {userStrategyPerformance && userStrategyPerformance.length>0 && userStrategyPerformance.map((strategy, index) => {
                    const {lastRebalancing,nextRebalancing,strategyName,benchmarkName,tickers,performance} = strategy
                    const tableData = performance.map(item => ([{value: item.metric},{value: item.strategy, unit: '%'},{value: item.benchmark, unit:'%'}]));
                    return (
                        <StrategyCard 
                            key={`${index}_${strategyName}`}
                            strategyName={strategyName}
                            rebalancingLast={lastRebalancing}
                            rebalancingNext={nextRebalancing}
                            benchmark={benchmarkName}
                            tickersNumber={tickers}
                            tableData={tableData}
                            onClick={handleStrategyClick(strategyName)}
                            to="/strategies/monitor"
                        />
                    )
                })}
                {numberOfAddButtons>0 && !isMobile && (
                    Array.from(Array(numberOfAddButtons), (e,i) => {
                        return (
                            <AddButton key={`${i}_strategy`} onClick={onAddStrategyClick} />
                        )
                    })
                )}
            </CardListing>
            </>
        )
    }

    return (
        list && list.userStrategyPerformance && done ? (
            <DashboardSection margin="10px 0px" renderHeader={renderHeader} renderContent={renderContent}/>
        ) : isLoading ? <StrategiesSkeleton /> : error ? <FeedBackAlert isError={true} message={error}/> : <FeedBackAlert />
    );
};

export default Strategies;