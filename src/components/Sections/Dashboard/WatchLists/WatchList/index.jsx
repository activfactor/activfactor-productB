import React, { Component } from "react";
import ContentBlock from "../../../../UI/ContentBlock";
import Header from "../../../../UI/Header";
// import Link from '../../../../UI/Link';

class WatchList extends Component {
  render() {
    return (
      <div className="col-12 shadow-sm mb-5 p-0 bg-white rounded">
        <Header header={this.props.watchlistName} />

        <div className="dashboard_strategy-list" style={{borderBottom: 'none', boxShadow: 'none'}}>

              <div style={{fontSize: '1.5rem', color:'black'}}>
                {this.props.watchListQty} Tickers
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
            <div className="_header-item-title pl-3 pb-3">Last Update {this.props.lastUpdate}</div>
      </div>
    );
  }
}

export default WatchList;
