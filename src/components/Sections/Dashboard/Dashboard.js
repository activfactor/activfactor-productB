import React, { Component } from "react";
import requireAuth from "../../hoc/requireAuth";
import { connect } from 'react-redux';
import { getDashboard, resetDashboard, updateCuntry } from '../../../actions/dashboard';
import Table from './TopStrategies';
import Header from '../../Shared/AccountSumBlock';
import BrokerPanel from './BrokerPanel';
import StrategiesList from './StrategiesList';
import WatchLists from './WatchLists';
import Link from '../../UI/Link';
import Loader from '../../UI/Loader';
import Input from '../../UI/Input';
import history from '../../../history';
import { buildNewStrategyQuery, resetFactorScreener } from '../../../actions/strategyBuilder';
import { getBrokerList, getBalance } from '../../../actions/Tradeit/tradeitPortfolio';
import { updateLocation } from '../../../actions';
import { getTickerList } from '../../../actions/ticker'

class Dashboard extends Component {
    state={
      country: 'USA',
    }

    countryChangeHandler = (e) => {
      this.setState({country: e.target.value});
      this.props.updateCuntry(e.target.value);
    }

    componentDidMount(){
      this.props.updateLocation('/dashboard');
      if (!this.props.brokerList){
        this.props.getBrokerList();
      }
      if (this.props.accountNumber){
        this.props.getBalance();
      }
      if (!this.props.data.CAN){
        this.props.getDashboard(this.state.country);
      } else {
        this.setState({country: this.props.data.country});
      }
    }

    BuildStrategy = () => {
      this.props.resetFactorScreener();
      this.props.updateLocation('/strategy-builder');
      this.props.buildNewStrategyQuery();
      history.push('/strategy-builder')
    }

    renderContent(){
      if(this.props.data.CAN){
        return (
          <div className="dashboard_container">

            {this.props.userToken && this.props.accountNumber ? <Header/> : ''}

            <div className="dashboard_top-content">

              <div className="col-lg-9 col-md-8">
                <Table countryChangeHandler={this.countryChangeHandler} country={this.state.country}/>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <BrokerPanel/>
              </div>
            </div>

            <div className="dashboard_title-container">
              <div className="section__title">My Strategies</div>
              <Link nameOfClass="section__title" to="/strategy-monitor">View all</Link>
            </div>

            <div className="card__list-container">
              <StrategiesList/>
            </div>

            <div className="dashboard_btn-container mb-0">
              <Input type="submit" nameOfClass="btn btn-primary" value="Build a New Strategy"
                     onClick={this.BuildStrategy}/>
            </div>

            <div className="dashboard_title-container">
              <div className="section__title">My Watch List</div>
              <Link nameOfClass="section__title" to="/watchlist-monitor">View all</Link>
            </div>

            <WatchLists />

            {/*<div className="dashboard_btn-container">*/}
            {/*  <Input type="submit" nameOfClass="btn btn-primary" value="+ New Watch List" />*/}
            {/*</div>*/}


          </div>
        )
      } else {
        return (
            // <Loader color="white" containerClass="fullScreen" />
            <Loader wealthface color="black" />
        );
      }
    }

  render() {
    return (
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.factorDashboard,
    tickers : state.tickerReducers.tickerList,
    brokerList: state.tradeitReducers.brokerList,
    accountNumber : state.tradeitReducers.accountNumber,
    userToken: state.tradeitReducers.userToken,
    brokerLongName: state.tradeitReducers.brokerLongName
  }
}

export default connect(
  mapStateToProps,
  {
    getDashboard,
    resetDashboard,
    buildNewStrategyQuery,
    updateCuntry,
    updateLocation,
    resetFactorScreener,
    getTickerList,
    getBrokerList,
    getBalance
  }
)(requireAuth(Dashboard));
