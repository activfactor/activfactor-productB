import React, { Component } from "react";
import requireAuth from "../../hoc/requireAuth";
import classes from "./Dashboard.module.scss";
import { connect } from 'react-redux';
import { getDashboard, resetDashboard } from '../../../actions/dashboard';
import Table from './TopStrategies';
import Header from './Header';
import BrokerPanel from './BrokerPanel';
import StrategiesList from './StrategiesList';
import Link from '../../UI/Link';
import Spinner from '../../UI/Spinner';
import Modal from '../../UI/Modal';
import Input from '../../UI/Input';

class Dashboard extends Component {
    state={
      country: 'USA'
    }

    countryChangeHandler = (e) => {
      this.setState({country: e.target.value});
    }

    componentDidMount(){
      this.props.getDashboard();
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
              <Link to="/#">view all</Link>
            </div>
            <StrategiesList />
            <div className={classes.build_btn}>
              <Input type="submit" nameOfClass="primary" value="Build a New Strategy" />
            </div>
          </main> 
        )
      } else {
        return (
          <Modal>
            <Spinner color="white"/>
          </Modal>
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

export default connect(mapStateToProps,{getDashboard,resetDashboard})(requireAuth(Dashboard));
