import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../../UI/Spinner";
import { Chart } from "react-google-charts";

class BarChart extends Component {
  getData = (strategy, benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [
        String(key),
        {v:strategy[key]/100, f:`${Math.round(strategy[key]*100)/100}%`},
        {v:benchmark[key]/100, f:`${Math.round(benchmark[key]*100)/100}%`}
      ];
    });
    result.unshift([this.props.chartName, "strategy", "S&P TSX"]);
    return result;
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header}>{this.props.header}</div>
        <div className={classes.chartcontainer}>
          <Chart
            pattern= {"#%"}
            width={"95%"}
            height={"95%"}
            chartType="ColumnChart"
            loader={<Spinner color="black" />}
            data={this.getData(this.props.strategy, this.props.benchmark)}
            options={{
              // Material design options
              chartArea: {left:70, width: "86%", height: "90%" },
              legend: { position: "top" },
              vAxis: { minValue: -1, maxValue:1, format:"#%"}
            }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
