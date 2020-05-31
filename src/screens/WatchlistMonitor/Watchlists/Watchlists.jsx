import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlists } from 'store/actions/watchlist.actions';
import { setWatchlistName } from 'store/actions/resources.actions';
import { HeadersWrapper } from './style';
import { WatchlistCard, CardListing, AddButton, FeedBackAlert } from 'components/Custom/common';
import { DashboardSection } from 'components/Layout';
import { Link } from 'components/MaterialUIs';
import { WatchlistsSkeleton } from 'components/Skeleton';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { FETCH_WATCHLISTS } from 'store/types';
import { useTheme, useMediaQuery } from '@material-ui/core';
import history from '../../../history';

const Strategies = () => {
    const {list} = useSelector(state => state.watchlists);
    const dispatch = useDispatch();
    const [isLoading, error, done] = useApiInfo(FETCH_WATCHLISTS);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
            <CardListing repeat={4}>
                {userWatchlistPerformance && userWatchlistPerformance.length>0 && userWatchlistPerformance.map((watchlist, index) => {
                    const {watchlistName,tickers,performance} = watchlist
                    const tableData = Object.keys(performance).map(obj => ([{value: obj},{value: performance[obj], unit: '%'}]));
                    return (
                        <WatchlistCard
                            key={`${index}_${watchlistName}`}
                            watchlistName={watchlistName}
                            tickersNumber={tickers}
                            tableData={tableData}
                            to="/watchlists/monitor"
                            onClick={handleWatchlistClick(watchlistName)}
                        />
                    )
                })}
                {numberOfAddButtons>0 && !isMobile && (
                    Array.from(Array(numberOfAddButtons), (e,i) => {
                        return (
                            <AddButton key={`${i}_watchlist_screen`} onClick={onAddWatchlistClick} />
                        )
                    })
                )}
            </CardListing>
            </>
        )
    }

    return (
        list && list.userWatchlistPerformance && done ? (
            <DashboardSection renderHeader={renderHeader} renderContent={renderContent}/>
        ) : isLoading ? <WatchlistsSkeleton /> : error ? <FeedBackAlert isError={true} message={error}/> : <FeedBackAlert />
    );
};

export default Strategies;