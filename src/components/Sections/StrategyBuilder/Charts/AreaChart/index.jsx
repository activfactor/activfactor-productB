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
        <div className={classes.chartcontainer}>
          <Chart
            width={"99%"}
            height={"99%"}
            chartType="AreaChart"
            loader={<Spinner color="black"/>}
            data={this.getData(this.props.strategy,this.props.benchmark)}
            options={{
              title: "Company Performance",
              hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              legend: { position: 'top'},
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "65%", height: "70%" }
            }}
          />
        </div>
      </div>
    );
  }
}

export default AreaChart;
