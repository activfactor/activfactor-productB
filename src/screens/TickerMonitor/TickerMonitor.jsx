import React, {useEffect} from 'react';
import { TickerMonitorSkeleton } from 'components/Skeleton';
import { useApiInfo } from '../hooks/screens.hooks';
import { FETCH_TICKER_DETAILS } from 'store/types';
import { fetchTickerDetails } from 'store/actions/ticker.actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import TopHeader from './TopHeader';

const TickerMonitor = () => {
    const dispatch = useDispatch();
    const { tickerDetails, tickerId } = useSelector(state => ({...state.ticker, ...state.resources}))
    const [isLoading, error, done] = useApiInfo(FETCH_TICKER_DETAILS);
    
    useEffect(() => {
        if (!tickerDetails && tickerId){
            dispatch(fetchTickerDetails(tickerId))
        } else if (!tickerId){
            history.push('/dashboard');
        }
    }, [dispatch, tickerDetails, tickerId]);

    if (isLoading){
        return (
            <TickerMonitorSkeleton />
        );
    } else if (error){
        return (
            <h1>{error}</h1>
        )
    } else if (done) {
        return (
            <TopHeader />
        )
    } else {
        return (
            <h1>Something wrong</h1>
        )
    }
};

export default TickerMonitor;