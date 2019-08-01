import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getStrategyMonitor, deleteStrategy } from '../../../actions/StrategyMonitor';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';
import Header from './Header';
import classes from './index.module.scss';
import history from '../../../history';
import {  updateLocation } from '../../../actions';
import Charts from './Charts';
import Table from './Table';
import Input from '../../UI/Input';
import Message from '../../UI/Message';
import MessageModal from './Modal';
class StrategyMonitor extends Component{
    state={
        show: false,
        isSpinner: false
    }

    componentWillMount(){
        if (this.props.strategyMonitor.strategyName){
            this.props.getStrategyMonitor(this.props.strategyMonitor.strategyName);
        }
    }

    renderAction(){
        if (this.state.show){
            return (
                <Message onDismiss={() => this.setState({show:false})}>
                    <MessageModal isSpinner={this.state.isSpinner} strategyName={this.props.strategyMonitor.strategyName} closeHandler={() => this.setState({show:false})} deleteHandler={this.deleteHandler}/>
                </Message>
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
                    <main className={classes.container}>
                        {this.renderAction()}
                        <div className={classes.header__text}>Last update {this.props.strategyMonitor.data.last_update}</div>
                        <Header />
                        <Charts />
                        <Table />
                        <div className={classes.input}>
                            <Input onClick={() => this.setState({show:true})} color="red" type="submit" value="Delete this strategy" />
                        </div>
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

export default connect(mapStateToProps,{getStrategyMonitor, updateLocation, deleteStrategy})(StrategyMonitor);