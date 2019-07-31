import React,{ Component } from 'react';
import ContentBlock from '../../../UI/ContentBlock';
import { connect } from 'react-redux';
import classes from './index.module.scss';

class Header extends Component{
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.name}>{this.props.strategyName}</div>
                <ContentBlock number={this.props.data.strategy_perf_1d} unit="%" description="1 Day"/>
                <ContentBlock number={this.props.data.strategy_perf_wtd} unit="%" description="WTD"/>
                <ContentBlock number={this.props.data.strategy_perf_mtd} unit="%" description="MTD"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.strategyMonitor.data.actual_performance,
        strategyName : state.strategyMonitor.strategyName
    };
}

export default connect(mapStateToProps)(Header);