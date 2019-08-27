import React, { Component } from "react";
import Header from "../../../../UI/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWatchlistName } from "../../../../../actions/watchlist";

class WatchList extends Component {
  onClickHandler = () => {
    this.props.updateWatchlistName(this.props.watchlistName);
  };

  render() {
    return (
      <div className="dashboard_watchlist-card">
        <Link
          className="card__title-cta"
          to="/watchlist-monitor/details"
          onClick={this.onClickHandler}
        >
          <Header
            header={this.props.watchlistName}
            nameOfClass="text-primary"
          />
        </Link>

        <div className="_card-body">
          <div className="_title">{this.props.watchListQty} Tickers</div>
          <div className="_subtitle">4 Stocks</div>

          <div className="dashboard_watchlist-card-info small p-0">
            Last Update {this.props.lastUpdate}
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  null,
  { updateWatchlistName }
)(WatchList);
