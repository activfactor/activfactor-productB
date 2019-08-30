import React, { Component } from "react";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import Header from "../../../UI/Header";
import { getColorsArray } from '../../../../utils/chartColorsPicker';

class AreaChart extends Component {
  getData = (strategy, benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [
        String(key),
        { v: strategy[key], f: `${Math.round(strategy[key] * 100)}%` },
        { v: benchmark[key], f: `${Math.round(benchmark[key] * 100)}%` }
      ];
    });
    result.unshift([
      this.props.chartName,
      "Strategy",
      this.props.benchmark_name
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
              chartType="AreaChart"
              loader={<Spinner color="black" />}
              data={this.getData(this.props.strategy, this.props.benchmark)}
              options={{
                legend: { position: "top" },
                // For the legend to fit, we make the chart area smaller
                vAxis: { minValue: -1, maxValue: 0, format: "#%" },
                animation: {
                  startup: true,
                  easing: "out",
                  duration: 1500
                },
                colors: getColorsArray()
              }}
            />
          </div>
        </div>
    );
  }
}

export default AreaChart;
