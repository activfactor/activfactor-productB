import React, { Component } from "react";
import requireAuth from "../../hoc/requireAuth";
import classes from "./Dashboard.module.scss";
import { connect } from 'react-redux';
import { getDashboard, resetDashboard, updateCuntry } from '../../../actions/dashboard';
import Table from './TopStrategies';
import Header from './Header';
import BrokerPanel from './BrokerPanel';
import StrategiesList from './StrategiesList';
import Link from '../../UI/Link';
import Spinner from '../../UI/Spinner';
// import Modal from '../../UI/Modal';
import Input from '../../UI/Input';
import history from '../../../history';
import { buildNewStrategyQuery, resetFactorScreener } from '../../../actions/strategyBuilder';
import { updateLocation } from '../../../actions';

class Dashboard extends Component {
    state={
      country: 'USA',
    }

    countryChangeHandler = (e) => {
      this.setState({country: e.target.value});
      this.props.updateCuntry(e.target.value);
    }

    componentDidMount(){
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
              <main className={classes.container}>
            <Header />
            <div className={classes.table}>
              <Table countryChangeHandler={this.countryChangeHandler} country={this.state.country}/>
              <BrokerPanel />
            </div>
            <div className={classes.strategies_headercontainer}>
              <div>My strategies</div>
              <Link to="/#">View all</Link>
            </div>
            <StrategiesList />
            <div className={classes.build_btn}>
              <Input type="submit" nameOfClass="btn btn-primary" value="Build a New Strategy" onClick={this.BuildStrategy} />
            </div>
          </main> 
        )
      } else {
        return (
            <Spinner color="white" containerClass="fullScreen" />
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
    data: state.factorDashboard
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
    resetFactorScreener
  }
)(requireAuth(Dashboard));
