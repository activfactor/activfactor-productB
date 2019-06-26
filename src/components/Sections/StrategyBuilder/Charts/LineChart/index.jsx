import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from '../chart.module.scss';
import Spinner from '../../../../UI/Spinner';

class Graph extends Component {


  getData = (strategy,benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), strategy[key], benchmark[key]];
    }); 
    result.unshift(["Date","Strategy","Benchmark"]);
    return result;
  }

  render = () => {
    return (
      <div className={classes.container}>
      <div className={classes.header}>{this.props.header}</div>
        <div className={classes.chartcontainer}>
        <Chart
          width={"99%"}
          height={"99%"}
          chartType="LineChart"
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          options={{
            chartArea: { width: "70%",height: "70%", color:'red' },
            hAxis: {
              title: "Date",
              minValue: 0
            },
            vAxis: {
              title: "Numbers"
            },
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
        </div>
      </div>
    );
  }
}

export default Graph;
