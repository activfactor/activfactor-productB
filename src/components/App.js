import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Sections/Login/Login";
import Dashboard from "./Sections/Dashboard/Dashboard";
import Signup from "./Sections/Signup/Signup";
import Footer from "../components/Sections/Footer/Footer";
import history from "../history";
import { connect } from 'react-redux';
import AnalyzeResults from "./Sections/StrategyBuilder/AnalyzeResults";

class App extends React.Component {

  componentDidMount(){
    if (!this.props.authenticated){
      history.push('/login');
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
            <Route PATH="/strategy-builder" component={AnalyzeResults} />
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

export default connect(mapStateToProps)(App);
