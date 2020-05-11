import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Header from "components/Header";
import SectionPage from 'components/MaterialUIs/SectionPage';
import Login from 'screens/AuthScreen/Login';
import Logout from 'screens/AuthScreen/Logout';
import Dashboard from "./components/Sections/Dashboard/Dashboard";
import Signup from "./screens/AuthScreen/Singup";
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
import StrategyBuilder from "./components/Sections/StrategyBuilder";
import TickerMonitor from './components/Sections/Ticker';
import { AuthFooter } from 'components/Shared';
import { useSelector } from 'react-redux';

const App = () => {
  const {token} = useSelector(state => state.auth);
    return (
      <Router history={history}>
        {token ? <Header /> : ''}
        <SectionPage>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/watchlist" component={Login} />
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
        </SectionPage>

        {token ? <Footer /> : <AuthFooter label="© Wealthface 2020"/>}
      </Router>
    );
}

export default App;
