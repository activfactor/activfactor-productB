import React, { Component } from "react";
import ContentBlock from "../../../../UI/ContentBlock";
import Header from "../../../../UI/Header";
// import Link from '../../../../UI/Link';

class WatchList extends Component {
  render() {
    return (
      <div className="dashboard_watchlist-card">
        <Header header={this.props.watchlistName} />

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

export default WatchList;
