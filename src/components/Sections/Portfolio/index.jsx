import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation, updateLoadingState } from '../../../actions';
import { getBalance, getPositions } from '../../../actions/Tradeit/tradeitPortfolio';
import requireAuth from '../../hoc/requireAuth';
import { ConnectBrokerWrapper, Wrapper } from './style';
import Link from '../../UI/Link';
import Header from '../../Shared/AccountSumBlock';
import Loader from '../../Shared/Loader';
import {useTransformer} from './hooks/usePortfolio.hooks';
import TableV1 from '../../Shared/TableV1';

const Portfolio = () => {
    const dispatch = useDispatch();
    const tradeitObj = useSelector(state => state.tradeitReducers);
    const loaded = useSelector(state => state.general.loaded);

    useEffect(() => {
        const {accountOverview, positions, accountNumber, token} = tradeitObj;
        const gettingInformation = async () => {
            if (accountNumber && token){
                if (!accountOverview){
                    await dispatch(getBalance());
                }
                if (!positions){
                    await dispatch(getPositions());
                }
                dispatch(updateLoadingState(true));
            } else {
                dispatch(updateLocation('/portfolio'));
                dispatch(updateLoadingState(true));
            }
        }
        gettingInformation();
    }, []);

    const [tableData, tableHeaders] = useTransformer(tradeitObj);

    const renderContent = () => {
        const { accountNumber, token} = tradeitObj;
        if (!accountNumber || !token){
            return (
                <ConnectBrokerWrapper>
                    <p>you don't have any connected broker, please connect to one to see this page</p>
                    <Link to="/brokers" nameOfClass="btn btn-primary">Connect to broker</Link>
                </ConnectBrokerWrapper>
            );
        } else {
            return (
                <>
                <Header />
                <TableV1 tableData={tableData} tableHeaders={tableHeaders} />
                </>
            )
        }
    }
    if (loaded){
        return (
            <Wrapper>
                {renderContent()}
            </Wrapper>
        );
    } else {
        return (
            <Loader wealthface color="black"/>
        );
    }
};

export default requireAuth(Portfolio);