import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Spinner from "../../../UI/Spinner";
import Header from "../../../UI/Header";
import {getColorsArray} from '../../../../utils/chartColorsPicker';

class Graph extends Component {
  getData = obj => {
    const result = Object.keys(obj).map(key => {
      return [String(key), obj[key],`${String(key)} ${Number(obj[key]).toFixed(2)}%`];
    });
    result.unshift(["Sectors", "percentage", {type: "string", role: "tooltip"}]);
    return result;
  };

  render = () => {
    return (
        <div className="charts-card-item">
          <Header header={this.props.header} />
          <div className="_card-body">
            <Chart
              width={"100%"}
              height={"100%"}
              chartType="PieChart"
              loader={<Spinner color="black" />}
              data={this.getData(this.props.data)}
              options={{
                // pieHole: 0.3,
                chartArea: { left: 70, width: "100%", height: "90%" },
                with: "100%",
                height: "100%",
                colors: getColorsArray(),
                is3D: true
              }}
            />
          </div>
        </div>
    );
  };
}

export default Graph;
