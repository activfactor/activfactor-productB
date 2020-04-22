import React, { Component } from "react";
import { Chart } from "react-google-charts";
import classes from "./index.module.scss";
import Spinner from '../../../../../UI/Spinner';
import { CapString } from '../../../../../../utils/textFunctions';
class Table extends Component {
  getData(strategy,benchmark){
    const result = Object.keys(strategy).map(key => {
      return [
        CapString(String(key).split("_").join(" ")),
        {v:strategy[key], f:`${Math.round(strategy[key]*100)/100}%`}, 
        {v:benchmark[key], f:`${Math.round(benchmark[key]*100)/100}%`}
      ]
    })
    result.unshift([this.props.tableName, "strategy","s&p tsx"]);
    return result;
  }

  render() {
    return (
      <div className={classes.container}>
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="Table"
          loader={<Spinner color="black"/>}
          data={this.getData(this.props.strategy,this.props.benchmark)}
          formatters={[
            {
              type: "ColorFormat",
              column: 1,
              ranges: [
                [-20000, 0, "#FF0000"],
                [0, 20000, "green"]
              ]
            },
            {
              type: "ColorFormat",
              column: 2,
              ranges: [
                [-20000, 0, "#FF0000"],
                [0, 20000, "green"]
              ]
            }
          ]}
          options={{
            allowHtml: true,
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    );
  }
}

export default Table;
