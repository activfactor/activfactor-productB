import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Graph from './Chart';
import Spinner from '../../UI/Spinner';
import history from '../../../history';
import Header from './Header';
import WatchListAdd from '../StrategyBuilder/StepThree/WatchListAdd';
import Fundamentals from './Fundamentals';
import requireAuth from '../../hoc/requireAuth';
import { updateLocation } from '../../../actions/index';

class Ticker extends Component{
    state = {
        showAddToWatchList: false,
        watchListKind: 'new',
        tickers:[],
        disabled: false
      };

    AddToWatchlist = (kind) => {
        this.setState({tickers:[this.props.tickerDetail.compagny.description.ticker]})
        this.setState(prevState => ({
            showAddToWatchList: !prevState.showAddToWatchList,
            watchListKind: kind
        }));
    }

    componentDidMount(){
        if (!this.props.tickerName){
            history.push('/dashboard');
        } else {
            this.props.updateLocation('/ticker-monitor');
        }
    }

    renderContent(){
        if (this.props.tickerDetail){
            return (
                <div className="strategy-monitor_container">
                    <WatchListAdd kind={this.state.watchListKind} tickers={this.state.tickers} show={this.state.showAddToWatchList} cancelHandler={() => this.setState(prevState => ({showAddToWatchList: !prevState.showAddToWatchList}))} />
                        <div className="main_breadcrumb">
                            <div>Last update {this.props.tickerDetail.last_update}</div>
                        </div>
                        <Header 
                            ticker={this.props.tickerDetail.compagny.description.ticker}
                            name={this.props.tickerDetail.compagny.description.name}
                            sector={this.props.tickerDetail.compagny.description.sector}
                            industry={this.props.tickerDetail.compagny.description.industry}
                            priceID={this.props.tickerDetail.compagny.description.last_price}
                            changeID={this.props.tickerDetail.compagny.description.perf_1d}
                            performanceID={this.props.tickerDetail.compagny.description.change_1d}
                            AddToWatchlist={this.AddToWatchlist}
                            disabled={this.state.disabled}
                        />
                        <Fundamentals />
                        <Graph 
                            header="Company Prices"
                            data={this.props.tickerDetail.compagny.price}
                            chartName="Company Prices"
                        />
                    </div>
                
            );
        } else {
            return <Spinner color="white" />
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
        tickerDetail: state.tickerReducers.tickerDetail,
        tickerName: state.tickerReducers.tickerName
    }
}

export default connect(mapStateToProps,{updateLocation})(requireAuth(Ticker));