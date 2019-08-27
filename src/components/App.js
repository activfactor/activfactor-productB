import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Sections/Login/Login";
import Dashboard from "./Sections/Dashboard/Dashboard";
import Signup from "./Sections/Signup/Signup";
import Footer from "../components/Footer/Footer";
import StrategyMonitor from '../components/Sections/StrategyMonitor';
import WatchListMonitor from './Sections/WatchlistMonitor';
import StrategyMonitorList from './Sections/Strategies';
import WatchListMonitorList from './Sections/Watchlists';
import PortfolioPerformance from './Sections/PortfolioPerformance';
import history from "../history";
import {connect} from 'react-redux';
import StrategyBuilder from "./Sections/StrategyBuilder";
import {updateLocation} from '../actions';
import { getTickerList } from '../actions/ticker';
import { getToken } from '../actions/tradeit'
import TickerMonitor from '../components/Sections/Ticker';

class App extends React.Component {

  componentDidMount = () => {
    if (!this.props.authenticated) {
      history.push('/login');
      this.props.updateLocation('/login')
    } else {
      if (this.props.token){
        this.props.getTickerList();
      }
      if (this.props.userId && this.props.userToken){
        this.props.getToken();
      }
      this.props.updateLocation(history.location.pathname);
    }
  }

  componentDidUpdate = () => {
    if (!this.props.tickerList && this.props.token){
      this.props.getTickerList();
    }
  }


  render() {
    return (
      <Router history={history}>

        <Header/>

        <main className="site-content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/strategy-builder" component={StrategyBuilder} />
            <Route path="/strategy-monitor/details" component={StrategyMonitor} />
            <Route exact path="/strategy-monitor" component={StrategyMonitorList} />
            <Route exact path="/watchlist-monitor/details" component={WatchListMonitor} />
            <Route path="/watchlist-monitor" component={WatchListMonitorList} />
            <Route path="/ticker-monitor" component={TickerMonitor} />
            <Route path="/portfolio-performance" component={PortfolioPerformance} />
          </Switch>
        </main>

        <Footer/>

      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    token: state.auth.token,
    userId: state.tradeitReducers.userId,
    userToken: state.tradeitReducers.userToken,
    tickerList: state.tickerReducers.tickerList
  }
}

export default connect(mapStateToProps, {updateLocation,getTickerList,getToken})(App);
