import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "../../../UI/Link";
import DropDown from "../../../UI/DropDown";
import { getValue, getClass } from '../../../../utils/textFunctions';
import { getTickerDetails, updateTickerName  } from '../../../../actions/ticker';
import { updateLocation } from '../../../../actions/index';
import OrderForm from '../../../UI/OrderForm';

class Table extends Component {
  state={
    option: "daily_return",
    isModal: false,
    tickerName: undefined
  }

  tradeHandler = (tickerName) => {
    this.setState({isModal: true});
    this.setState({tickerName: tickerName});
  }

  onCancelOrderHandler = () => {
    this.setState({isModal: false});
    this.setState({tickerName: undefined});
  }

  optionChangeHandler = (e) => {
    this.setState({option: e.target.value})
  }

  onEyeClickHandler = (ticker) => {
    this.props.updateTickerName(ticker);
    this.props.getTickerDetails(ticker);
    this.props.updateLocation('/');
  }

  renderOrderForm = () => {
    if (this.state.tickerName && this.state.isModal){
      return <OrderForm orderSymbol={this.state.tickerName} onCancelHandler={this.onCancelOrderHandler} />
    }
  }

  render() {
    return (
      <React.Fragment>
      {this.renderOrderForm()}
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
                  <th scope="col">Quality</th>
                  <th scope="col">Beta</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Performance</th>
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
                            data-label="Quality"
                            className={
                              getClass(this.props.data[row].quality_rank)}
                          >
                            {getValue(this.props.data[row].quality_rank)!== '---' ? getValue(this.props.data[row].quality_rank).toFixed(0) : getValue(this.props.data[row].quality_rank)}
                          </td>
                          <td
                            data-label="Beta"
                            className={
                              getClass(this.props.data[row].beta_rank)}
                          >
                            {getValue(this.props.data[row].beta_rank)!== '---' ? getValue(this.props.data[row].beta_rank).toFixed(0) : getValue(this.props.data[row].beta_rank)}
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
                            <button onClick={() => this.tradeHandler(row)} className="btn btn-primary">
                              Trade
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.strategyMonitor.data.actual_members,
  };
};

export default connect(mapStateToProps,{getTickerDetails,updateTickerName,updateLocation})(Table);
