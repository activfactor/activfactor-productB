import React, {Component} from 'react';
// import classes from './index.module.scss';
import Header from '../../../UI/Header';
import Input from '../../../UI/Input';
import { getBrokerList, getAuthLogin, postAuthVerifier, getAuthToken } from '../../../../actions/tradeit';
import { connect } from 'react-redux';

const new_window = window;

class BrokerPanel extends Component {
  connectBrokerage = () => {
    this.props.getAuthLogin();
  }

  componentDidMount = () => {
      new_window.addEventListener("message", (e) => {
          if (e.data){
            console.log(e.data);
            const data = JSON.parse(e.data);
            const oAuthVerifier = data.oAuthVerifier;
            this.props.postAuthVerifier(oAuthVerifier);
          }
      }, false);
  }

  componentDidUpdate = () => {
    if (this.props.oAuthURL){ 
      new_window.open(this.props.oAuthURL, '_blank');
    }
  }

  CreateAccount = () => {
    this.props.getAuthToken();
  }

  render() {
    return (
      <div className="dashboard_broker-panel">
        <Header header="My Brokerages"/>
        <div className="_panel-body">
          <div className="_text-title">No Brokerages Connected</div>
          <div className="_text-body">You've not connected a brokerage account to stockflare, why not give it a go?</div>
          <div className="_btn-block">
            <Input nameOfClass="btn btn-primary" type="submit" value="Connect Brokerage"
                   onClick={this.connectBrokerage}/>
            <Input nameOfClass="btn btn-secondary" type="submit" value="Create an Account"
                   onClick={this.CreateAccount} color="black"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    oAuthURL: state.tradeitReducers.oAuthURL
  };
}

export default connect(mapStateToProps,{getBrokerList, getAuthLogin, postAuthVerifier, getAuthToken})(BrokerPanel);