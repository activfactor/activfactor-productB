import React, { Component } from "react";
import classes from "./index.module.scss";

class TableChart extends Component {
  render() {
    return (
      <table className={classes.tableContainer}>
        <thead className={classes.table__header}>
          <tr className={classes.table__headerow}>
            <th scope="col">{this.props.tableName}</th>
            <th scope="col">strategy</th>
            <th scope="col">S&amp;P TSX</th>
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
                        {row.replace("_", " ")}
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
                      {this.props.strategy[row] ? String(this.props.strategy[row].toFixed(2))+"%" : "none"}
                    </td>
                    <td
                      data-label="S&amp;P TSX"
                      className={
                        this.props.benchmark[row] > 0
                          ? classes.success
                          : classes.warning
                      }
                    >
                      {this.props.benchmark[row] ? String(this.props.benchmark[row].toFixed(2))+"%" : "none"}
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
