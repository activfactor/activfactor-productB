import React, { Component } from "react";
import requireAuth from "../../hoc/requireAuth";
// import classes from "./Dashboard.module.scss";
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
          <div className="dashboard_container">

            <Header/>

            <div className="dashboard_top-content">

              <div className="col-md-9">
                <Table countryChangeHandler={this.countryChangeHandler} country={this.state.country}/>
              </div>

              <div className="col-md-3 col-sm-6">
                <BrokerPanel/>
              </div>
            </div>

            <div className="dashboard_title-container">
              <div className="section__title">My strategies</div>
              <Link to="/#">View all</Link>
            </div>

            <StrategiesList/>

            <div className="dashboard_btn-container">
              <Input type="submit" nameOfClass="btn btn-primary" value="Build a New Strategy"
                     onClick={this.BuildStrategy}/>
            </div>

          </div>
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
