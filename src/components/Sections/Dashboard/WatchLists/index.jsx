import React,{ Component } from 'react';
import { connect } from 'react-redux';
import WatchList from './WatchList';

class WatchLists extends Component{
    renderHandler(){
        console.log(this.props.data);
        console.log(this.props.data.constructor);
        if (this.props.data.constructor==={}.constructor){
            console.log(true);
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
            <div className="row p-3">
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