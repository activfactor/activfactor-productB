import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from "./index.module.scss";
import Spinner from '../../../../UI/Spinner';

class Table extends Component {
  getData(strategy,benchmark){
    const result = Object.keys(strategy).map(key => {
      return [String(key).split("_").join(" "), strategy[key], benchmark[key]]
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
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          formatters={[
            {
              type: "ColorFormat",
              column: 1,
              ranges: [
                [-20000, 0, "#FF0000"],
                [0, 20000, "green"]
              ]
            },
            {
              type: "ColorFormat",
              column: 2,
              ranges: [
                [-20000, 0, "#FF0000"],
                [0, 20000, "green"]
              ]
            }
          ]}
          options={{
            allowHtml: true,
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    );
  }
}

export default Table;
