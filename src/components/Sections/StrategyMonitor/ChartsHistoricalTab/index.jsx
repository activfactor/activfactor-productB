import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineGraph from '../../../UI/Charts/LineChart';
import BarChart from '../../../UI/Charts/BarChart';
import AreaChart from '../../../UI/Charts/AreaChart';
import Table from '../../StrategyBuilder/StepTwo/Charts/TableChart';

class ChartsHistoricalTab extends Component {
  state = {
    sector: '1d',
    firm_size: '1d',
    factor: '1d'
  };

  render() {
    return (
      <div className="charts-card-container">

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <LineGraph
            header="Historical Performance"
            strategy={this.props.strategy.cumulative_return.monthly}
            benchmark={this.props.benchmark.cumulative_return.monthly}
            benchmark_name='S&P TSX'
            chartName="Historical Performance"/>
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <BarChart
            header="Annual Return"
            strategy={this.props.strategy.yearly_return['Annual Return']}
            benchmark={this.props.benchmark.yearly_return['Annual Return']}
            benchmark_name='S&P TSX'
            chartName="Annual Return"
          />
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <AreaChart
            header="Drawdown"
            strategy={this.props.strategy.drawdown.monthly}
            benchmark={this.props.benchmark.drawdown.monthly}
            benchmark_name='S&P TSX'
            chartName="Drawdown"/>
        </div>
        <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.strategy.return}
                benchmark={this.props.benchmark.return}
                benchmark_name={this.props.benchmark_name}
                tableName="Return"/>
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.strategy.metrics}
                benchmark={this.props.benchmark.metrics}
                benchmark_name={this.props.benchmark_name}
                tableName="Metrics"/>
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.strategy.risk}
                benchmark={this.props.benchmark.risk}
                benchmark_name={this.props.benchmark_name}
                tableName="Risk"/>
            </div>
        

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    strategy: state.strategyMonitor.data.historical_strategy_performance,
    benchmark: state.strategyMonitor.data.historical_benchmark_performance,
    benchmark_name: state.strategyMonitor.data.actual_performance.benchmark_name
  };
};

export default connect(mapStateToProps)(ChartsHistoricalTab);