import React, { Component } from "react";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import { CapString } from "../../../../utils/textFunctions";
import Header from "../../../UI/Header";
import { getColorsByValue } from '../../../../utils/chartColorsPicker';

class BarChart extends Component {
  getFactorColor(factor) {
    const factorString = String(factor).split("_")[0];
    return getColorsByValue(factorString);
  }
  getData = factor => {
    const result = Object.keys(factor).map(key => {
      return [
        CapString(String(key).split("_")[0]),
        factor[key],
        `color : ${this.getFactorColor(String(key).split("_")[0])}; font-size: 20px`,
        `${CapString(String(key).split("_")[0])} ${factor[key]}${this.props.unit}`
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
        <Header header={this.props.header} />
        <div className="_card-body">
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="BarChart"
            loader={<Spinner color="black" />}
            data={this.getData(this.props.factor)}
            options={{
              // Material design options
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
              hAxis: { minValue: -1, maxValue: 1 }
            }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
