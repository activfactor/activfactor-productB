import React, {useEffect, useMemo} from 'react';
import { TickerMonitorSkeleton } from 'components/Skeleton';
import { useApiInfo } from '../hooks/screens.hooks';
import { FETCH_TICKER_DETAILS } from 'store/types';
import { fetchTickerDetails, clearTickerDetails} from 'store/actions/ticker.actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import TopHeader from './TopHeader';
import { ColumnChart } from 'components/Charts';
import LineChart from 'components/Custom/SingleSerieLineChart';
import { CardListing, ChartCard } from 'components/Custom/common';
import { TickerCard } from 'components/Custom/common';
import Transformer from './Service/transformer.service';
import { isEmpty } from 'utils/app.utils';

const TickerMonitor = () => {
    const dispatch = useDispatch();
    const { tickerDetails, tickerId } = useSelector(state => ({...state.ticker, ...state.resources}))
    const [isLoading, error, done] = useApiInfo(FETCH_TICKER_DETAILS);

    const detailsData = useMemo(() => {
        return Transformer(tickerDetails);
    }, [tickerDetails]);

    useEffect(() => {
        if (!tickerDetails && tickerId){
            dispatch(fetchTickerDetails(tickerId))
        } else if (!tickerId){
            history.push('/dashboard');
        }
    }, [dispatch, tickerDetails, tickerId]);

    useEffect(() => {
        return () => {
            dispatch(clearTickerDetails());
        }
    }, [dispatch]);

    if (isLoading){
        return (
            <TickerMonitorSkeleton />
        );
    } else if (error){
        return (
            <h1>{error}</h1>
        )
    } else if (done && !isEmpty(detailsData)) {
        return (
            <>
                <TopHeader />
                <ChartCard title="Factor intensity" margin="0px 0px 20px 0px">
                    <ColumnChart dataUnit='' showLegends={true} data={detailsData.factorRanking.data} categories={detailsData.factorRanking.categories} name="Factor Intensity" showXaxisLabel={true} />  
                </ChartCard>
                <CardListing repeat={2}>
                    <TickerCard title="Valuation" tableData={detailsData.valuation} />
                    <TickerCard title="Profitability" tableData={detailsData.profitability} />
                    <TickerCard title="Technical" tableData={detailsData.technical} />
                    <TickerCard title="Risk" tableData={detailsData.risk} />
                </CardListing>
                <ChartCard title="Company prices" margin="20px 0px">
                    <LineChart showLegends={false} showFullXLabel={true} data={detailsData.dailyPrice.data} categories={detailsData.dailyPrice.categories} name="Company prices" showXaxisLabel={true}/>
                </ChartCard>
            </>
        )
    } else {
        return (
            <h1>Something wrong</h1>
        )
    }
};

export default TickerMonitor;