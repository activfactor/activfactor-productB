import React, { Component } from "react";
import Spinner from "../../../UI/Spinner";
import { Chart } from "react-google-charts";
import Header from "../../../UI/Header";
import { getColorsArray } from "../../../../utils/chartColorsPicker";
import ChartModal from "../../ChartModal";
import "../index.scss";

let chartModalContent;
let chartContent;

class AreaChart extends Component {
  state = {
    maximize: false
  };

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
    chartContent = (
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
    );

    chartModalContent = (
      <div className="_card-body">
        <Chart
          width={"100%"}
          height={500}
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
    );

    return (
      <React.Fragment>
      { this.state.maximize ? 
        <React.Fragment>
        <ChartModal
          onDismiss={() => this.setState({ maximize: false })}
          nameOfClass="chart_animation"
        >
          <Header header={this.props.header} nameOfClass="with-select">
            <i
              style={{ cursor: "pointer" }}
              onClick={() => this.setState({ maximize: false })}
              className="fas fa-times"
            ></i>
          </Header>
          {chartModalContent}
        </ChartModal> 
        </React.Fragment>
        : 
        ''
       }
        <div className="charts-card-item">
          <Header header={this.props.header} nameOfClass="with-select">
            <i style={{ cursor: "pointer" }} className="fas fa-compress" onClick={() => this.setState({ maximize: true })}></i>
          </Header>
          {chartContent}
        </div>
        </React.Fragment>
    );
  }
}

export default AreaChart;
