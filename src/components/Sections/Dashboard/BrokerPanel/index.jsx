import React, {Component} from 'react';
// import Header from '../../../UI/Header';
import Input from '../../../UI/Input';
import { connect } from 'react-redux';
import history from '../../../../history';

class BrokerPanel extends Component {
  connectBrokerage = () => {
    history.push('/portfolio-performance');
  }

  renderText = () => {
    if (this.props.userToken && this.props.accountNumber){
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
            You've not connected a brokerage account to wealthface, why
            not give it a go?
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="section__title">My Brokerages</div>

        <div className="dashboard_broker-panel">
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

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.tradeitReducers.userToken,
    brokerLongName: state.tradeitReducers.brokerLongName,
    accountNumber: state.tradeitReducers.accountNumber
  };
}

export default connect(mapStateToProps)(BrokerPanel);