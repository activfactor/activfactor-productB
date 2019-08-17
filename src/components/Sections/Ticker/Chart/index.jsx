import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Spinner from "../../../UI/Spinner";
import Header from "../../../UI/Header";

class Graph extends Component {
  getData = (data) => {
    const result = Object.keys(data).map(key => {
      return [
        key,
        { v: data[key], f: `${Math.round(data[key] * 100) / 100}$` }
      ];
    });
    result.unshift([
      this.props.chartName,
      "Price",
    ]);
    return result;
  };

  render = () => {
    return (
        <div className="charts-card-item">
          <Header header={this.props.header} />
          <div className="_card-body">
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="LineChart"
              loader={<Spinner color="black" />}
              data={this.getData(this.props.data)}
              options={{
                legend: { position: "top" },
                curveType: "function",
                vAxis: { format: "##,###$" },
                hAxis: {
                    title: 'Date',
                    titleTextStyle: {
                        fontSize: 10,
                    },
                },
                animation: {
                  startup: true,
                  easing: "out",
                  duration: 1500
                },
                annotations: {
                    alwaysOutside: true,
                    textStyle: {
                        fontSize: 8
                    }
                }
              }}
            />
          </div>
        </div>
    );
  };
}

export default Graph;
