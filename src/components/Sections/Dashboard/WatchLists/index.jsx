import React,{ Component } from 'react';
import { connect } from 'react-redux';
import WatchList from './WatchList';

class WatchLists extends Component{
    renderHandler(){
        if (this.props.data.constructor==={}.constructor){
            const watchLists = this.props.data;
            return Object.keys(watchLists).map((watchlist, index) => {
                if (this.props.location==='/dashboard'){
                    if (index<3){
                        return (
                            <WatchList key={index} watchlistName={watchlist} numberID={watchLists[watchlist]['watchlist_perf_1d']} descriptionID="1 Day" numberWTD={watchLists[watchlist]['watchlist_perf_wtd']} descriptionWTD="WTD"
                            numberMTD={watchLists[watchlist]['watchlist_perf_mtd']} descriptionMTD="MTD" watchListQty={watchLists[watchlist]['number_of_tickers']} lastUpdate={watchLists[watchlist]['last_update']} />
                        );
                    }
                } else {
                    return (
                        <WatchList key={index} watchlistName={watchlist} numberID={watchLists[watchlist]['watchlist_perf_1d']} descriptionID="1 Day" numberWTD={watchLists[watchlist]['watchlist_perf_wtd']} descriptionWTD="WTD"
                        numberMTD={watchLists[watchlist]['watchlist_perf_mtd']} descriptionMTD="MTD" watchListQty={watchLists[watchlist]['number_of_tickers']} lastUpdate={watchLists[watchlist]['last_update']} />
                    );
                }
                
                return null;
                
            })
        }
    }

    render(){
        return(
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap:'20px'}}>
                {this.renderHandler()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorDashboard.watchlist,
        location: state.toggle.location
    }
}

export default connect(mapStateToProps)(WatchLists);