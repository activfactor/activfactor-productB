import React, { Component } from "react";
import ContentBlock from "../../../UI/ContentBlock";
import { connect } from "react-redux";
import Input from '../../../UI/Input';
import { ButtonWrapper } from './style';


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
      <div className="card__list-item">
        <div className="_header">
          <div className="_title">{this.props.strategyName}</div>
          <div className="_subtitle">{this.props.data.benchmark_name}</div>
        </div>

        <div className="_table">
          <table className="table">
            <thead>
            <tr>
              <th>1 Day</th>
              <th>WTD</th>
              <th>MTD</th>
            </tr>
          </thead>
            <tbody>
              <ContentBlock
                number={this.props.data.strategy_perf_1d}
                unit="%"
                number2={this.props.data.strategy_perf_wtd}
                unit2="%"
                number3={this.props.data.strategy_perf_mtd}
                unit3="%"
              />
              <ContentBlock
                number={this.props.data.benchmark_perf_1d}
                unit="%"
                number2={this.props.data.benchmark_perf_wtd}
                unit2="%"
                number3={this.props.data.benchmark_perf_mtd}
                unit3="%"
              />
            </tbody>
          </table>
        </div>
        <ButtonWrapper>
          <Input width="100%" nameOfClass="btn btn-primary" onClick={this.props.onTradeClick} type="submit" value="Trade portfolio"/>
        </ButtonWrapper>

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
