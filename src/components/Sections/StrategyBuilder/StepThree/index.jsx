import React, { Component } from "react";
import SBCurrentTracker from "./SBCurrentTracker";
import ActionButtons from "./ActionButtons/index";
import { connect } from 'react-redux';
import { saveStrategy } from '../../../../actions/strategyBuilder'; 
import WatchListAdd from './WatchListAdd';

class StrategyBuilder3 extends Component {
  state = {
    show: false,
    isSpinner: false,
    strategyName: "",
    responseMessage: "",
    showAddToWatchList: false,
    tickers:[]
  };

  onCheckWatchListHandler = (value) => {
    let tickers = this.state.tickers;
    let updatedTickers;
    if (tickers.includes(value)){
      updatedTickers = tickers.filter(ticker => ticker!==value);
    } else {
      updatedTickers = tickers;
      updatedTickers.push(value);
    }
    this.setState({tickers: updatedTickers});
  }

  AddToWatchlist = () => {
    this.setState(prevState => ({showAddToWatchList: !prevState.showAddToWatchList}));
  }

  ReplicateStrategy = () => {
    this.setState({ show: true });
  };

  cancelModal = () => {
    this.setState({ show: false, isSpinner: false });
  };

  onSubmit = () => {
    this.setState({ isSpinner: true });
    const dataToSend = {
      headers: {
        headers: {
          "Authorization": `JWT ${this.props.auth.token}`,
        }
      },
        data: {
          "user_id": this.props.auth.userID,
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
      <div className="strategy-builder_customized-portfolio">
        <WatchListAdd tickers={this.state.tickers} show={this.state.showAddToWatchList} cancelHandler={() => this.setState(prevState => ({showAddToWatchList: !prevState.showAddToWatchList}))} />
          <SBCurrentTracker
            cancelModal={this.cancelModal}
            show={this.state.show}
            onSubmit={this.onSubmit}
            isSpinner={this.state.isSpinner}
            getStrategyName={this.getStrategyName}
            responseMessage={this.state.responseMessage}
            DismissMessage={this.props.DismissMessage}
            onCheckWatchListHandler={this.onCheckWatchListHandler}
          />

            <ActionButtons
              AnalyuzeResult={this.props.AnalyuzeResult}
              ReplicateStrategy={this.ReplicateStrategy}
              AddToWatchlist={this.AddToWatchlist}
            />
      </div>
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
