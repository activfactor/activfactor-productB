import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStrategyMonitor, deleteStrategy } from '../../../actions/StrategyMonitor';
import { updateTradeStrategy } from '../../../actions/Tradeit/tradeitTrade';
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
import Loader from '../../Shared/Loader';
import TradeModal from './TradeModal';

class StrategyMonitor extends Component {
  state = {
    showDelete: false,
    isSpinner: false,
    activeTab: 'Live',
    showTrade: false
  };

  componentDidMount() {
    this.props.updateLocation('/strategy/monitor');
  }

  componentWillMount() {
    if (this.props.strategyMonitor.strategyName) {
      this.props.getStrategyMonitor(this.props.strategyMonitor.strategyName);
    }
  }

  renderAction() {
    const {showDelete, showTrade} = this.state;
    if (showDelete) {
      return (
        <Modal onDismiss={() => this.setState({showDelete: false})}>
          <MessageModal isSpinner={this.state.isSpinner} strategyName={this.props.strategyMonitor.strategyName}
                        closeHandler={() => this.setState({showDelete: false})} deleteHandler={this.deleteHandler}/>
        </Modal>
      );
    } else if (showTrade){
      return (
          <Modal onDismiss={() => this.setState({showTrade:false})}>
              <TradeModal onDismiss={() => this.setState({showTrade: false})}/>
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

  onTradeClick = () => {
    const {strategyName} = this.props.strategyMonitor;
    this.props.updateTradeStrategy(strategyName);
    this.setState({showTrade: true});
  }

  renderHandler() {
    if (this.props.strategyMonitor.strategyName) {
      if (this.props.strategyMonitor.data) {
        const {last_update, last_rebalancing, next_rebalancing} = this.props.strategyMonitor.data;
        return (
          <div className="strategy-monitor_container">

            {this.renderAction()}

            {/* <div className="main_breadcrumb" style={{marginTop: '14px'}}>
              <div>Last update {this.props.strategyMonitor.data.last_update}</div>
            </div> */}

            <div style={{marginTop: '10px'}} className="main_breadcrumb--container">
                    <div className="main_breadcrumb">
                        {last_update ? <div>{`Last Update ${last_update}`}</div> : ''}
                    </div>
                    <div className="main_breadcrumb">
                        {last_rebalancing ? <div>{`Last Rebalancing ${last_rebalancing}`}</div> : ''}
                        {next_rebalancing ? <div>{`Next Rebalancing ${next_rebalancing}`}</div> : ''}
                    </div>
                </div>

            <div className="card__list-container asHeader">
              <Header onTradeClick={this.onTradeClick}/>
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
            <Input nameOfClass="btn btn-danger" onClick={() => this.setState({showDelete: true})} type="submit" value="Delete this strategy"/>

          </div>
        );
      } else {
        return (
          <Loader wealthface color="black" />
        );
      }
    } else {
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
  deleteStrategy,
  updateTradeStrategy
})(requireAuth(StrategyMonitor));