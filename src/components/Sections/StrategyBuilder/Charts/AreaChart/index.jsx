import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../UI/Spinner";
import { Chart } from "react-google-charts";

class AreaChart extends Component {
  getData = (strategy, benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]];
    });
    result.unshift(["Month", "Performance_Strategy", "Performance_Benchmark"]);
    return result;
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header}>{this.props.header}</div>
        <Chart
          width={"95%"}
          height={"80%"}
          chartType="AreaChart"
          loader={<Spinner />}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          options={{
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "70%", height: "70%" }
            // lineWidth: 25
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default AreaChart;
