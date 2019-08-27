import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Broker from './Broker';
import Spinner from '../../UI/Spinner';
import { updateLocation } from '../../../actions/index';

class PortfolioPerformance extends Component{
    componentDidMount = () => {
        this.props.updateLocation('/portfolio-performance')
    }

    renderContent = () => {
        const brokers = this.props.brokerList;
        if (brokers){
            return Object.keys(brokers).map(item => {
                return <Broker>{brokers[item]['longName']}</Broker>
            })
        } else {
            return (
                <Spinner color='black' />
            );
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        brokerList: state.tradeitReducers.brokerList
    };
}

export default connect(mapStateToProps,{updateLocation})(PortfolioPerformance);