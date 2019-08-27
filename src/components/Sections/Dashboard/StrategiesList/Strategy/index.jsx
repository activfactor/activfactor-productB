import React,{ Component } from 'react';
import Link from '../../../../UI/Link';
import ContentBlock from '../../../../UI/ContentBlock';
// import classes from './index.module.scss';
import { connect } from 'react-redux';
import { changeStrategyName } from '../../../../../actions/StrategyMonitor';
import { updateLocation } from '../../../../../actions';

class Strategy extends Component{

  renderContent() {
    return (
      <div className={`dashboard_strategy-list`}>
        <div className="_strategy-list-item">
          <div className="_item-strategy-monitor">
          <Link nameOfClass="_btn-list-item" to='/strategy-monitor/details' onClick={() => {this.props.changeStrategyName(this.props.strategyName); this.props.updateLocation('/strategy-monitor')}}>{this.props.strategyName}</Link>
            <div className="_text0-normal mt-1" >
              {this.props.benchmark_name}
            </div>
          </div>
        </div>
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
      </div>
    );
  }

    
    render(){
        return(
            <React.Fragment>
              {this.renderContent()}
            </React.Fragment>
        );
    }
}

export default connect(null,{changeStrategyName, updateLocation})(Strategy);