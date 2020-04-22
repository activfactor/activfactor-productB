import React, {useEffect, useState} from 'react';
import { previewOrders, previewOrdersV2 } from '../../../../actions/Tradeit/tradeitTrade';
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper} from '../style';
import LoaderGif from '../../../Shared/LoaderGif';
import { useOrderPreviewTransformer } from '../hooks/useOrderPortfolio.hooks';
import TableV2 from '../../../Shared/TableV2';

const Step2 = () => {
    const {portfolioOrdersPreview} = useSelector(state => state.trade);

    const dispatch = useDispatch();

    const [tableData, tableHeaders] = useOrderPreviewTransformer();

    useEffect(() => {
        if (!portfolioOrdersPreview){
            dispatch(previewOrders());
        }
    }, [portfolioOrdersPreview,dispatch])

    return (
        <TableWrapper>
            <TableV2 tableData={tableData} tableHeaders={tableHeaders} />
        </TableWrapper>
    );
};

export default Step2;