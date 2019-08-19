import React, {Component} from 'react';
// import classes from './index.module.scss';
import Header from '../../../UI/Header';
import Input from '../../../UI/Input';
import { getBrokerList, getAuthLogin } from '../../../../actions/tradeit';
import { connect } from 'react-redux';

class BrokerPanel extends Component {
  connectBrokerage = () => {
    this.props.getAuthLogin();
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
                   onClick={this.props.CreateAccount} color="black"/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{getBrokerList, getAuthLogin})(BrokerPanel);