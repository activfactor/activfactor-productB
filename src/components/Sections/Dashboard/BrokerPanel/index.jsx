import React, {Component} from 'react';
import Header from '../../../UI/Header';
import Input from '../../../UI/Input';
import { getBrokerList, getAuthToken, getAccounts, getToken, getBalance } from '../../../../actions/tradeit';
import { connect } from 'react-redux';
import ModalContent from './ModalContent';

const new_window = window;

class BrokerPanel extends Component {
  state={
    showModal: false,
}

getTradeitInfo = async (oAuthVerifier) => {
  await this.props.getAuthToken(oAuthVerifier);
  await this.props.getToken();
  await this.props.getAccounts();
  this.props.getBalance();
}

  receiveMessage = async (e) => {
    if(!this.props.userToken){
      try{
        const data = JSON.parse(e.data);
        const oAuthVerifier = data.oAuthVerifier;
        await this.getTradeitInfo(oAuthVerifier);
        this.cancelModal();
      } catch(err){
        
      }
    }
  }

  cancelModal = () => {
    this.setState({ showModal: false });
  };

  connectBrokerage = () => {
    this.setState({showModal: true})
  }

  componentDidMount = () => {
    new_window.addEventListener("message",this.receiveMessage, false);
  }

  componentWillUnmount = () => {
    new_window.removeEventListener("message",this.receiveMessage, false);
  }

  renderModal = () => {
    if (this.state.showModal){
      return <ModalContent cancelHandler={this.cancelModal} new_window={new_window} />
    }
  }

  renderText = () => {
    if (this.props.userToken){
      return (
        <React.Fragment>
        <div className="_text-title">You are connected to</div>
        <div className="_text-title text-primary">{this.props.brokerLongName}</div>

        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="_text-title">No Brokerages Connected</div>
          <div className="_text-body">
            You've not connected a brokerage account to stockflare, why
            not give it a go?
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="dashboard_broker-panel">
        {this.renderModal()}
        <Header header="My Brokerages"/>
        <div className="_panel-body">
          {this.renderText()}
          <div className="_btn-block">
            <Input nameOfClass="btn btn-primary" type="submit" value="Connect Brokerage"
                   onClick={this.connectBrokerage}/>
            <Input nameOfClass="btn btn-secondary" type="submit" value="Create an Account"
                   onClick={this.props.CreateAccount} color="black"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.tradeitReducers.userToken,
    brokerLongName: state.tradeitReducers.brokerLongName
  };
}

export default connect(mapStateToProps,{getBrokerList,getAuthToken,getAccounts, getToken, getBalance})(BrokerPanel);