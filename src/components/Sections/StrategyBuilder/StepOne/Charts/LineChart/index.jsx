import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from '../chart.module.scss';
import Spinner from '../../../../../UI/Spinner';

class Graph extends Component {


  getData = (strategy,benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [String(key), {v:strategy[key],f:`${Math.round(strategy[key]*100)/100}$`},{v:benchmark[key],f:`${Math.round(benchmark[key]*100)/100}$`}];
    }); 
    result.unshift(["Date","Strategy","S&P TSX"]);
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
            legend: {position:'top'},
            chartArea: { width: "79%",height: "80%" },
            curveType:'function',
            vAxis:{title: 'US Dolor'}
          }}
        />
        </div>
      </div>
    );
  }
}

export default Graph;
