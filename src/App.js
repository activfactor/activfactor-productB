import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Sections/Login/Login";
// import NewLogin from "./Sections/Login/Login__NewDesign";
import Dashboard from "./components/Sections/Dashboard/Dashboard";
import Signup from "./components/Sections/Signup/Signup";
import Footer from "./components/Footer/Footer";
import StrategyMonitor from './components/Sections/StrategyMonitor';
import WatchListMonitor from './components/Sections/WatchlistMonitor';
import StrategyMonitorList from './components/Sections/Strategies';
import WatchListMonitorList from './components/Sections/Watchlists';
import Brokers from './components/Sections/Brokers';
import Portfolio from './components/Sections/Portfolio';
import TradePage from './components/Sections/Trade';
import Transactions from './components/Sections/TransactionPage';
import history from "./history";
import {connect} from 'react-redux';
import StrategyBuilder from "./components/Sections/StrategyBuilder";
import {updateLocation} from './actions';
import { getTickerList } from './actions/ticker';
import { getToken } from './actions/Tradeit/tradeitPortfolio';
import TickerMonitor from './components/Sections/Ticker';

class App extends React.Component {

  componentDidMount = () => {
    
  }

  componentDidUpdate = () => {
    if (!this.props.tickerList && this.props.token){
      this.props.getTickerList();
    }
  }


  render() {
    return (
      <Router history={history}>

        <main className="site-content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/builder" component={StrategyBuilder} />
            <Route path="/strategy/monitor/details" component={StrategyMonitor} />
            <Route exact path="/strategy/monitor" component={StrategyMonitorList} />
            <Route exact path="/watchlist/monitor/details" component={WatchListMonitor} />
            <Route path="/watchlist/monitor" component={WatchListMonitorList} />
            <Route path="/ticker/monitor" component={TickerMonitor} />
            <Route path="/brokers" component={Brokers} />
            <Route path="/transactions" component={Transactions} />
            <Route exact path="/portfolio/monitor" component={Portfolio} />
            <Route path="/trade" component={TradePage} />
          </Switch>
        </main>

        <Footer/>

      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, {updateLocation,getTickerList,getToken})(App);
