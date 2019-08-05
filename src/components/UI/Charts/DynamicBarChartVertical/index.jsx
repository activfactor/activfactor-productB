import React, { Component } from "react";
// import classes from "../index.module.scss";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import { CapString } from "../../../../utils/textFunctions";
import Header from "../../../UI/Header";
import DropDown from "../../../UI/DropDown";

class BarChart extends Component {
  getFactorColor(factor) {
    const factorString = String(factor).split("_")[0];
    switch (factorString) {
      case "momentum":
        return "#2a5ebe";
      case "value":
        return "#e6a52e";
      case "size":
        return "#830c7d";
      case "volatility":
        return "#168a2f";
      case "investment":
        return "#79b5d8";
      default:
        return "Orange";
    }
  }
  getData = factor => {
    const result = Object.keys(factor).map(key => {
      return [
        CapString(String(key).split("_")[0]),
        factor[key],
        `color : ${factor[key] > 0 ? '#2a5ebe' : '#a5070c'}; font-size: 20px`,
        `${CapString(String(key).split("_")[0])} ${factor[key]}%`
      ];
    });
    result.unshift([
      this.props.chartName,
      "factor intensity",
      { role: "style" },
      { type: "string", role: "tooltip" }
    ]);
    return result;
  };

  render() {
    return (
      <div className="charts-card-item">

        <Header header={this.props.header} nameOfClass="with-select">
          <DropDown
            value={this.props.option}
            color="blue"
            DropDownChangeHandler={this.props.DropDownChangeHandler}
          >
            <option value="1d">1 Day</option>
            <option value="wtd">WTD</option>
            <option value="mtd">MTD</option>
          </DropDown>
        </Header>

        <div className="_card-body">
          <Chart
            pattern={"#%"}
            width={"95%"}
            height={"95%"}
            chartType="BarChart"
            loader={<Spinner color="white" />}
            data={this.getData(this.props.factor)}
            options={{
              // Material design options
              chartArea: { left: 74, width: "78%", height: "80%" },
              legend: { position: "none" },
              bar: { groupWidth: "30%" },
              animation: {
                startup: true,
                easing: "out",
                duration: 1500
              },
              vAxis: {
                textStyle: {
                  fontSize: 11
                }
              },
              hAxis: { minValue: -1, maxValue: 1 }
            }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
