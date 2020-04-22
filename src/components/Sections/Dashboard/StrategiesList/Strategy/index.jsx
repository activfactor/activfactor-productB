import React, {Component} from 'react';
import Link from '../../../../UI/Link';
import ContentBlock from '../../../../UI/ContentBlock';
// import classes from './index.module.scss';
import {connect} from 'react-redux';
import {changeStrategyName} from '../../../../../actions/StrategyMonitor';
import {updateLocation} from '../../../../../actions';


class Strategy extends Component {

  renderContent() {
    return (
      <div className="card__list-item">
        <div className="_header">

          <Link nameOfClass="_title"
                to='/strategy/monitor/details'
                onClick={() => {
                  this.props.changeStrategyName(this.props.strategyName);
                }}>{this.props.strategyName}</Link>

              <div className="_subtitle">{this.props.tickerCount ? `${this.props.tickerCount} Tickers` : ''}</div>
              <div style={{marginBottom:'5px'}} className="_update">Last update - {this.props.lastUpdate}</div>
              <div style={{marginBottom:'5px'}} className="_update">Last rebalancing - {this.props.lastRebalancing}</div>
              <div className="_update">Next rebalancing - {this.props.nextRebalancing}</div>
        </div>

        <div className="_table">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Strategy</th>
                <th>{this.props.benchmark_name}</th>
              </tr>
            </thead>
            <tbody>
              <ContentBlock
                number={this.props.strategy_perf_1d}
                unit="%"
                number2={this.props.benchmark_perf_1d}
                unit2="%"
                description={this.props.descriptionID}
              />
              <ContentBlock
                number={this.props.strategy_perf_wtd}
                unit="%"
                number2={this.props.benchmark_perf_wtd}
                unit2="%"
                description={this.props.descriptionWTD}
              />
              <ContentBlock
                number={this.props.strategy_perf_mtd}
                unit="%"
                number2={this.props.benchmark_perf_mtd}
                unit2="%"
                description={this.props.descriptionMTD}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }


  render() {
    return (
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    );
  }
}


export default connect(null, {changeStrategyName, updateLocation})(Strategy);