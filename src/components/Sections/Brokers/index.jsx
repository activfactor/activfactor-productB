import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Broker from './Broker';
import Loader from '../../Shared/Loader';
import { updateLocation } from '../../../actions/index';
import { getBrokerList, getAuthLogin, getAuthToken, getToken, getAccounts, resetAccountNumber } from '../../../actions/Tradeit/tradeitPortfolio';
import {Link} from 'react-router-dom';
import Modal from './ModalContent';
import history from '../../../history';
import { resetShouldNavigateTo } from '../../../actions/index';
import { isObjectEmpty } from '../../../utils/helper';

const new_window = window;
class PortfolioPerformance extends Component{
    state = {
        showModal: false,
        isSpinner: false
    }
    componentDidMount = () => {
        this.props.updateLocation('/brokers');
        if (!this.props.brokerList || isObjectEmpty(this.props.brokerList)){
            this.props.getBrokerList();
        }
        new_window.addEventListener("message",this.receiveMessage, false);
    }

    componentWillUnmount = () => {
      new_window.removeEventListener("message", this.receiveMessage, false);
    }

    componentDidUpdate(){
      if (this.props.oAuthURL && !this.props.userToken){ 
          new_window.open(this.props.oAuthURL, '_target');
      }
    }

    getTradeitInfo = async (oAuthVerifier) => {
      await this.props.getAuthToken(oAuthVerifier);
      await this.props.getToken();
      await this.props.getAccounts();
      this.setState({showModal: true});
    }
    
    receiveMessage = async (e) => {
      if(!this.props.userToken){
        try{
          const data = JSON.parse(e.data);
          const oAuthVerifier = data.oAuthVerifier;
          await this.getTradeitInfo(oAuthVerifier);
        } catch(err){
          
        }
      }
    }

    BrokerClickHandler = async (brokerName) => {
      if (brokerName && !this.props.accountNumber){
        if (!this.props.userToken){
          this.setState({ isSpinner: true });
          this.props.getAuthLogin(brokerName);
        } else {
          this.setState({ isSpinner: true });
          await this.props.getAccounts();
          this.setState({showModal: true});
        }
      }
    }

    finishProcess = () => {
      this.setState({isSpinner: false})
      if (this.props.shouldNavigateTo){
        history.push(this.props.shouldNavigateTo);
        this.props.resetShouldNavigateTo();
      } else {
        history.push('/dashboard');
      }
    }

    cancelProcess = () => {
      this.setState({isSpinner: false});
    }

    cancelHandler = () => {
        this.setState({showModal: false});
        this.props.resetAccountNumber();
    }

    renderBrokerContent = (brokerName) => {
        if (this.state.isSpinner){
            return (
            <div>{brokerName} <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /></div>
            );
        } else {
          return brokerName;
        }
    }

    renderBrokers = () => {
        const brokers = this.props.brokerList;
        if (brokers || !isObjectEmpty(brokers)){
            return Object.keys(brokers).map((item, index) => {
                return (
                  <Broker
                    BrokerClickHandler={this.BrokerClickHandler}
                    broker={brokers[item]}
                    selected={this.props.brokerName===brokers[item]["shortName"] && this.props.token ? true : false}
                    key={index}
                  >
                    {this.renderBrokerContent(brokers[item]["longName"])}
                  </Broker>
                );
            })
        }
    }

    renderModal = () => {
        if (this.state.showModal){
            return <Modal cancelHandler={this.cancelHandler} finishProcess={this.finishProcess} cancelProcess={this.cancelProcess}/>
        }
    }

    renderContent = () => {
        const brokers = this.props.brokerList;
        if (brokers || !isObjectEmpty(brokers)){
            return (
              <React.Fragment>
                  {this.renderModal()}
                <div className="dashboard_title-container">
                  <div className="section__title m-3 text-primary">
                    Connect Brokerage
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridColumnGap: "20px"
                  }}
                >
                  {this.renderBrokers()}
                </div>
                <div>
                  <div>
                    you don't have brokerage you can{" "}
                    <Link to="/dashboard">create a brokerage account</Link>
                  </div>
                </div>
              </React.Fragment>
            );
        } else {
            return (
                <Loader wealthface color='black' />
            );
        }
    }

    render(){
        return (
          <div className="dashboard_container">
            {this.renderContent()}
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brokerList: state.tradeitReducers.brokerList,
        oAuthURL: state.tradeitReducers.oAuthURL,
        userToken: state.tradeitReducers.userToken,
        token: state.tradeitReducers.token,
        brokerName: state.tradeitReducers.brokerName,
        accountNumber: state.tradeitReducers.accountNumber,
        shouldNavigateTo: state.toggle.shouldNavigateTo
    };
}

export default connect(
  mapStateToProps,
  {
    updateLocation,
    getBrokerList,
    getAuthLogin,
    getAuthToken,
    getToken,
    getAccounts,
    resetAccountNumber,
    resetShouldNavigateTo
  }
)(PortfolioPerformance);