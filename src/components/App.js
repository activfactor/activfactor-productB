import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Sections/Login/Login";
import Dashboard from "./Sections/Dashboard";
import Signup from "./Sections/Signup/Signup";
import Footer from "../components/Sections/Footer";
import history from "../history";
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    if (this.props.authenticated){
      history.push('/login');
    } else {
      history.push('/dashboard');
    }
  }

  render() {
    return (
      <div id="main">
        <Router history={history}>
            <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
          </Switch>
            <Footer />
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { 
      authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(App);
