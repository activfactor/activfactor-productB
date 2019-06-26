import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../UI/Spinner";
import { Chart } from "react-google-charts";

class AreaChart extends Component {
  getData = (strategy, benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]];
    });
    result.unshift(["Month", "Strategy", "S&P TSX"]);
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
              legend: { position: 'top'},
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "90%", height: "80%" }
            }}
          />
        </div>
      </div>
    );
  }
}

export default AreaChart;
