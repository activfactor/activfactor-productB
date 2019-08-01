import React,{ Component } from 'react';
import classes from './index.module.scss';
import { connect } from 'react-redux';
import Link from '../../../UI/Link';
class ModuleName extends Component{
    render(){
        return(
        <div className={classes.stockContainer}>
        <div className={classes.stockContainerHeading}>Current Stocks</div>
        <div className={classes.stockContainerDesc}>
          This list is updated the last date of the month.
        </div>
        <div className={classes.stockTbls}>
            <table className={classes.table__class}>
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
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                    return (
                      <tr key={i}>
                        <td
                          data-label="Ticker"
                          className={classes.ticker}
                        >
                          <span className={classes.title}>{row} </span>
                          <span className={classes.desc}>
                            {this.props.data[row].name}
                          </span>
                        </td>
                        <td
                          data-label="Sector"
                          className={classes.SectorLabel}
                        >
                          {this.props.data[row].sector}
                        </td>
                        <td
                          data-label="Momentum"
                          className={this.props.data[row].momentum_rank < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].momentum_rank ? this.props.data[row].momentum_rank : "---"}
                        </td>
                        <td 
                          data-label="Value"
                          className={this.props.data[row].value_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].value_rank ? this.props.data[row].value_rank : "---"}
                        </td>
                        <td
                          data-label="Size"
                          className={this.props.data[row].size_rank < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].size_rank? this.props.data[row].size_rank : "---"}
                        </td>
                        <td
                          data-label="Volatility"
                          className={this.props.data[row].volatility < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].volatility_rank ? this.props.data[row].volatility_rank : "---"}
                        </td>
                        <td 
                          data-label="Investment"
                          className={this.props.data[row].investment_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].investment_rank ? this.props.data[row].investment_rank : "---"}
                        </td>
                        <td 
                          data-label="Profitability"
                          className={this.props.data[row].profitability_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].profitability_rank ? this.props.data[row].profitability_rank : "---"}
                        </td>
                        <td
                          data-label="Weight"
                          // className={this.props.data[row]["weight_%"] < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row]["weight_%"] ? this.props.data[row]["weight_%"]+"%" : "---"}
                        </td>
                        <td>
                            <Link to="/#" nameOfClass="btn btn-outline-primary"><i className="fas fa-eye"></i></Link>
                        </td>
                        <td>
                            <Link to="/#" nameOfClass="btn btn-primary">Trade</Link>
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
        data: state.strategyMonitor.data.actual_members
    }
}

export default connect(mapStateToProps)(ModuleName);