import React, { Component } from "react";
import SBCurrentTracker from "./SBCurrentTracker";
import ActionButtons from "./ActionButtons/index";
import classes from "./index.module.scss";
import { connect } from 'react-redux';
import { saveStrategy } from '../../../../actions/index';

class StrategyBuilder3 extends Component {
  state = {
    show: false,
    isSpinner: false,
    strategyName: "",
    responseMessage: ""
  };

  ReplicateStrategy = () => {
    this.setState({ show: true });
  };

  cancelModal = () => {
    this.setState({ show: false, isSpinner: false });
  };

  onSubmit = () => {
    this.setState({ isSpinner: true });
    console.log(this.props.auth.token);
    const dataToSend = {
      headers: {
        headers: {
          "Authorization": `JWT ${this.props.auth.token}`,
          "Postman-Token": "b73da74d-5937-4722-954a-92460ccfa355,d14d6081-27b9-4a85-81c6-febd03fd72bb"
        }
      },
        data: {
          "user_id": 2,
          "strategy_name": this.state.strategyName,
          "country": this.props.parameters.country,
          "sectors": this.props.parameters.sectors,
          "factors": this.props.parameters.factors,
          "n_stock": this.props.parameters.n_stocks,
          "firm_size": this.props.parameters.firm_size
        }
    };
    this.props.saveStrategy(dataToSend);
  };

  getStrategyName = e => {
    this.setState({ strategyName: e.target.value });
  };

  render() {
    return (
      <section className={classes.maincontainer}>
        <div className={classes.container}>
          <div className={classes.strategy}>
            <SBCurrentTracker
              cancelModal={this.cancelModal}
              show={this.state.show}
              onSubmit={this.onSubmit}
              isSpinner={this.state.isSpinner}
              getStrategyName={this.getStrategyName}
              responseMessage={this.state.responseMessage}
              DismissMessage={this.props.DismissMessage}
            />
          </div>
          <div className={classes.ActionButtonsContainer}>
            <ActionButtons
              AnalyuzeResult={this.props.AnalyuzeResult}
              ReplicateStrategy={this.ReplicateStrategy}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
    return {
        parameters: state.factorScreener.parameters,
        saving_message: state.factorScreener.saving_message,
        auth: state.auth
    };
}

export default connect(mapStateToProps,{saveStrategy})(StrategyBuilder3);
