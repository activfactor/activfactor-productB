import React, { Component } from "react";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import Header from "../../../UI/Header";

class BarChart extends Component {
  getData = (strategy, benchmark) => {
    const result = Object.keys(strategy).map(key => {
      return [
        String(key),
        {
          v: strategy[key] / 100,
          f: `${Math.round(strategy[key] * 100) / 100}%`
        },
        {
          v: benchmark[key] / 100,
          f: `${Math.round(benchmark[key] * 100) / 100}%`
        }
      ];
    });
    result.unshift([
      this.props.chartName,
      "strategy",
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
              pattern={"#%"}
              width={"95%"}
              height={"95%"}
              chartType="ColumnChart"
              loader={<Spinner color="white" />}
              data={this.getData(this.props.strategy, this.props.benchmark)}
              options={{
                // Material design options
                chartArea: { left: 70, width: "78%", height: "80%" },
                legend: { position: "top" },
                vAxis: { minValue: -1, maxValue: 1, format: "#%" }
              }}
            />
          </div>
        </div>
    );
  }
}

export default BarChart;
