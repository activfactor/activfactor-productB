import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getWatchlist, resetWatchlist, deleteWatchlist } from '../../../actions/watchlist';
import { updateLocation } from '../../../actions/index'
import Loader from '../../Shared/Loader';
import history from '../../../history';
import Header from './Header';
import Table from './Table';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import MessageModal from './Modal';
import Charts from './Charts';

class WatchlistMonitor extends Component{
    state ={
        showDelete: false,
        isSpinner: false,
    }
    componentDidMount(){
        if (this.props.watchListName){
            this.props.updateLocation('/watchlist/monitor');
            if (!this.props.data){
                this.props.resetWatchlist();
                this.props.getWatchlist(this.props.watchListName);
            } else if (this.props.data.watchlist_name !== this.props.watchListName){
                this.props.resetWatchlist();
                this.props.getWatchlist(this.props.watchListName);
            }
        } else {
            this.props.updateLocation('/dashboard');
            history.push('/dashboard');

        }
    }

    deleteHandler = async () => {
        this.setState({isSpinner: true});
        await this.props.deleteWatchlist(this.props.watchListName);
        this.props.updateLocation('/dashboard');
    }

    renderContent = () => {
        const {showDelete, isSpinner} = this.state;
        const {data, watchListName} = this.props;
        if (!data){
            return <Loader wealthface color="black" />
        } else if (showDelete){
            return (
                <Modal onDismiss={() => this.setState({showDelete:false})}>
                    <MessageModal isSpinner={isSpinner} watchListName={watchListName} closeHandler={() => this.setState({showDelete:false})} deleteHandler={this.deleteHandler}/>
                </Modal>
            );
        }
        else {
            return (

              <div className="strategy-monitor_container">

                <div className="main_breadcrumb" style={{marginTop: '14px'}}>
                  <div>
                    Last update {this.props.data.last_update}
                  </div>
                </div>

                  <div className="card__list-container asHeader">
                      <Header
                        watchListName={this.props.watchListName}
                        numberID={this.props.data.watchlist_perf_1d}
                        numberWTD={this.props.data.watchlist_perf_wtd}
                        numberMTD={this.props.data.watchlist_perf_mtd}
                        descriptionID="1 Day"
                        descriptionWTD="WTD"
                        descriptionMTD="MTD"
                      />
                  </div>


                <Charts />
                <Table />
                <div className="dashboard_btn-container">
                    <Input nameOfClass="btn btn-danger" onClick={() => this.setState({showDelete:true})} type="submit" value="Delete this Watchlist" />
                </div>
              </div>
              
            );
        }
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        watchListName: state.watchlistReducers.watchListName,
        data: state.watchlistReducers.data,
    }
}

export default connect(mapStateToProps,{getWatchlist,resetWatchlist,deleteWatchlist,updateLocation})(WatchlistMonitor);