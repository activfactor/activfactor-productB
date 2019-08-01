import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Spinner from "../../../UI/Spinner";
import Header from "../../../UI/Header";

class Graph extends Component {
  getData = obj => {
    const result = Object.keys(obj).map(key => {
      return [String(key), obj[key], `${String(key)} ${obj[key]}%`];
    });
    result.unshift(["Sectors", "percentage", {type: "string", role: "tooltip"}]);
    return result;
  };

  render = () => {
    return (
        <div className="analyze-result-card">
          <Header header={this.props.header} />
          <div className="_card-body">
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="PieChart"
              loader={<Spinner color="black" />}
              data={this.getData(this.props.data)}
              options={{
                pieHole: 0.5,
                chartArea: { left: 70, width: "100%", height: "100%" },
                with: "100%",
                height: "100%"
              }}
            />
          </div>
        </div>
    );
  };
}

export default Graph;
