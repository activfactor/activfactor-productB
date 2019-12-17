import React, { Component } from "react";
import classes from "./index.module.scss";
import { CapString } from '../../../../../../utils/textFunctions';
import Tooltip from '../../../../../UI/Tooltip';

class TableChart extends Component {

  render() {
    const {tooltips} = this.props;
    return (
      <div className="card__table _full-height-table">
          <table className="table table-borderless table-hover">
            <thead className={classes.table__header}>
              <tr className={classes.table__headerow}>
                <th className="_font-title _normal" scope="col">{this.props.tableName}</th>
                <th scope="col">Strategy</th>
                <th scope="col">{this.props.benchmark_name}</th>
              </tr>
            </thead>
          </table>
        <div className="table-responsive">
          <table className="table table-borderless table-hover">
            <tbody>
            {this.props.strategy
              ? Object.keys(this.props.strategy).map((row, i) => {
                return (
                  <tr key={i}>
                    <td data-label={this.props.tableName} className="_td-title">
                      <div className={classes.tableTooltipAndContent}>
                      {CapString(
                        String(row)
                          .split("_")
                          .join(" ")
                      )}
                      {tooltips && tooltips[row] ? <Tooltip direction="bottom" text={tooltips[row]} /> : ''}
                      </div>
                    </td>
                    <td
                      data-label="Strategy"
                      className={`_td-strategy ${
                        this.props.strategy[row] > 0
                          ? "text-primary"
                          : "text-danger"
                      }`}
                    >
                      {this.props.strategy[row]
                        ? String(this.props.strategy[row].toFixed(2)) +
                          `${
                            [
                              "Sharpe_Ratio",
                              "Sortino_Ratio",
                              "AVG_Number_Of_Trades",
                              "1_year_sharpe_ratio",
                              "3_years_sharpe_ratio",
                              "5_years_sharpe_ratio",
                              "7_years_sharpe_ratio",
                              "beta",
                              "sharpe_ratio",
                              "sortino_ratio",
                              "information_ratio",
                              "yearly_avg_#_of_trades",
                              "Beta_(CAPM)"
                            ].includes(String(row))
                              ? ""
                              : "%"
                          }`
                        : "--"}
                    </td>
                    <td
                      data-label={this.props.benchmark}
                      className={`_td-benchmark ${
                        this.props.benchmark[row] > 0
                          ? "text-primary"
                          : "text-danger"
                      }`}
                    >
                      {this.props.benchmark[row]
                        ? String(this.props.benchmark[row].toFixed(2)) +
                          `${
                            [
                              "Sharpe_Ratio",
                              "Sortino_Ratio",
                              "AVG_Number_Of_Trades",
                              "1_year_sharpe_ratio",
                              "3_years_sharpe_ratio",
                              "5_years_sharpe_ratio",
                              "7_years_sharpe_ratio",
                              "beta",
                              "sharpe_ratio",
                              "sortino_ratio",
                              "information_ratio",
                              "yearly_avg_#_of_trades",
                              "Beta_(CAPM)"
                            ].includes(String(row))
                              ? ""
                              : "%"
                          }`
                        : "--"}
                    </td>
                  </tr>
                );
              })
              : ""}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableChart;
