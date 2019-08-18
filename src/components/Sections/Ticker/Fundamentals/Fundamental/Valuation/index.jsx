import React,{ Component } from 'react';
import Header from '../../../../../UI/Header';
import { getClass, getValue } from '../../../../../../utils/textFunctions'
import { connect } from 'react-redux';

class Valuation extends Component{
    
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
                        <td>Free cash flow per share</td>
                        <td className={getClass(this.props.company["free_cash_flow_per_share"])}>{getValue(this.props.company["free_cash_flow_per_share"])}</td>
                        <td className={getClass(this.props.sector["free_cash_flow_per_share"])}>{getValue(this.props.sector["free_cash_flow_per_share"])}</td>
                        <td className={getClass(this.props.industry["free_cash_flow_per_share"])}>{getValue(this.props.industry["free_cash_flow_per_share"])}</td>
                    </tr>
                    <tr>
                        <td>pb ratio</td>
                        <td className={getClass(this.props.company["pb_ratio"])}>{getValue(this.props.company["pb_ratio"])}</td>
                        <td className={getClass(this.props.sector["pb_ratio"])}>{getValue(this.props.sector["pb_ratio"])}</td>
                        <td className={getClass(this.props.industry["pb_ratio"])}>{getValue(this.props.industry["pb_ratio"])}</td>
                    </tr>
                    <tr>
                        <td>pe ratio</td>
                        <td className={getClass(this.props.company["pe_ratio"])}>{getValue(this.props.company["pe_ratio"])}</td>
                        <td className={getClass(this.props.sector["pe_ratio"])}>{getValue(this.props.sector["pe_ratio"])}</td>
                        <td className={getClass(this.props.industry["pe_ratio"])}>{getValue(this.props.industry["pe_ratio"])}</td>
                    </tr>
                </tbody>
            </table>
            );
    }

    render(){
        return (
          <div className="charts-card-item" style={{margin: '2px'}}>
            <Header header="Valuation" />
            <div className="_card-body">
                {this.renderContent()}
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.tickerReducers.tickerDetail.compagny.fundamental.valuation,
        sector: state.tickerReducers.tickerDetail.sector.fundamental.valuation,
        industry: state.tickerReducers.tickerDetail.industry.fundamental.valuation
    };
}

export default connect(mapStateToProps)(Valuation);