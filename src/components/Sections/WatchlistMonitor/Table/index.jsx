import React,{ Component } from 'react';
import { connect } from "react-redux";
import { removeTicker } from '../../../../actions/watchlist';
import { getTickerDetails, updateTickerName  } from '../../../../actions/ticker';
import { updateLocation } from '../../../../actions/index';
import Link from "../../../UI/Link";
import DropDown from "../../../UI/DropDown";
import { getValue, getClass } from '../../../../utils/textFunctions';

class Table extends Component {
  state={
    option: "daily_return",
    row: ''
  }

  optionChangeHandler = (e) => {
    this.setState({option: e.target.value})
  }

  removeTickerHandler(watchListName,row){
    this.setState({row:row})
    this.props.removeTicker(watchListName,row);
  }

  onEyeClickHandler = (ticker) => {
    this.props.updateTickerName(ticker);
    this.props.getTickerDetails(ticker);
    this.props.updateLocation('/');
  }

  render() {
    return (
      <div className="card__table">

          <div className="card__title with-select">
            <div>
              <div className="_header-title">Current Stocks</div>
              <p>This list is updated the last date of the month.</p>
            </div>

              <DropDown
                value={this.state.option}
                color="blue"
                DropDownChangeHandler={this.optionChangeHandler}
              >
                <option value="daily_return">1 Day</option>
                <option value="weekly_return">WTD</option>
                <option value="monthly_return">MTD</option>
              </DropDown>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Ticker</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Momentum</th>
                  <th scope="col">Value</th>
                  <th scope="col">Size</th>
                  <th scope="col">Volatility</th>
                  <th scope="col">Investment</th>
                  <th scope="col">Profitability</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Performance</th>
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>

              <tbody>
                {this.props.data
                  ? Object.keys(this.props.data).map((row, i) => {
                      return (
                        <tr key={i}>
                          <td data-label="Ticker">
                            <div className="_row-text-medium">{row}</div>
                            <div className="_row-text-small">
                              {this.props.data[row].name}
                            </div>
                          </td>
                          <td
                            data-label="Sector"
                            className="text-muted"
                          >
                            {this.props.data[row].sector}
                          </td>
                          <td
                            data-label="Momentum"
                            className={
                              getClass(this.props.data[row].momentum_rank)}
                          >
                            {getValue(this.props.data[row].momentum_rank)}
                          </td>
                          <td
                            data-label="Value"
                            className={
                              getClass(this.props.data[row].value_rank)}
                          >
                            {getValue(this.props.data[row].value_rank)}
                          </td>
                          <td
                            data-label="Size"
                            className={
                              getClass(this.props.data[row].size_rank)}
                          >
                            {getValue(this.props.data[row].size_rank)}
                          </td>
                          <td
                            data-label="Volatility"
                            className={
                              getClass(this.props.data[row].volatility)}
                          >
                            {getValue(this.props.data[row].volatility_rank)}
                          </td>
                          <td
                            data-label="Investment"
                            className={
                              getClass(this.props.data[row].investment_rank)}
                          >
                            {getValue(this.props.data[row].investment_rank)}
                          </td>
                          <td
                            data-label="Profitability"
                            className={
                              getClass(this.props.data[row].profitability_rank)}
                          >
                            {getValue(this.props.data[row].profitability_rank)}
                          </td>
                          <td
                            data-label="Weight"
                          >
                            {getValue(this.props.data[row]["weight_%"])!== '---' ? getValue(this.props.data[row]["weight_%"]).toFixed(2) + '%' : getValue(this.props.data[row]["weight_%"])}
                          </td>
                          <td
                            data-label="Performance"
                            className={
                              getClass(this.props.data[row][this.state.option])}
                          >
                            {getValue(this.props.data[row][this.state.option])!== '---' ? getValue(this.props.data[row][this.state.option]).toFixed(2) + '%' : getValue(this.props.data[row][this.state.option])} 
                          </td>
                          <td className="_cta-container">
                            <Link to="/ticker-monitor" onClick={() => this.onEyeClickHandler(row)} nameOfClass="btn btn-outline-primary">
                              <i className="fas fa-eye" />
                            </Link>
                          </td>
                          <td className="_cta-container">
                            <Link to="/#" nameOfClass="btn btn-primary">
                              Trade
                            </Link>
                          </td>
                          <td className="_cta-container">
                            <Link to="/watchlist-monitor" onClick={() => this.removeTickerHandler(this.props.watchListName,row)} nameOfClass="btn btn-danger">
                              Remove {this.state.row===row ? <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span> : ''}
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.watchlistReducers.data.tickers,
    watchListName: state.watchlistReducers.watchListName
  };
};


export default connect(mapStateToProps,{removeTicker, getTickerDetails, updateTickerName, updateLocation})(Table);