import React from 'react';
import TableV2 from '../../../Shared/TableV2';
import { TableWrapper } from '../style';
import { usePortfolioOrdersTransformer } from '../hooks/useOrderPortfolio.hooks';
const Step1 = () => {
    const [tableData, tableHeaders] = usePortfolioOrdersTransformer();

    return (
        <TableWrapper>
            <TableV2 tableData={tableData} tableHeaders={tableHeaders} />
        </TableWrapper>
    );
};

export default Step1;