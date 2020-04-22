import React, { Component } from "react";
import LoadingState from '../../../Shared/LoadingState';
import { Chart } from "react-google-charts";
import { CapString } from "../../../../utils/textFunctions";
import Header from "../../../UI/Header";
import { getColorsByValue } from '../../../../utils/chartColorsPicker';
import ChartModal from '../../ChartModal';
import '../index.scss';

let chartModalContent;
let chartContent;

class BarChart extends Component {
  state = {
    maximize: false
  };

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
    chartContent = (
      <div className="_card-body">
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="BarChart"
            loader={<LoadingState width="50px" height="50px" />}
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
    )

    chartModalContent = (
      <div className="_card-body">
          <Chart
            width={"100%"}
            height={500}
            chartType="BarChart"
            loader={<LoadingState width="100px" height="100px" />}
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

export default BarChart;
