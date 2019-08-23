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
            nameOfClass="text-primary p-4"
          />
        </Link>

        <div className="dashboard_strategy-list p-2">
          <div className="_strategy-list-item m-3">
            <div className="_title">{this.props.watchListQty} Tickers</div>
          </div>
        </div>
        <div className="dashboard_watchlist-card-info small m-2">
          Last Update {this.props.lastUpdate}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateWatchlistName }
)(WatchList);
