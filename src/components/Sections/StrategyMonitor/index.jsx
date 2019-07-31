import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getStrategyMonitor } from '../../../actions/StrategyMonitor';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';
import Header from './Header';
import classes from './index.module.scss';
import history from '../../../history';
import {  updateLocation } from '../../../actions';
import Charts from './Charts';
class StrategyMonitor extends Component{

    componentWillMount(){
        if (this.props.strategyMonitor.strategyName){
            this.props.getStrategyMonitor(this.props.strategyMonitor.strategyName);
        }
    }

    renderHandler(){
        if (this.props.strategyMonitor.strategyName){
            if (this.props.strategyMonitor.data){
                return (
                    <main className={classes.container}>
                        <Header />
                        <Charts />
                    </main>
                );
            } else {
                return (
                    <Modal>
                        <Spinner color="white" />
                    </Modal>
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

export default connect(mapStateToProps,{getStrategyMonitor, updateLocation})(StrategyMonitor);