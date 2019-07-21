import React, { Component } from "react";
import requireAuth from "../../hoc/requireAuth";
import classes from "./Dashboard.module.scss";
import { connect } from 'react-redux';
import { getDashboard, resetDashboard } from '../../../actions/dashboard';
import Table from './TopStrategies';
import Header from './Header';
import BrokerPanel from './BrokerPanel';

class Dashboard extends Component {
    state={
      country: 'USA'
    }

    countryChangeHandler = (e) => {
      this.setState({country: e.target.value});
    }

    componentWillUpdate(){
      this.props.resetDashboard();
      this.props.getDashboard(this.state.country);
    }

    componentDidMount(){
      this.props.getDashboard(this.state.country);
    }

  render() {
    return (
      <main className={classes.container}>
        <Header />
        <div className={classes.table}>
          <Table countryChangeHandler={this.countryChangeHandler} value={this.state.country}/>
          <BrokerPanel />
        </div>
      </main>
    );
  }
}

export default connect(null,{getDashboard,resetDashboard})(requireAuth(Dashboard));
