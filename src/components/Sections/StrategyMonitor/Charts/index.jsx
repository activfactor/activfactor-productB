import React,{ Component } from 'react';
import PieGraph from '../../../UI/Charts/PieGraph';
import BarChartVertical from '../../../UI/Charts/BarChartVertical';
import DynamicBarChartVertical from '../../../UI/Charts/DynamicBarChartVertical';
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
            <div className="col-sm-6 col-md-4 _card-row-item">
              <PieGraph
                header="Sectors"
                data={this.props.data.sector_allocation}
              />
            </div>

            <div className="col-sm-6 col-md-4 _card-row-item">
              <PieGraph
                header="Firm Size"
                data={this.props.data.firm_size_allocation}
              />
            </div>

            <div className="col-sm-6 col-md-4 _card-row-item">
              <BarChartVertical
                header="Factor Intensity"
                factor={this.props.data.factor_intensity}
                chartName="Factor intensity"
              />
            </div>

            <div className="col-sm-6 col-md-4 _card-row-item">
              <DynamicBarChartVertical
                header="Sector Performance"
                factor={
                  this.state.sector === "1d"
                    ? this.props.data.sector_perf_1d
                    : this.state.sector === "wtd"
                    ? this.props.data.sector_perf_wtd
                    : this.props.data.sector_perf_mtd
                }
                chartName="Sector Performance"
                DropDownChangeHandler={e =>
                  this.setState({ sector: e.target.value })
                }
                option={this.state.sector}
              />
            </div>

            <div className="col-sm-6 col-md-4 _card-row-item">
              <DynamicBarChartVertical
                header="Firm Size Performance"
                factor={
                  this.state.firm_size === "1d"
                    ? this.props.data.firm_size_perf_1d
                    : this.state.firm_size === "wtd"
                    ? this.props.data.firm_size_perf_wtd
                    : this.props.data.firm_size_perf_mtd
                }
                chartName="Firm Size Performance"
                DropDownChangeHandler={e =>
                  this.setState({ firm_size: e.target.value })
                }
                option={this.state.firm_size}
              />
            </div>

            <div className="col-sm-6 col-md-4 _card-row-item">
              <DynamicBarChartVertical
                header="Factor Performance"
                factor={
                  this.state.factor === "1d"
                    ? this.props.data.factor_perf_1d
                    : this.state.factor === "wtd"
                    ? this.props.data.factor_perf_wtd
                    : this.props.data.factor_perf_mtd
                }
                chartName="Factor Performance"
                DropDownChangeHandler={e =>
                  this.setState({ factor: e.target.value })
                }
                option={this.state.factor}
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