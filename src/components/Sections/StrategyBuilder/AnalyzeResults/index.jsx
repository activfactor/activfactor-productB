import React,{ Component } from 'react';
import classes from './index.module.scss';
import PieGraph from '../PieChart';
import LineGraph from '../LineChart';
import Table from '../Table';
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
                    <PieGraph chartType="PieChart" header="Sectors" data={this.props.data.message.message.sector_allocation}/>
                    <LineGraph 
                        chartType="LineChart" 
                        header="Historical Performance" 
                        strategy={this.props.data.message.message.performance_strategy.cumulative_return.monthly}
                        benchmark={this.props.data.message.message.performance_benchmark.cumulative_return.monthly}/>
                    <LineGraph 
                        chartType="LineChart" 
                        header="Historical Performance" 
                        strategy={this.props.data.message.message.performance_strategy.cumulative_return.monthly}
                        benchmark={this.props.data.message.message.performance_benchmark.cumulative_return.monthly}/>
                    <LineGraph 
                        chartType="LineChart" 
                        header="Historical Performance" 
                        strategy={this.props.data.message.message.performance_strategy.cumulative_return.monthly}
                        benchmark={this.props.data.message.message.performance_benchmark.cumulative_return.monthly}/>    
                    </div>
                    <div className={classes.tablecontainer}>
                        <Table />
                        <Table />
                        <Table />
                    </div>
                </div>
            );
        }
    }

    render(){
        return(
            <section>
                <div className={classes.headers}>
                    <p>Last Update 01 May 2019</p>
                    <p>Next Update 01 June 2019</p>
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