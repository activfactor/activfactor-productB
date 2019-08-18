import React, { Component } from "react";
import ContentBlock from "../../../../UI/ContentBlock";
import Header from "../../../../UI/Header";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateWatchlistName } from '../../../../../actions/watchlist'
// import Link from '../../../../UI/Link';

class WatchList extends Component {
  onClickHandler = () => {
    this.props.updateWatchlistName(this.props.watchlistName);
  } 

  render() {
    return (
      <div className="dashboard_watchlist-card">
        <Link className="card__title-cta" to="/watchlist-monitor" onClick={this.onClickHandler}>
          <Header header={this.props.watchlistName} />
        </Link>

        <div className="dashboard_strategy-list">

              <div className="_strategy-list-item">
                <div className="_title">{this.props.watchListQty} Tickers</div>
              </div>

              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberID} unit="%" description={this.props.descriptionID} />
              </div>

              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberWTD} unit="%" description={this.props.descriptionWTD} />
              </div>

              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberMTD} unit="%" description={this.props.descriptionMTD} />
              </div>

            </div>
            <div className="dashboard_watchlist-card-info small">Last Update {this.props.lastUpdate}</div>
      </div>
    );
  }
}

export default connect(null,{updateWatchlistName})(WatchList);
