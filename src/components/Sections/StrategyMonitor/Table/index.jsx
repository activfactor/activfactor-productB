import React, {Component} from 'react';
import classes from './index.module.scss';
import {connect} from 'react-redux';
import Link from '../../../UI/Link';

class ModuleName extends Component {
  render() {
    return (
      <div className="strategy-monitor_table">
        <div className="card__default">

          <div className="section__title">Current Stocks</div>
          <p>This list is updated the last date of the month.</p>

          <div className="table-responsive">
            <table className="table table--primary table-hover">

              <thead>
              <tr>
                <th scope="col">Ticker</th>
                <th scope="col">Sector</th>
                <th scope="col">Momentum</th>
                <th scope="col">Value</th>
                <th scope="col">Size</th>
                <th scope="col">Volatility</th>
                <th scope="col">Investment</th>
                <th scope="col">Profitability</th>
                <th scope="col">Weight</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
              </thead>

              <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                  return (
                    <tr key={i}>
                      <td
                        data-label="Ticker"
                      >
                        <div className="_row-text-medium">{row}</div>
                        <div className="_row-text-small">{this.props.data[row].name}</div>
                      </td>
                      <td
                        data-label="Sector"
                        className={classes.SectorLabel}
                      >
                        {this.props.data[row].sector}
                      </td>
                      <td
                        data-label="Momentum"
                        className={this.props.data[row].momentum_rank < 0 ? 'text-danger' : 'text-primary'}
                      >
                        {this.props.data[row].momentum_rank ? this.props.data[row].momentum_rank : "---"}
                      </td>
                      <td
                        data-label="Value"
                        className={this.props.data[row].value_rank < 0 ? 'text-danger' : 'text-primary'}>
                        {this.props.data[row].value_rank ? this.props.data[row].value_rank : "---"}
                      </td>
                      <td
                        data-label="Size"
                        className={this.props.data[row].size_rank < 0 ? 'text-danger' : 'text-primary'}
                      >
                        {this.props.data[row].size_rank ? this.props.data[row].size_rank : "---"}
                      </td>
                      <td
                        data-label="Volatility"
                        className={this.props.data[row].volatility < 0 ? 'text-danger' : 'text-primary'}
                      >
                        {this.props.data[row].volatility_rank ? this.props.data[row].volatility_rank : "---"}
                      </td>
                      <td
                        data-label="Investment"
                        className={this.props.data[row].investment_rank < 0 ? 'text-danger' : 'text-primary'}>
                        {this.props.data[row].investment_rank ? this.props.data[row].investment_rank : "---"}
                      </td>
                      <td
                        data-label="Profitability"
                        className={this.props.data[row].profitability_rank < 0 ? 'text-danger' : 'text-primary'}>
                        {this.props.data[row].profitability_rank ? this.props.data[row].profitability_rank : "---"}
                      </td>
                      <td
                        data-label="Weight"
                        // className={this.props.data[row]["weight_%"] < 0 ? 'text-danger' : 'text-primary'}
                      >
                        {this.props.data[row]["weight_%"] ? this.props.data[row]["weight_%"] + "%" : "---"}
                      </td>
                      <td className="_cta-container">
                        <Link to="/#" nameOfClass="btn btn-outline-primary"><i className="fas fa-eye"></i></Link>
                      </td>
                      <td className="_cta-container">
                        <Link to="/#" nameOfClass="btn btn-primary">Trade</Link>
                      </td>
                    </tr>
                  );
                })
                : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.strategyMonitor.data.actual_members
  }
}

export default connect(mapStateToProps)(ModuleName);