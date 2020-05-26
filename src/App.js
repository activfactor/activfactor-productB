import React, {useEffect} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "components/Header";
import SectionPage from 'components/MaterialUIs/SectionPage';
import Login from 'screens/AuthScreen/Login';
import Signup from "./screens/AuthScreen/Singup";
import Logout from 'screens/AuthScreen/Logout';
import Dashboard from "screens/Dashboard";
import Footer from "./components/Footer";
import StrategyBuilder from "./screens/StrategyBuilder";
import StrategyMonitor from "./screens/StrategyMonitor";
import WatchlistMonitor from './screens/WatchlistMonitor';
import history from "./history";
import AuthFooter from 'components/Custom/AuthFooter';
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
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/strategy/builder" component={StrategyBuilder} />
            <Route exact path="/strategy/monitor" component={StrategyMonitor} />
            <Route exact path="/watchlist/monitor" component={WatchlistMonitor} />
          </Switch>
        </SectionPage>

        {token ? <Footer /> : <AuthFooter label="© Wealthface 2020"/>}
      </Router>
    );
}

export default App;
