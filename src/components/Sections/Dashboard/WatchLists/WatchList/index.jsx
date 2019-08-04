import React, { Component } from "react";
import ContentBlock from "../../../../UI/ContentBlock";
import Header from "../../../../UI/Header";
import Link from '../../../../UI/Link';

class WatchList extends Component {
  render() {
    return (
      <div className="col shadow-sm mb-5 p-0 bg-white rounded">
        <Header header={this.props.watchlistName} />

        <div className="dashboard_strategy-list" style={{borderBottom: 'none', boxShadow: 'none'}}>

              <div className="_strategy-list-item">
                <Link nameOfClass="btn _btn-list-item" to='/strategy-monitor'>{this.props.watchListQty} Tickers</Link>
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
            <div className="text-primary pl-3">Last Update {this.props.lastUpdate}</div>
      </div>
    );
  }
}

export default WatchList;
