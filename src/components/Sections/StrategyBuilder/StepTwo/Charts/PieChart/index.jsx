import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from '../chart.module.scss';
import Spinner from '../../../../../UI/Spinner';
import Header from '../../../../../UI/Header';

class Graph extends Component {

  getData = (obj) => {
    const result = Object.keys(obj).map(key => {
      return [String(key), obj[key]];
    }); 
    result.unshift(["Sectors","percentage"]);
    return result;
  }

  render = () => {
    return (
      <div className={classes.container}>
        <Header header={this.props.header} />
        <div className={classes.chartcontainer}>
        <Chart
          width={"99%"}
          height={"99%"}
          chartType="PieChart"
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.data)}
          options={{
            pieHole: 0.5,
            chartArea: {left:70, width: "95%",height: "95%" },
            with:"100%",
            height:"100%",
          }}
        />
        </div>
      </div>
    );
  }
}

export default Graph;
