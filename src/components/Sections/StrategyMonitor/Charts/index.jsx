import React,{ Component } from 'react';
import PieGraph from '../../../UI/Charts/PieGraph';
import BarChartVertical from '../../../UI/Charts/BarChartVertical';
import {connect} from 'react-redux';

class Charts extends Component{
    state ={
      sector: "1d",
      firm_size: "1d",
      factor: "1d"
    }
    componentDidUpdate(){
      console.log(this.state.sector);
    }
    render(){
        return (
          <div className="charts-card-container">

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Sectors"
                data={this.props.data.sector_allocation}
              />
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Firm Size"
                data={this.props.data.firm_size_allocation}
              />
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <BarChartVertical
                header="Factor Beta"
                factor={this.props.data.factor_beta}
                chartName="Factor Beta"
                unit=''
              />
            </div>

          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.strategyMonitor.data.actual_performance
    };
}

export default connect(mapStateToProps)(Charts);