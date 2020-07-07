import React, {useEffect} from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "components/Header";
import SectionPage from 'components/MaterialUIs/SectionPage';
import Logout from 'screens/Logout';
import Dashboard from "screens/Dashboard";
import Footer from "./components/Footer";
import StrategyBuilder from "./screens/StrategyBuilder";
import StrategyMonitor from "./screens/StrategyMonitor";
import WatchlistMonitor from './screens/WatchlistMonitor';
import TickerMonitor from './screens/TickerMonitor';
import history from "./history";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppConfig } from './store/actions/appConfig.actions';

const App = () => {
  const {token, descriptions} = useSelector(state => ({...state.auth, ...state.appConfig}));
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !descriptions){
      dispatch(fetchAppConfig());
    }
  }, [dispatch, token,descriptions]);

    return (
      <Router history={history}>
        {token ? <Header /> : ''}
        <SectionPage>
          <Switch>
            <Redirect exact path="/" from="/" to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/strategy/builder" component={StrategyBuilder} />
            <Route exact path="/strategies/monitor" component={StrategyMonitor} />
            <Route exact path="/watchlists/monitor" component={WatchlistMonitor} />
            <Route exact path="/ticker/monitor" component={TickerMonitor} />
          </Switch>
        </SectionPage>

        {token ? <Footer /> : ''}
      </Router>
    );
}

export default App;
