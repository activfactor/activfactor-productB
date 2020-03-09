import React, {useEffect, useCallback, useState} from 'react';
import { Container, Header } from './style';
import { useDispatch, useSelector } from 'react-redux';
import TableV2 from '../../Shared/TableV2';
import { getAllOrdersStatus, cancelOrder } from '../../../actions/Tradeit/tradeitTrade';
import { useOrdersStatusTransformer } from './hooks/useTransaction.hooks';
import Loader from '../../Shared/Loader';
import requireBrokerConnection from '../../hoc/requireBrokerConnection';

const TransactionPage = () => {
    const {portfolioOrdersStatus} = useSelector(state => state.trade);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const cancelOrderHandler = useCallback(async (orderNumber) => {
        if (orderNumber){
            setLoading(true);
            await dispatch(cancelOrder(orderNumber));
            await dispatch(getAllOrdersStatus);
            setLoading(false);
        }
    }, [dispatch, setLoading])

    const [tableData, tableHeaders] = useOrdersStatusTransformer(cancelOrderHandler);

    useEffect(() => {
        async function getAllOrders(){
            if (!portfolioOrdersStatus){
               await dispatch(getAllOrdersStatus());
               setLoading(false);
            }
        }
        getAllOrders();
    })
    if (loading){
        return <Loader wealthface color="black" />
    }
    return (
        <Container>
            <Header>
                Trasaction Status
            </Header>
            <TableV2 tableData={tableData} tableHeaders={tableHeaders} />
        </Container>
    );
};

export default requireBrokerConnection(TransactionPage);