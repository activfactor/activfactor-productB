import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Spinner from "../../../UI/Spinner";
import Header from "../../../UI/Header";
import { getColorsArray } from "../../../../utils/chartColorsPicker";
import ChartModal from "../../ChartModal";
import "../index.scss";

let chartContent;
let chartModalContent;

class Graph extends Component {
  state = {
    maximize: false
  };
  getData = obj => {
    const result = Object.keys(obj).map(key => {
      return [
        String(key),
        obj[key],
        `${String(key)} ${Number(obj[key]).toFixed(2)}%`
      ];
    });
    result.unshift([
      "Sectors",
      "percentage",
      { type: "string", role: "tooltip" }
    ]);
    return result;
  };

  render = () => {
    chartModalContent = (
      <div className="_card-body">
        <Chart
          width={"100%"}
          height={500}
          chartType="PieChart"
          loader={<Spinner color="black" />}
          data={this.getData(this.props.data)}
          options={{
            pieHole: 0.4,
            chartArea: { left: 70, width: "100%", height: "90%" },
            with: "100%",
            height: "100%",
            colors: getColorsArray(),
            // is3D: true
          }}
        />
      </div>
    );
    chartContent = (
      <div className="_card-body">
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="PieChart"
          loader={<Spinner color="black" />}
          data={this.getData(this.props.data)}
          options={{
            pieHole: 0.4,
            chartArea: { left: 70, width: "100%", height: "90%" },
            with: "100%",
            height: "100%",
            colors: getColorsArray(),
            // is3D: true,
            animation: {
              duration: 1000,
              easing: "out",
              startup: true
            }
          }}
        />
      </div>
    );

    if (this.state.maximize) {
      return (
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
          <div className="charts-card-item">
            <Header header={this.props.header} nameOfClass="with-select">
              <i style={{ cursor: "pointer" }} className="fas fa-compress"></i>
            </Header>
            {chartContent}
          </div>
        </React.Fragment>
      );
    }
    return (
      <div className="charts-card-item">
        <Header header={this.props.header} nameOfClass="with-select">
          <i
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ maximize: true })}
            className="fas fa-compress"
          ></i>
        </Header>
        {chartContent}
      </div>
    );
  };
}

export default Graph;
