import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Sections/Login/Login";
import Dashboard from "./Sections/Dashboard/Dashboard";
import Signup from "./Sections/Signup/Signup";
import Footer from "../components/Footer/Footer";
import StrategyMonitor from '../components/Sections/StrategyMonitor';
import history from "../history";
import { connect } from 'react-redux';
import StrategyBuilder from "./Sections/StrategyBuilder";
import { updateLocation } from '../actions';

class App extends React.Component {

  componentDidMount(){
    if (!this.props.authenticated){
      history.push('/login');
      this.props.updateLocation('/login')
    } else {
      this.props.updateLocation(history.location.pathname);
    }
  }

  render() {
    return (
        <Router history={history}>
          <div className="subroot">
            <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/strategy-builder" component={StrategyBuilder} />
            <Route path="/strategy-monitor" component={StrategyMonitor} />
          </Switch>
          </div>
            <Footer />
        </Router>
    );
  }
}


const mapStateToProps = state => {
  return { 
      authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps,{updateLocation})(App);
