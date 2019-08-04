import React, { Component } from "react";
import ContentBlock from "../../../UI/ContentBlock";
import { connect } from "react-redux";
// import classes from './index.module.scss';

class Header extends Component {
  getValue = value => {
    if (value || value===0) {
      return value;
    } else {
      return "---";
    }
  };
  render() {
    return (
      <div className="dashboard_strategy-list">
        <div className="_strategy-list-item">
          <div className="_item-strategy-monitor">
            <div className="_text-bold">{this.props.strategyName}</div>
            <div className="_text0-normal" >
              {this.props.data.benchmark_name}
            </div>
          </div>
        </div>
        <ContentBlock
          number={this.getValue(this.props.data.strategy_perf_1d)}
          unit="%"
          number2={this.getValue(this.props.data.benchmark_perf_1d)}
          unit2="%"
          description="1 Day"
        />
        <ContentBlock
          number={this.getValue(this.props.data.strategy_perf_wtd)}
          unit="%"
          number2={this.getValue(this.props.data.benchmark_perf_wtd)}
          unit2="%"
          description="WTD"
        />
        <ContentBlock
          number={this.getValue(this.props.data.strategy_perf_mtd)}
          unit="%"
          number2={this.getValue(this.props.data.benchmark_perf_mtd)}
          unit2="%"
          description="MTD"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.strategyMonitor.data.actual_performance,
    strategyName: state.strategyMonitor.strategyName
  };
};

export default connect(mapStateToProps)(Header);
