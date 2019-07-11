import React,{ Component } from 'react';
import classes from './index.module.scss';
import PieGraph from '../Charts/PieChart';
import LineGraph from '../Charts/LineChart';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';
import BarChartVertical from '../Charts/BarChartVertical';
import Table from '../Charts/TableChart';
import { connect } from 'react-redux';
import { getFactorScreener, resetFactorScreener } from '../../../../../actions/index';
import Spinner from '../../../../UI/Spinner';
import Modal from '../../../../UI/Modal';
import Message from '../../../../UI/Message';
import requireAuth from '../../../../hoc/requireAuth';
import Buttons from '../ActionButtons';

class AnalyzeResults extends Component{
    componentDidMount(){
        this.props.resetFactorScreener();
        this.props.getFactorScreener(); 
    }

    renderCharts(){
        if (this.props.data.message || this.props.data.error)
        {
            return (
                
                <section>
                    <Message>
                        <div className={classes.messageheader}><i className="fas fa-exclamation-triangle"></i>   {this.props.data.error || this.props.data.message}</div>
                        <span className={classes.messagespan}>
                            <button className={classes.messagebtn} onClick={this.props.DismissError}>OK</button>
                        </span>
                    </Message>
                    <div className={classes.container}>
                        <p>Performance</p>
                        <p className={classes.subheader}>Results of a monthly rebalanced strategy, transaction cost not calculated</p>
                        <div className={classes.spinnerContainer}>
                        {/* <h2 style={{color:'red',textAlign:'center'}}>{this.props.data.error || this.props.data.message}</h2> */}
                        
                        </div>
                    </div>
                </section>
            );
        } else if (!this.props.data.parameters){
            return (
                <Modal>
                    <Spinner color="white"/>
                </Modal>
            );
        } else {
            return (
                    <div className={classes.container}>
                        <p>Performance</p>
                        <p className={classes.subheader}>Results of a monthly rebalanced strategy, transaction cost not calculated</p>
                        <div className={classes.chartcontainer}>
                        <PieGraph 
                            header="Sectors" 
                            data={this.props.data.sector_allocation}
                            />
                        <PieGraph
                            header="Firm size"
                            data={this.props.data.firm_size_allocation}
                            />
                        <BarChartVertical 
                            header="Factor Intensity" 
                            factor={this.props.data.factor_intensity}
                            chartName="Factor intensity"
                            />
                        <LineGraph 
                            header="Historical Performance" 
                            strategy={this.props.data.culmulative_return_strategy}
                            benchmark={this.props.data.culmulative_return_benchmark}
                            benchmark_name={this.props.data.benchmark}
                            chartName="Historical Performance"/>
                        <BarChart 
                            header="Annual Return" 
                            strategy={this.props.data.annual_return_strategy}
                            benchmark={this.props.data.annual_return_benchmark}
                            benchmark_name={this.props.data.benchmark}
                            chartName="Annual Return"
                            />
                        <AreaChart 
                            header="Drawdown" 
                            strategy={this.props.data.drawdown_strategy}
                            benchmark={this.props.data.drawdown_benchmark}
                            benchmark_name={this.props.data.benchmark}
                            chartName="Drawdown"/>    
                        </div>
                        <div className={classes.tablecontainer}>
                            <Table 
                                strategy={this.props.data.return_strategy}
                                benchmark={this.props.data.return_benchmark}
                                benchmark_name={this.props.data.benchmark}
                                tableName="Return"/>
                            <Table 
                                strategy={this.props.data.metrics_strategy}
                                benchmark={this.props.data.metrics_benchmark}
                                benchmark_name={this.props.data.benchmark}
                                tableName="Metrics"/>
                            <Table 
                                strategy={this.props.data.risk_strategy}
                                benchmark={this.props.data.risk_benchmark}
                                benchmark_name={this.props.data.benchmark}
                                tableName="Risk"/>
                        </div>
                        <Buttons onClick={this.props.modify} customizePortfolio={this.props.customizePortfolio}/>
                    </div>
            );
        }
    }

    render(){
        return(
            this.renderCharts()
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorScreener
    };
}

export default connect(mapStateToProps, {getFactorScreener,resetFactorScreener})(requireAuth(AnalyzeResults));