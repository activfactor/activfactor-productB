import React,{ Component } from 'react';
import Header from '../../../../../UI/Header';
import { getClass, getValue } from '../../../../../../utils/textFunctions'
import { connect } from 'react-redux';

class Momentum extends Component{

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
                            <td>Performance 7 Days</td>
                            <td className={getClass(this.props.company["performance_7_days"])}>{getValue(this.props.company["performance_7_days"])}%</td>
                            <td className={getClass(this.props.sector["performance_7_days"])}>{getValue(this.props.sector["performance_7_days"])}%</td>
                            <td className={getClass(this.props.industry["performance_7_days"])}>{getValue(this.props.industry["performance_7_days"])}%</td>
                        </tr>
                        <tr>
                            <td>Performance 1 Month</td>
                            <td className={getClass(this.props.company["performance_1_month"])}>{getValue(this.props.company["performance_1_month"])}%</td>
                            <td className={getClass(this.props.sector["performance_1_month"])}>{getValue(this.props.sector["performance_1_month"])}%</td>
                            <td className={getClass(this.props.industry["performance_1_month"])}>{getValue(this.props.industry["performance_1_month"])}%</td>
                        </tr>
                        <tr>
                            <td>Performance 3 Months</td>
                            <td className={getClass(this.props.company["performance_3_months"])}>{getValue(this.props.company["performance_3_months"])}%</td>
                            <td className={getClass(this.props.sector["performance_3_months"])}>{getValue(this.props.sector["performance_3_months"])}%</td>
                            <td className={getClass(this.props.industry["performance_3_months"])}>{getValue(this.props.industry["performance_3_months"])}%</td>
                        </tr>
                    </tbody>
                </table>
            );
    }

    render(){
        return (
          <div className="charts-card-item" style={{margin: '2px'}}>
            <Header header="Momentum" />
            <div className="_card-body">
                {this.renderContent()}
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.tickerReducers.tickerDetail.compagny.fundamental.momentum,
        sector: state.tickerReducers.tickerDetail.sector.fundamental.momentum,
        industry: state.tickerReducers.tickerDetail.industry.fundamental.momentum
    };
}

export default connect(mapStateToProps)(Momentum);