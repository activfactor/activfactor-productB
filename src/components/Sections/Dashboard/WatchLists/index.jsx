import React,{ Component } from 'react';
import { connect } from 'react-redux';
import WatchList from './WatchList';

class WatchLists extends Component{
    renderHandler(){
        if (this.props.data.constructor==={}.constructor){
            const watchLists = this.props.data;
            return Object.keys(watchLists).map((watchlist, index) => {
                return (
                    <WatchList key={index} watchlistName={watchlist} numberID={watchLists[watchlist]['watchlist_perf_1d']} descriptionID="1 Day" numberWTD={watchLists[watchlist]['watchlist_perf_wtd']} descriptionWTD="WTD"
                    numberMTD={watchLists[watchlist]['watchlist_perf_mtd']} descriptionMTD="MTD" watchListQty={watchLists[watchlist]['number_of_tickers']} lastUpdate={watchLists[watchlist]['last_update']} />
                );
            })
        }
    }

    render(){
        return(
            <div>
                {this.renderHandler()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorDashboard.watchlist
    }
}

export default connect(mapStateToProps)(WatchLists);