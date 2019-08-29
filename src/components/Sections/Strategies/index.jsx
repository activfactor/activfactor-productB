import React,{ Component } from 'react';
import StrategyList from '../Dashboard/StrategiesList';
import { connect } from 'react-redux';
import history from '../../../history';
import { updateLocation } from '../../../actions/index';

class ModuleName extends Component{
    componentDidMount = () => {
        this.props.updateLocation('/strategy-monitor')
    }

    renderContent = () => {
        if (this.props.user_strategies){
            if (this.props.user_strategies !== "Your are not following any strategy"){
                return (
                  <div className="dashboard_container">
                    <div className="dashboard_title-container">
                      <div className="section__title mb-2">
                        My strategies
                      </div>
                    </div>
                    <StrategyList />
                  </div>
                );
            } else {
                return <div>{this.props.user_strategies}</div>
            }
        } else {
            history.push('/dashboard');
        }
    }

    render(){
        return (
          <React.Fragment>
              {this.renderContent()}
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user_strategies: state.factorDashboard.user_strategies
    }
}

export default connect(mapStateToProps,{updateLocation})(ModuleName);