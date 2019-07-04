import React,{ Component } from 'react';
import classes from './index.module.scss';
import PieGraph from '../Charts/PieChart';
import LineGraph from '../Charts/LineChart';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';
import Table from '../Charts/Table';
import { connect } from 'react-redux';
import { getFactorScreener, resetFactorScreener } from '../../../../../actions/index';
import Spinner from '../../../../UI/Spinner';
import Modal from '../../../../UI/Modal';
import requireAuth from '../../../../hoc/requireAuth';
import Buttons from '../ActionButtons';

class AnalyzeResults extends Component{
    componentDidMount(){
        this.props.resetFactorScreener();
        this.props.getFactorScreener(); 
    }

    renderCharts(){
        console.log(this.props.data);
        if (this.props.data.error || this.props.data.message)
        {
            return (
                <section>
                    <div className={classes.container}>
                        <p>Performance</p>
                        <p className={classes.subheader}>Results of a monthly rebalanced strategy, transaction cost not calculated</p>
                        <div className={classes.spinnerContainer}>
                        <h2 style={{color:'red',textAlign:'center'}}>{this.props.data.error || this.props.data.message}</h2>
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
                        <LineGraph 
                            header="Historical Performance" 
                            strategy={this.props.data.culmulative_return_strategy}
                            benchmark={this.props.data.culmulative_return_benchmark}
                            chartName="Historical Performance"/>
                        <BarChart 
                            header="Annual Return" 
                            strategy={this.props.data.annual_return_strategy}
                            benchmark={this.props.data.annual_return_benchmark}
                            chartName="Annual Return"/>
                        <AreaChart 
                            header="Drawdown" 
                            strategy={this.props.data.drawdown_strategy}
                            benchmark={this.props.data.drawdown_benchmark}
                            chartName="Drawdown"/>    
                        </div>
                        <div className={classes.tablecontainer}>
                            <Table 
                                strategy={this.props.data.return_strategy}
                                benchmark={this.props.data.return_benchmark}
                                tableName="return"/>
                            <Table 
                                strategy={this.props.data.metrics_strategy}
                                benchmark={this.props.data.metrics_benchmark}
                                tableName="metrics"/>
                            <Table 
                                strategy={this.props.data.risk_strategy}
                                benchmark={this.props.data.risk_benchmark}
                                tableName="risk"/>
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