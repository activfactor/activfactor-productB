import React,{ Component } from 'react';
import Header from '../../../../../UI/Header';
import { getClass, getValue } from '../../../../../../utils/textFunctions'
import { connect } from 'react-redux';

class Valuation extends Component{
    
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
                          <td>Free cash flow per share</td>
                          <td className={getClass(this.props.company["pc_ratio"])}>{getValue(this.props.company["pc_ratio"])}</td>
                          <td className={getClass(this.props.sector["pc_ratio"])}>{getValue(this.props.sector["pc_ratio"])}</td>
                          <td className={getClass(this.props.industry["pc_ratio"])}>{getValue(this.props.industry["pc_ratio"])}</td>
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
              </div>
            );
    }

    render(){
        return (
          <div className="col-sm-6 _card-row-item">
              <div className="card__table _full-height-table m-0">
                  <Header header="Valuation" />
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