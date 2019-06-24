import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from "./index.module.scss";
import Spinner from '../../../../UI/Spinner';

class Table extends Component {
  getData(strategy,benchmark){
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]]
    })
    result.unshift(["return", "strategy","benchmark"]);
    return result;
  }

  render() {
    return (
      <div className={classes.container}>
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="Table"
          loader={<Spinner />}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          formatters={[
            {
              type: "ColorFormat",
              column: 1,
              options: {
                width: 120
              },
              ranges: [
                [-20000, 0, "#FF0000"],
                [20000, null, "red", "#109CF1"]
              ]
            },
            {
              type: "ColorFormat",
              column: 2,
              options: {
                width: 120
              },
              ranges: [
                [-20000, 0, "#FF0000"],
                [20000, null, "red", "#109CF1"]
              ]
            }
          ]}
          options={{
            allowHtml: true,
            // showRowNumber: true,
            width: "100%",
            height: "100%"
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
  }
}

export default Table;
