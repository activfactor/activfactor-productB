import React,{ Component } from 'react';
import DynamicBarChartHorizontal from '../../../UI/Charts/DynamicBarChartHorizontal';
import {connect} from 'react-redux';

class ChartsLiveTab extends Component{
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

        <div className="col-sm-6 col-lg-6 _card-row-item">
          <DynamicBarChartHorizontal
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

        <div className="col-sm-6 col-lg-6 _card-row-item">
          <DynamicBarChartHorizontal
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

        {/* <div className="col-sm-6 col-lg-4 _card-row-item">
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
        </div> */}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.strategyMonitor.data.actual_performance
  };
}

export default connect(mapStateToProps)(ChartsLiveTab);