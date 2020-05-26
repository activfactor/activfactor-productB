import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlists } from 'store/actions/watchlist.actions';
import { setWatchlistName } from 'store/actions/resources.actions';
import { HeadersWrapper, AddWatchlisButton } from './style';
import { WatchlistCard } from 'components/Custom/common';
import { DashboardSection } from 'components/Layout';
import { Link } from 'components/MaterialUIs';
import { WatchlistsSkeleton } from 'components/Skeleton';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { FETCH_WATCHLISTS } from 'store/types';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import history from '../../../history';

const Strategies = () => {
    const {list} = useSelector(state => state.watchlists);
    const dispatch = useDispatch();
    const [isLoading, error, done] = useApiInfo(FETCH_WATCHLISTS);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // fetch all strategies in dashboard
    useEffect(() => {
        if(!list.userWatchlistPerformance){
            dispatch(getWatchlists());
        }
    }, [list, dispatch]);

    //render the dashboard section header
    const renderHeader = () => {
        const {lastUpdate} = list;
        return (
            <>
                <HeadersWrapper>
                    <h2>My Watchlist</h2>
                    {lastUpdate && <p>Last update: {lastUpdate}</p>}
                </HeadersWrapper>
                <Link label="+ New strategy" to="/strategy/builder" theme="primary" fontSize="16px" align="left"/>
            </>
        )
    }

    const handleWatchlistClick = (watchlistName) => () => {
        dispatch(setWatchlistName(watchlistName));
    }

    const onAddWatchlistClick = () => {
        history.push('/strategy/builder');
    }

    const renderContent = () => {
        const {userWatchlistPerformance} = list;
        const numberOfAddButtons = 4 - (userWatchlistPerformance.length || 0);
        return (
            <>
            <Grid container justify="space-between">
                {userWatchlistPerformance && userWatchlistPerformance.length>0 && userWatchlistPerformance.map(strategy => {
                    const {watchlistName,tickers,performance} = strategy
                    const tableData = Object.keys(performance).map(obj => ([{value: obj},{value: performance[obj], unit: '%'}]));
                    return (
                        <Grid item xs={12} md={4} lg={3} style={{marginBottom: '20px'}}>
                            <WatchlistCard
                                watchlistName={watchlistName}
                                tickersNumber={tickers}
                                tableData={tableData}
                                to="/watchlist/monitor"
                                onClick={handleWatchlistClick(watchlistName)}
                            />
                        </Grid>
                    )
                })}
                {numberOfAddButtons>0 && !isMobile && (
                    Array.from(Array(numberOfAddButtons), (e,i) => {
                        return (
                            <AddWatchlisButton key={`${i}_watchlist_screen`} disableFocusRipple={true} disableTouchRipple={true} onClick={onAddWatchlistClick} variant="outlined" color="primary">+</AddWatchlisButton>
                        )
                    })
                )}
            </Grid>
            </>
        )
    }

    return (
        list && list.userWatchlistPerformance && done ? (
            <DashboardSection renderHeader={renderHeader} renderContent={renderContent}/>
        ) : isLoading ? <WatchlistsSkeleton /> : error ? <h1>error</h1> : ''
    );
};

export default Strategies;