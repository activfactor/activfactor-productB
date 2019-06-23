import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from './index.module.scss';
import Spinner from '../../../UI/Spinner';

class Graph extends Component {


  getData = (obj) => {
    var result = Object.keys(obj).map(key => {
      return [String(key), obj[key]];
    }); 
    result.unshift(["Sectors","percentage"]);
    return result;
  }

  render = () => {
    return (
      <div className={classes.container}>
      <div className={classes.header}>{this.props.header}</div>
      {/* <div className={classes.chartDiv}> */}
      <Chart
        width={"90%"}
        height={"80%"}
        chartType={this.props.chartType}
        loader={<Spinner />}
        data={this.getData(this.props.data)}
        options={{
          pieHole: 0.5,
          chartArea: { width: "85%",height: "85%", color:'red' },
          hAxis: {
            title: "Total Population",
            minValue: 0
          },
          vAxis: {
            title: "City"
          },
          with:"100%",
          height:"100%"
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
      {/* </div> */}
      </div>
    );
  }
}

export default Graph;
