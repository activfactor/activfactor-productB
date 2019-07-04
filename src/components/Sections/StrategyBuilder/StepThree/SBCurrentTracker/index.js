import React,{ Component } from 'react';
import classes from './index.module.scss';
import { connect } from 'react-redux';


class SBCurrentTracker extends Component {

  render(){
    return (
      <div className={classes.stockContainer}>
        <div className={classes.stockContainerHeading}>Current Stocks</div>
        <div className={classes.stockContainerDesc}>
          This list is updated the last date of the month.
        </div>
        <div className={classes.stockTbls}>
          <table className={classes.table}>
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
              </tr>
            </thead>
            <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                    return (
                      <tr key={i}>
                        <td
                          key={i}
                          data-label="Ticker"
                          className={classes.ticker}
                        >
                          <span className={classes.title}>{row} </span>
                          <span className={classes.desc}>
                            {this.props.data[row].name}
                          </span>
                        </td>
                        <td
                          key={i}
                          data-label="Sector"
                          className={classes.SectorLabel}
                        >
                          {this.props.data[row].sector}{" "}
                        </td>
                        <td
                          key={i}
                          data-label="Momentum"
                          className={classes.warning}
                        >
                          {this.props.data[row].momentum.toFixed(2)}
                        </td>
                        <td key={i} data-label="Value">
                          {this.props.data[row].value.toFixed(2)}
                        </td>
                        <td
                          key={i}
                          data-label="Size"
                          className={classes.warning}
                        >
                          {this.props.data[row].size.toFixed(2)}
                        </td>
                        <td
                          key={i}
                          data-label="Volatility"
                          className={classes.warning}
                        >
                          {this.props.data[row].volatility.toFixed(2)}
                        </td>
                        <td key={i} data-label="Investment">
                          {this.props.data[row].investment.toFixed(2)}
                        </td>
                        <td key={i} data-label="Profitability">
                          {this.props.data[row].profitability.toFixed(2)}
                        </td>
                        <td
                          key={i}
                          data-label="Weight"
                          className={classes.SectorLabel}
                        >
                          {this.props.data[row]["weight_%"] + "%"}
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
  
};

const mapStateToProps = state => {
  return{
    data: state.factorScreener.strategy_actual_members
  }
}

export default connect(mapStateToProps)(SBCurrentTracker);