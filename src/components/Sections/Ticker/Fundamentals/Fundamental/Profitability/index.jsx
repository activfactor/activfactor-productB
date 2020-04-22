import React,{ Component } from 'react';
import Header from '../../../../../UI/Header';
import { getClass, getValue } from '../../../../../../utils/textFunctions'
import { connect } from 'react-redux';

class Profitability extends Component{

    renderContent(){
            return (
              <div className="table-responsive">
                  <table className="table">
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
                          <td>Net margin</td>
                          <td className={getClass(this.props.company["net_margin"])}>{getValue(this.props.company["net_margin"])}%</td>
                          <td className={getClass(this.props.sector["net_margin"])}>{getValue(this.props.sector["net_margin"])}%</td>
                          <td className={getClass(this.props.industry["net_margin"])}>{getValue(this.props.industry["net_margin"])}%</td>
                      </tr>
                      <tr>
                          <td>Return on assets</td>
                          <td className={getClass(this.props.company["return_on_assets"])}>{getValue(this.props.company["return_on_assets"])}%</td>
                          <td className={getClass(this.props.sector["return_on_assets"])}>{getValue(this.props.sector["return_on_assets"])}%</td>
                          <td className={getClass(this.props.industry["return_on_assets"])}>{getValue(this.props.industry["return_on_assets"])}%</td>
                      </tr>
                      <tr>
                          <td>Return on equity</td>
                          <td className={getClass(this.props.company["return_on_equity"])}>{getValue(this.props.company["return_on_equity"])}%</td>
                          <td className={getClass(this.props.sector["return_on_equity"])}>{getValue(this.props.sector["return_on_equity"])}%</td>
                          <td className={getClass(this.props.industry["return_on_equity"])}>{getValue(this.props.industry["return_on_equity"])}%</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
            );
    }

    render(){
        return (
          <div className="col-sm-6 _card-row-item">
              <div className="card__table m-0 _full-height-table">
                  <Header header="Profitability" />
                  {this.renderContent()}
              </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.tickerReducers.tickerDetail.compagny.fundamental.profitability,
        sector: state.tickerReducers.tickerDetail.sector.fundamental.profitability,
        industry: state.tickerReducers.tickerDetail.industry.fundamental.profitability
    };
}

export default connect(mapStateToProps)(Profitability);