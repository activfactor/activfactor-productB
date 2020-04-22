import React, {Component} from 'react';
import PieGraph from '../../../../UI/Charts/PieGraph';
import LineGraph from '../../../../UI/Charts/LineChart';
import AreaChart from '../../../../UI/Charts/AreaChart';
import BarChart from '../../../../UI/Charts/BarChart';
import BarChartVertical from '../../../../UI/Charts/BarChartVertical';
import Table from '../Charts/TableChart';
import {connect} from 'react-redux';
import {getFactorScreener, resetFactorScreener} from '../../../../../actions/strategyBuilder';
import Loader from '../../../../Shared/Loader';
import BackDrop from '../../../../UI/BackDrop';
import requireAuth from '../../../../hoc/requireAuth';
import Buttons from '../ActionButtons';

class AnalyzeResults extends Component {
  componentDidMount() {
    this.props.getFactorScreener();
  }

  renderCharts() {
    if (this.props.data.message || this.props.data.error) {
      return (

        <div>
          <BackDrop>
            <div className="modal__body">

              <div className="modal__response-text text-danger text-center">
                <i className="fas fa-exclamation-triangle"></i> {this.props.data.error || this.props.data.message}
              </div>

              <div className="modal__btn-container">
                  <button className="btn btn-primary" onClick={this.props.DismissError}>OK</button>
              </div>

            </div>
          </BackDrop>
        </div>
      );
    } else if (!this.props.data.parameters) {
      return (
          <Loader wealthface color="black" />
      );
    } else {
      return (
        <div className="strategy-builder_analyze-results">

          <div className="section__title">Performance</div>
          <p>Results of a {this.props.data.parameters.rebalancing} rebalanced strategy, transaction cost not calculated</p>

          <div className="charts-card-container">
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Sectors"
                data={this.props.data.sector_allocation}
              />
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Firm size"
                data={this.props.data.firm_size_allocation}
              />
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <BarChartVertical
                header="Factor Intensity"
                factor={this.props.data.factor_intensity}
                chartName="Factor intensity"
                unit="%"
              />
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <LineGraph
                header="Historical Performance"
                strategy={this.props.data.culmulative_return_strategy}
                benchmark={this.props.data.culmulative_return_benchmark}
                benchmark_name={this.props.data.benchmark}
                chartName="Historical Performance"/>
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <BarChart
                header="Historical annual return"
                strategy={this.props.data.annual_return_strategy}
                benchmark={this.props.data.annual_return_benchmark}
                benchmark_name={this.props.data.benchmark}
                chartName="Historical annual return"
              />
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <AreaChart
                header="Historical drawdown"
                strategy={this.props.data.drawdown_strategy}
                benchmark={this.props.data.drawdown_benchmark}
                benchmark_name={this.props.data.benchmark}
                chartName="Historical drawdown"/>
            </div>
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.data.return_strategy}
                benchmark={this.props.data.return_benchmark}
                benchmark_name={this.props.data.benchmark}
                tooltips={this.props.tooltips}
                tableName="Return"/>
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.data.metrics_strategy}
                benchmark={this.props.data.metrics_benchmark}
                benchmark_name={this.props.data.benchmark}
                tooltips={this.props.tooltips}
                tableName="Metrics"/>
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <Table
                strategy={this.props.data.risk_strategy}
                benchmark={this.props.data.risk_benchmark}
                benchmark_name={this.props.data.benchmark}
                tooltips={this.props.tooltips}
                tableName="Risk"/>
            </div>

          </div>

          <Buttons onClick={this.props.modify} customizePortfolio={this.props.customizePortfolio}/>
        </div>
      );
    }
  }

  render() {
    return (
      this.renderCharts()
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.factorScreener,
    parameters: state.queryReducer,
    tooltips : state.factorScreener.metric_definition,
  };
}

export default connect(mapStateToProps, {getFactorScreener, resetFactorScreener})(requireAuth(AnalyzeResults));