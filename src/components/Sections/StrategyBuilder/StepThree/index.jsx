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
        }
      },
        data: {
          "user_id": 2,
          "strategy_name": this.state.strategyName,
          "country": this.props.query.country,
          "sectors": this.props.query.sectors.split(','),
          "factors": this.props.query.factors.split(','),
          "n_stock": this.props.query.n_stock,
          "firm_size": this.props.query.firm_size.split(',')
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
        query:state.queryReducer,
        saving_message: state.factorScreener.saving_message,
        error_saving_message: state.factorScreener.error_saving_message,
        auth: state.auth
    };
}

export default connect(mapStateToProps,{saveStrategy})(StrategyBuilder3);
