import React, { Component } from "react";
import classes from "./index.module.scss";
import { CapString } from '../../../../../../utils/textFunctions';

class TableChart extends Component {

  render() {
    return (
      <div className="card__table">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead className={classes.table__header}>
              <tr className={classes.table__headerow}>
                <th scope="col">{this.props.tableName}</th>
                <th scope="col">Strategy</th>
                <th scope="col">{this.props.benchmark_name}</th>
              </tr>
            </thead>

            <tbody className={classes.tablebody}>
            {this.props.strategy
              ? Object.keys(this.props.strategy).map((row, i) => {
                return (
                  <tr className={classes.table__bodyrow} key={i}>
                    <td
                      data-label={this.props.tableName}
                      className="_row-name"
                    >
                      <span className={classes.title}>
                        {CapString(String(row).split("_").join(" "))}
                      </span>
                    </td>
                    <td
                      data-label="Strategy"
                      className={`_td-strategy ${this.props.strategy[row] > 0 ? '_success' : '_warning'}`}
                    >
                      {this.props.strategy[row] ? String(this.props.strategy[row].toFixed(2))+ `${["1_year_sharpe_ratio","3_years_sharpe_ratio","5_years_sharpe_ratio","7_years_sharpe_ratio","beta","sharpe_ratio","sortino_ratio","information_ratio"].includes(String(row)) ? '' : '%'}` : "---"}
                    </td>
                    <td
                      data-label={this.props.benchmark}
                      className={`_td-benchmark ${this.props.benchmark[row] > 0 ? '_success' : '_warning'}`}
                    >
                      {this.props.benchmark[row] ? String(this.props.benchmark[row].toFixed(2))+ `${["1_year_sharpe_ratio","3_years_sharpe_ratio","5_years_sharpe_ratio","7_years_sharpe_ratio","beta","sharpe_ratio","sortino_ratio","information_ratio"].includes(String(row)) ? '' : '%'}` : "---"}
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
