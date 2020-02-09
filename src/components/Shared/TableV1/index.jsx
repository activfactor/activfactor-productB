import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "../../UI/Link";
import { getValue, getVariant } from "../../../utils/textFunctions";
import { getTickerDetails, updateTickerName } from "../../../actions/ticker";
import { updateLocation } from "../../../actions";
import OrderForm from "../../UI/OrderForm";
import { DataSingle, TableHeader, Value } from './style';

const TableV1 = ({ tableHeaders, tableData, withViewOption }) => {
  const [isModal, setIsModal] = useState(false);
  const [tickerName, setTickerName] = useState();
  const dispatch = useDispatch();

  const tradeHandler = tickerName => {
    setIsModal(true);
    setTickerName(tickerName);
  };

  const onCancelOrderHandler = () => {
    setIsModal(false);
    setTickerName(undefined);
  };

  const onEyeClickHandler = ticker => {
    dispatch(updateTickerName(ticker));
    dispatch(getTickerDetails(ticker));
    dispatch(updateLocation("/"));
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
                        return (
                            typeof(row)==='object' && row.tickerName ? (
                                <td key={row.tickerName} data-label="Ticker">
                                    <div className="_row-text-medium">{row.tickerName}</div>
                                    <div className="_row-text-small">
                                        {row.description}
                                    </div> 
                                </td>
                            ) : typeof(row)==='object' && row.length===2 && !row.trade ? (
                                <td key={(index+1)*100}>
                                    <Value variant={getVariant(row[0].value)}>{`${getValue(row[0].value).toFixed(2)}${row[0].unit ? row[0].unit : ''}`}</Value>
                                    <Value variant={getVariant(row[1].value)}>{`${getValue(row[1].value).toFixed(2)}${row[1].unit ? row[1].unit : ''}`}</Value>
                                </td>
                            ) : typeof(row)==='object' && row.trade ? (
                                <td key={(index+1)*100} className="_cta-container">
                                    <button
                                    onClick={() => tradeHandler(row.trade)}
                                    className="btn btn-primary"
                                    >
                                    Trade
                                    </button>
                                </td>
                            ) : (
                                <DataSingle key={(index+1)*100} variant={getVariant(row.value)}>{getValue(row.value).toFixed(2)}</DataSingle>
                            )
                        );
                      })}
                      {withViewOption && 
                      <td className="_cta-container">
                        <Link
                          to="/ticker-monitor"
                          onClick={() => onEyeClickHandler(arr[arr.length-1])}
                          nameOfClass="btn btn-outline-primary"
                        >
                          <i className="fas fa-eye" />
                        </Link>
                      </td>
                      }
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableV1;
