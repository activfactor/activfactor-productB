import React, { Component } from "react";
import classes from "./index.module.scss";

class TableChart extends Component {
  CapString = (textString) => {
    return textString.charAt(0).toUpperCase() + textString.slice(1);
  } 

  render() {
    return (
      <table className={classes.tableContainer}>
        <thead className={classes.table__header}>
          <tr className={classes.table__headerow}>
            <th scope="col">{this.props.tableName}</th>
            <th scope="col">strategy</th>
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
                    >
                      <span className={classes.title}>
                        {this.CapString(String(row).split("_").join(" "))}
                      </span>
                    </td>
                    <td
                      data-label="Strategy"
                      className={
                        this.props.strategy[row] > 0
                          ? classes.success
                          : classes.warning
                      }
                    >
                      {this.props.strategy[row] ? String(this.props.strategy[row].toFixed(2))+ `${["1_year_sharpe_ratio","3_years_sharpe_ratio","5_years_sharpe_ratio","7_years_sharpe_ratio","beta","sharpe_ratio","sortino_ratio","information_ratio"].includes(String(row)) ? '' : '%'}` : "---"}
                    </td>
                    <td
                      data-label={this.props.benchmark}
                      className={
                        this.props.benchmark[row] > 0
                          ? classes.success
                          : classes.warning
                      }
                    >
                      {this.props.benchmark[row] ? String(this.props.benchmark[row].toFixed(2))+ `${["1_year_sharpe_ratio","3_years_sharpe_ratio","5_years_sharpe_ratio","7_years_sharpe_ratio","beta","sharpe_ratio","sortino_ratio","information_ratio"].includes(String(row)) ? '' : '%'}` : "---"}
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    );
  }
}

export default TableChart;
