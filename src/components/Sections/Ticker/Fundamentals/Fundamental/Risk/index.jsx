import React,{ Component } from 'react';
import Header from '../../../../../UI/Header';
import { getClass, getValue } from '../../../../../../utils/textFunctions'
import { connect } from 'react-redux';

class Risk extends Component{

    renderContent(){
            return (
                <table className="table table-borderless">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company</th>
                        <th>Sector</th>
                        <th>Industry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Financial leverage</td>
                        <td className={getClass(this.props.company["financial_leverage"])}>{getValue(this.props.company["financial_leverage"])}</td>
                        <td className={getClass(this.props.sector["financial_leverage"])}>{getValue(this.props.sector["financial_leverage"])}</td>
                        <td className={getClass(this.props.industry["financial_leverage"])}>{getValue(this.props.industry["financial_leverage"])}</td>
                    </tr>
                    <tr>
                        <td>Market beta</td>
                        <td className={getClass(this.props.company["market_beta"])}>{getValue(this.props.company["market_beta"])}</td>
                        <td className={getClass(this.props.sector["market_beta"])}>{getValue(this.props.sector["market_beta"])}</td>
                        <td className={getClass(this.props.industry["market_beta"])}>{getValue(this.props.industry["market_beta"])}</td>
                    </tr>
                    <tr>
                        <td>Volatility 1 month</td>
                        <td className={getClass(this.props.company["volatility_1_month"])}>{getValue(this.props.company["volatility_1_month"])}%</td>
                        <td className={getClass(this.props.sector["volatility_1_month"])}>{getValue(this.props.sector["volatility_1_month"])}%</td>
                        <td className={getClass(this.props.industry["volatility_1_month"])}>{getValue(this.props.industry["volatility_1_month"])}%</td>
                    </tr>
                    <tr>
                        <td>Volatility 3 months</td>
                        <td className={getClass(this.props.company["volatility_3_months"])}>{getValue(this.props.company["volatility_3_months"])}%</td>
                        <td className={getClass(this.props.sector["volatility_3_months"])}>{getValue(this.props.sector["volatility_3_months"])}%</td>
                        <td className={getClass(this.props.industry["volatility_3_months"])}>{getValue(this.props.industry["volatility_3_months"])}%</td>
                    </tr>
                </tbody>
            </table>
            );
    }

    render(){
        return (
          <div className="charts-card-item" style={{margin: '2px'}}>
            <Header header="Risk" />
            <div className="_card-body">
                {this.renderContent()}
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.tickerReducers.tickerDetail.compagny.fundamental.risk,
        sector: state.tickerReducers.tickerDetail.sector.fundamental.risk,
        industry: state.tickerReducers.tickerDetail.industry.fundamental.risk
    };
}

export default connect(mapStateToProps)(Risk);