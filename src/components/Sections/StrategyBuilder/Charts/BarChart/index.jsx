import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../UI/Spinner";
import { Chart } from "react-google-charts";

class BarChart extends Component {

  getData = (strategy,benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]];
    }); 
    result.unshift(["Year","Performance_Strategy","Performance_Benchmark"]);
    return result;
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header}>{this.props.header}</div>
        <Chart
          width={"95%"}
          height={"80%"}
          chartType="Bar"
          loader={<Spinner />}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          options={{
            // Material design options
            chartArea: { width: "70%",height: "70%", color:'red' },
            chart: {
              title: "Company Performance",
              subtitle: "Sales, Expenses, and Profit: 2014-2017"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}

export default BarChart;
