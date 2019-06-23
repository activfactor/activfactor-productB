import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from "./index.module.scss";
import Spinner from '../../../UI/Spinner';

class Table extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="Table"
          loader={<Spinner />}
          data={[
            ["Return", "Strategy", "S&P 500"],
            ["1 Month", -4.46, 4.46],
            ["3 Month", 3.46, -1.46],
            ["2 Years", 4.46, 4.46],
            ["1 Year", -4.46, 4.46],
            ["6 Month", 5.36, 2.46],
            ["3 Years", 4.46, -4.46],
            ["5 Years", -4.46, 4.46],
            ["7 Years", 4.46, -4.46],
            ["10 Years", 4.46, 4.46],
            ["Since 2008", -4.46, 4.46]
          ]}
          formatters={[
            {
              type: "ColorFormat",
              column: 1,
              options: {
                width: 120
              },
              ranges: [
                [-20000, 0, "white", "red"],
                [20000, null, "red", "#33ff33"]
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
