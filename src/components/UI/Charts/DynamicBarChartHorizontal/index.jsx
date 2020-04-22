import React, { Component } from "react";
import LoadingState from '../../../Shared/LoadingState';
import { Chart } from "react-google-charts";
import { CapString } from "../../../../utils/textFunctions";
import Header from "../../Header";
import DropDown from "../../DropDown";
import ChartModal from '../../ChartModal';
import '../index.scss';

let chartModalContent;
let chartContent;

class ColumnChart extends Component {
  state = {
    maximize: false
  };

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
    chartContent = (
      <div className="_card-body">
          <Chart
            pattern={"##,##%"}
            width={"100%"}
            height={"100%"}
            chartType="ColumnChart"
            loader={<LoadingState width="50px" height="50px" />}
            data={this.getData(this.props.factor)}
            options={{
              // Material design options
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
                },
                minValue: -1,
                maxValue: 1,
                format: ',##%'
              }
            }}
          />
        </div>
    )

    chartModalContent = (
      <div className="_card-body">
          <Chart
            pattern={"#%"}
            width={"100%"}
            height={500}
            chartType="ColumnChart"
            loader={<LoadingState width="100px" height="100px" />}
            data={this.getData(this.props.factor)}
            options={{
              // Material design options
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
                },
                minValue: -1,
                maxValue: 1,
                format: ',##%'
              }
            }}
          />
        </div>
    )


    return (
      <React.Fragment>
        {this.state.maximize ? 
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
        : ''}
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
        <i style={{ cursor: "pointer" }} className="fas fa-compress" onClick={() => this.setState({ maximize: true })}></i>
        </Header>
        {chartContent}
      </div>
      </React.Fragment>
    );
  }
}

export default ColumnChart;
