import React, {useEffect} from 'react';
import { placeOrders } from '../../../../actions/Tradeit/tradeitTrade';
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper} from '../style';
import { useOrdersRecieptTransformer } from '../hooks/useOrderPortfolio.hooks';
import TableV2 from '../../../Shared/TableV2';

const Step3 = () => {
    const {portfolioOrdersReciepts} = useSelector(state => state.trade);

    const dispatch = useDispatch();

    const [tableData, tableHeaders] = useOrdersRecieptTransformer();

    useEffect(() => {
        async function getPreviewOrders(){
            if (!portfolioOrdersReciepts){
                await dispatch(placeOrders());
            }
        }
        getPreviewOrders();
    }, [portfolioOrdersReciepts,dispatch])

    return (
        <TableWrapper>
            <TableV2 tableData={tableData} tableHeaders={tableHeaders} />
        </TableWrapper>
    );
};

export default Step3;