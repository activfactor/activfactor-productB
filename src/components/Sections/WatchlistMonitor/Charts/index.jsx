import React,{ Component } from 'react';
import PieGraph from '../../../UI/Charts/PieGraph';
import DynamicBarChartVertical from '../../../UI/Charts/DynamicBarChartVertical';
import {connect} from 'react-redux';

class Charts extends Component{
    state ={
      sector: "1d",
      firm_size: "1d",
      country: "1d"
    }

    render(){
        return (
          <div className="charts-card-container">
            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Country"
                data={this.props.data.country_allocation}
              />
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
              <PieGraph
                header="Sector"
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
              <DynamicBarChartVertical
                header="Country Performance"
                factor={
                  this.state.country === "1d"
                    ? this.props.data.country_perf_1d
                    : this.state.country === "wtd"
                    ? this.props.data.country_perf_wtd
                    : this.props.data.country_perf_mtd
                }
                chartName="Sector Performance"
                DropDownChangeHandler={e =>
                  this.setState({ country: e.target.value })
                }
                option={this.state.country}
              />
            </div>

            <div className="col-sm-6 col-lg-4 _card-row-item">
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

            <div className="col-sm-6 col-lg-4 _card-row-item">
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

          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.watchlistReducers.data
    };
}

export default connect(mapStateToProps)(Charts);