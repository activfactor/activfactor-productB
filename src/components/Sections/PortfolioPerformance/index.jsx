import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Broker from './Broker';
import Spinner from '../../UI/Spinner';
import { updateLocation } from '../../../actions/index';
import { getBrokerList } from '../../../actions/tradeit';
import {Link} from 'react-router-dom';

class PortfolioPerformance extends Component{
    componentDidMount = () => {
        this.props.updateLocation('/portfolio-performance');
        if (!this.props.brokerList){
            this.props.getBrokerList();
        }
    }

    renderBrokers = () => {
        const brokers = this.props.brokerList;
        if (brokers){
            return Object.keys(brokers).map(item => {
                return <Broker broker={brokers[item]}>{brokers[item]['longName']}</Broker>
            })
        }
    }

    renderContent = () => {
        const brokers = this.props.brokerList;
        if (brokers){
            return (
              <React.Fragment>
                <div className="dashboard_title-container">
                  <div className="section__title m-3 text-primary">
                    Connect Brokerage
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridColumnGap: "20px"
                  }}
                >
                  {this.renderBrokers()}
                </div>
                <div>
                  <div>
                    you don't have brokerage you can{" "}
                    <Link to="/dashboard">create a brokerage account</Link>
                  </div>
                </div>
              </React.Fragment>
            );
        } else {
            return (
                <Spinner color='white' />
            );
        }
    }

    render(){
        return (
          <div className="dashboard_container">
            {this.renderContent()}
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brokerList: state.tradeitReducers.brokerList
    };
}

export default connect(mapStateToProps,{updateLocation, getBrokerList})(PortfolioPerformance);