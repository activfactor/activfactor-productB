import React, { Component } from "react";
import classes from "../index.module.scss";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import { CapString } from "../../../../utils/textFunctions";
import Header from "../../../UI/Header";

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
      case "LARGE":
        return "#2a5ebe";
      case "SMALL":
        return "#e6a52e";
      case "MEDIUM":
        return "#a5070c";
      case "Energy":
        return "#b5090c";
      case "IT & Communication":
        return "#75070c";
      case "Health Care":
        return "#25040c";
      case "Industrials":
        return "#e2052b";
      case "Materials":
        return "#c2040a";
      case "Services":
        return "#a91c0c";
      case "Utilities":
        return "#a3678a";
      default:
        return "Orange";
    }
  }
  getData = factor => {
    const result = Object.keys(factor).map(key => {
      return [
        CapString(String(key).split("_")[0]),
        factor[key],
        `color : ${this.getFactorColor(key)}; font-size: 20px`,
        `${CapString(String(key).split("_")[0])} ${factor[key]}`
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
      <div className="col-4">
        <div className={`${classes.container}`}>
          <Header header={this.props.header} />
          <div className={classes.chartcontainer}>
            <Chart
              pattern={"#%"}
              width={"95%"}
              height={"95%"}
              chartType="BarChart"
              loader={<Spinner color="black" />}
              data={this.getData(this.props.factor)}
              options={{
                // Material design options
                chartArea: { left: 74, width: "78%", height: "80%" },
                legend: { position: "none" },
                bar: { groupWidth: "95%" },
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
                hAxis: { minValue: -100, maxValue: 100 }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;