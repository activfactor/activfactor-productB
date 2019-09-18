import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getStrategyMonitor, deleteStrategy } from '../../../actions/StrategyMonitor';
import Spinner from '../../UI/Spinner';
import Header from './Header';
import history from '../../../history';
import {  updateLocation } from '../../../actions';
import Charts from './Charts';
import Table from './Table';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import MessageModal from './Modal';
import requireAuth from '../../hoc/requireAuth';
class StrategyMonitor extends Component{
    state={
        show: false,
        isSpinner: false
    }

    componentWillMount(){
        this.props.updateLocation('/strategy-monitor/details');
        if (this.props.strategyMonitor.strategyName){
            this.props.getStrategyMonitor(this.props.strategyMonitor.strategyName);
        }
    }

    renderAction(){
        if (this.state.show){
            return (
                <Modal onDismiss={() => this.setState({show:false})}>
                    <MessageModal isSpinner={this.state.isSpinner} strategyName={this.props.strategyMonitor.strategyName} closeHandler={() => this.setState({show:false})} deleteHandler={this.deleteHandler}/>
                </Modal>
            );
        }
    }

    deleteHandler = () => {
        this.setState({isSpinner: true});
        this.props.deleteStrategy(this.props.strategyMonitor.strategyName);
    }

    renderHandler(){
        if (this.props.strategyMonitor.strategyName){
            if (this.props.strategyMonitor.data){
                return (
                    <div className="strategy-monitor_container">

                        {this.renderAction()}

                        <div className="main_breadcrumb" style={{marginTop: '14px'}}>
                            <div>Last update {this.props.strategyMonitor.data.last_update}</div>
                        </div>

                        <div className="card__list-container strategy__monitor">
                            <Header />
                        </div>

                        <Charts />

                        <Table />

                        <div className="dashboard_btn-container">
                            <Input nameOfClass="btn btn-danger" onClick={() => this.setState({show:true})} type="submit" value="Delete this strategy" />
                        </div>

                    </div>
                );
            } else {
                return (
                    <Spinner color="white" containerClass="fullScreen" />
                );
            }
        } else {
            this.props.updateLocation('/dashboard');
            history.push('/dashboard');
        }
        
    }

    render(){
        return(
            <React.Fragment>
                {this.renderHandler()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        strategyMonitor: state.strategyMonitor
    };
}

export default connect(mapStateToProps,{getStrategyMonitor, updateLocation, deleteStrategy})(requireAuth(StrategyMonitor));