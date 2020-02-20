import React, { useState } from "react";
import { getValue, getVariant } from "../../../utils/textFunctions";
import OrderForm from "../../UI/OrderForm";
import { DataSingle, TableHeader, LoaderContainer } from './style';
import LoadingState from '../LoadingState';
import {isNumber} from 'validate.js';

const TableV2 = ({ tableHeaders, tableData }) => {
  const [isModal, setIsModal] = useState(false);
  const [tickerName, setTickerName] = useState();

  const tradeHandler = tickerName => {
    setIsModal(true);
    setTickerName(tickerName);
  };

  const onCancelOrderHandler = () => {
    setIsModal(false);
    setTickerName(undefined);
  };

  const renderOrderForm = () => {
    if (tickerName && isModal) {
      return (
        <OrderForm
          orderSymbol={tickerName}
          onCancelHandler={onCancelOrderHandler}
        />
      );
    }
  };

  if (tableHeaders && tableData && tableHeaders.length>0 && tableData.length>0){
      return (
        <React.Fragment>
          {renderOrderForm()}
          <div className="card__table">
            <div className="table-responsive">
              <table className="table table-hover">
                <TableHeader>
                  <tr>
                    {tableHeaders.map(header => {
                      return (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </TableHeader>
                <tbody>
                  {tableData &&
                    tableData.map((arr, i) => {
                      return (
                        <tr key={(i+1)*10}>
                          {arr.map((row, index) => {
                            return typeof row === "object" && row.tickerName ? (
                              <td key={row.tickerName}>
                                <div className="_row-text-medium">
                                  {row.tickerName}
                                </div>
                                <div className="_row-text-small">
                                  {row.description}
                                </div>
                              </td>
                            ) : typeof row === "object" && row.trade ? (
                              <td
                                key={(index + 1) * 100}
                                className="_cta-container"
                              >
                                <button
                                  onClick={() => tradeHandler(row.trade)}
                                  className="btn btn-primary"
                                >
                                  Buy
                                </button>
                              </td>
                            ) : (
                              <td>
                                <DataSingle
                                  key={(index + 1) * 100}
                                  variant={isNumber(row.value) ? getVariant(row.value) : row.value==='SUCCESS' ? 'success' : row.value==='ERROR' ? 'danger' : ''}
                                >{`${isNumber(row.value) ? getValue(row.value).toFixed(2) : row.value}${
                                  row.unit ? row.unit : ""
                                }`}</DataSingle>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      );
  } else {
      return (
        <LoaderContainer>
            <LoadingState width="50px" height="50px" />
        </LoaderContainer>
      )
  }
};

export default TableV2;
