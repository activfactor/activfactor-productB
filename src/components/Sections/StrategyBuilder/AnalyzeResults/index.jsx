import React,{ Component } from 'react';
import classes from './index.module.scss';
import PieGraph from '../Charts/PieChart';
import LineGraph from '../Charts/LineChart';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';
import Table from '../Charts/Table';
import { connect } from 'react-redux';
import { getFactorScreener } from '../../../../actions/index';
import Spinner from '../../../UI/Spinner';

const query = {
    "country":"usa",
    "sectors":"consumer,materials,financials,industrials,services,technology,energy,health,utilities",
    "factors":"momentum,profitability,value,size,investment,volatility",
    "n_stock":10,
    "firm_size":"large,medium,small"
}

class AnalyzeResults extends Component{
    componentDidMount(){
        this.props.getFactorScreener(query); 
    }

    renderCharts(){
        console.log(this.props.data);
        if (this.props.data.message===""){
            return (
                <div className={classes.container}>
                    <p>Performance</p>
                    <p className={classes.subheader}>Results of a monthly rebalanced strategy, transaction cost not calculated</p>
                    <div className={classes.spinnerContainer}>
                    <Spinner />
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes.container}>
                    <p>Performance</p>
                    <p className={classes.subheader}>Results of a monthly rebalanced strategy, transaction cost not calculated</p>
                    <div className={classes.chartcontainer}>
                    <PieGraph 
                        header="Sectors" 
                        data={this.props.data.sector_allocation}/>
                    <LineGraph 
                        header="Historical Performance" 
                        strategy={this.props.data.culmulative_return_strategy}
                        benchmark={this.props.data.culmulative_return_benchmark}/>
                    <BarChart 
                        header="Annual Return" 
                        strategy={this.props.data.annual_return_strategy}
                        benchmark={this.props.data.annual_return_benchmark}/>
                    <AreaChart 
                        header="Drawdown" 
                        strategy={this.props.data.drawdown_strategy}
                        benchmark={this.props.data.drawdown_benchmark}/>    
                    </div>
                    <div className={classes.tablecontainer}>
                        <Table 
                            strategy={this.props.data.return_strategy}
                            benchmark={this.props.data.return_benchmark}/>
                        <Table 
                            strategy={this.props.data.metrics_strategy}
                            benchmark={this.props.data.metrics_benchmark}/>
                        <Table 
                            strategy={this.props.data.risk_strategy}
                            benchmark={this.props.data.risk_benchmark}/>
                    </div>
                </div>
            );
        }
    }

    render(){
        return(
            <section>
                <div className={classes.headers}>
                    <p>{`Last Update ${this.props.data.last_update}`}</p>
                    <p>{`Next Update ${this.props.data.next_update}`}</p>
                </div>
                {this.renderCharts()}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorScreener
    };
}

export default connect(mapStateToProps, {getFactorScreener})(AnalyzeResults);