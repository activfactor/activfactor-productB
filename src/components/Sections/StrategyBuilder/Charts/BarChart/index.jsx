import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../UI/Spinner";
import { Chart } from "react-google-charts";

class BarChart extends Component {

  getData = (strategy,benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]];
    }); 
    result.unshift(["Year","strategy","S&P TSX"]);
    return result;
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header}>{this.props.header}</div>
        <div className={classes.chartcontainer}>
        <Chart
          width={"95%"}
          height={"95%"}
          chartType="ColumnChart"
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          options={{
            // Material design options
            chartArea:{width: '90%', height:'90%'},
            legend: {position:'top'},
          }}
        />
        </div>
      </div>
    );
  }
}

export default BarChart;
