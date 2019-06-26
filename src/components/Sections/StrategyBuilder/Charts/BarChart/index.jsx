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
        <div className={classes.chartcontainer}>
        <Chart
          width={"90%"}
          height={"99%"}
          chartType="BarChart"
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          options={{
            // Material design options
            chartArea: { width: "70%",height: "70%", color:'red' },
            legend: {position:'top'},
            colors: ['#b0120a', '#ffab91'],
          }}
        />
        </div>
      </div>
    );
  }
}

export default BarChart;
