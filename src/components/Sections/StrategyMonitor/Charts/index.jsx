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
          <div className="row">
            <PieGraph
              header="Sectors"
              data={this.props.data.sector_allocation}
            />
            <PieGraph
              header="firm_size"
              data={this.props.data.firm_size_allocation}
            />
            <BarChartVertical
              header="Factor Intensity"
              factor={this.props.data.factor_intensity}
              chartName="Factor intensity"
            />
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
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.strategyMonitor.data.actual_performance
    };
}

export default connect(mapStateToProps)(Charts);