import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStrategyMonitor, deleteStrategy } from '../../../actions/StrategyMonitor';
import Spinner from '../../UI/Spinner';
import Header from './Header';
import history from '../../../history';
import { updateLocation } from '../../../actions';
import Charts from './Charts';
import Table from './Table';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import MessageModal from './Modal';
import requireAuth from '../../hoc/requireAuth';
import ChartsLiveTab from './ChartsLiveTab';
import ChartsHistoricalTab from './ChartsHistoricalTab';

class StrategyMonitor extends Component {
  state = {
    show: false,
    isSpinner: false,
    activeTab: 'Live'
  };

  componentWillMount() {
    this.props.updateLocation('/strategy-monitor/details');
    if (this.props.strategyMonitor.strategyName) {
      this.props.getStrategyMonitor(this.props.strategyMonitor.strategyName);
    }
  }

  renderAction() {
    if (this.state.show) {
      return (
        <Modal onDismiss={() => this.setState({show: false})}>
          <MessageModal isSpinner={this.state.isSpinner} strategyName={this.props.strategyMonitor.strategyName}
                        closeHandler={() => this.setState({show: false})} deleteHandler={this.deleteHandler}/>
        </Modal>
      );
    }
  }

  deleteHandler = () => {
    this.setState({isSpinner: true});
    this.props.deleteStrategy(this.props.strategyMonitor.strategyName);
  };

  handleTabs = (event, tab) => {
    event.preventDefault();
    this.setState({activeTab: tab});
  };

  renderHandler() {
    if (this.props.strategyMonitor.strategyName) {
      if (this.props.strategyMonitor.data) {
        return (
          <div className="strategy-monitor_container">

            {this.renderAction()}

            <div className="main_breadcrumb" style={{marginTop: '14px'}}>
              <div>Last update {this.props.strategyMonitor.data.last_update}</div>
            </div>

            <div className="card__list-container asHeader">
              <Header/>
            </div>

            <Charts/>

            <div className="custom__tabs">

              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href="#live"
                     className={`nav-link ${this.state.activeTab === 'Live' ? 'active' : ''}`}
                     onClick={(e) => this.handleTabs(e, 'Live')}>Live</a>
                </li>
                <li className="nav-item">
                  <a href="#historical"
                     className={`nav-link ${this.state.activeTab === 'Historical' ? 'active' : ''}`}
                     onClick={(e) => this.handleTabs(e, 'Historical')}>Historical</a>
                </li>
              </ul>

              <div className="tab-content">
                <div className={`tab-pane fade ${this.state.activeTab === 'Live' ? 'show active' : ''}`}>
                  <ChartsLiveTab/>
                  <Table/>
                </div>

                <div className={`tab-pane fade ${this.state.activeTab === 'Historical' ? 'show active' : ''}`}>
                  {
                    this.state.activeTab === 'Historical' ?
                      <ChartsHistoricalTab/> :
                      null
                  }
                </div>
              </div>

            </div>


            <div className="dashboard_btn-container">
              <Input nameOfClass="btn btn-danger" onClick={() => this.setState({show: true})} type="submit"
                     value="Delete this strategy"/>
            </div>

          </div>
        );
      } else {
        return (
          <Spinner color="white" containerClass="fullScreen"/>
        );
      }
    } else {
      this.props.updateLocation('/dashboard');
      history.push('/dashboard');
    }

  }

  render() {
    return (
      <React.Fragment>
        {this.renderHandler()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    strategyMonitor: state.strategyMonitor
  };
};

export default connect(mapStateToProps, {
  getStrategyMonitor,
  updateLocation,
  deleteStrategy
})(requireAuth(StrategyMonitor));