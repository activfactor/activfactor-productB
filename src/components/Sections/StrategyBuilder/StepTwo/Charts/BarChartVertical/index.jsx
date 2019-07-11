import React, { Component } from "react";
import classes from "../chart.module.scss";
import Spinner from "../../../../../UI/Spinner";
import { Chart } from "react-google-charts";
import { CapString } from '../../../../../../utils/textFunctions';

class BarChart extends Component {
    getFactorColor(factor){
        const factorString = String(factor).split('_')[0];
        if (factorString === 'momentum'){
            return "#2a5ebe"
        } else if (factorString === 'value') {
            return "#e6a52e"
        } else if (factorString === 'size'){
            return "#830c7d"
        } else if (factorString === 'volatility'){
            return "#168a2f"
        } else if (factorString === 'investment'){
            return "#ce5a90"
        } else {
            return "#79b5d8"
        }
    }
  getData = factor => {
    const result = Object.keys(factor).map(key => {
      return [
        CapString(String(key).split('_')[0]),
        factor[key],
        `color : ${this.getFactorColor(key)}; font-size: 4px`,
        `${CapString(String(key).split('_')[0])} ${factor[key]}`
      ];
    });
    result.unshift([this.props.chartName, "factor intensity", { role: 'style' } , {type: 'string', role: 'tooltip'}]);
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
            chartType="BarChart"
            loader={<Spinner color="black" />}
            data={this.getData(this.props.factor)}
            options={{
              // Material design options
              chartArea: {left:74, width: "82%", height: "90%" },
              legend: { position: "none" },
              animation: {
                startup: true,
                easing: 'out',
                duration: 1500,
              },
              vAxis:{
                textStyle: {
                    fontSize : 11
                  },
              },
              hAxis:{minValue: -100 , maxValue: 100}
              
            }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
