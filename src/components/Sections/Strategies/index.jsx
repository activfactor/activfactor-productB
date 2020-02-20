import React, {Component} from 'react';
import StrategyList from '../Dashboard/StrategiesList';
import {connect} from 'react-redux';
import history from '../../../history';
import {updateLocation} from '../../../actions/index';
import requireAuth from '../../hoc/requireAuth';
import Input from '../../UI/Input';


class Strategies extends Component {

  componentDidMount(){
    this.props.updateLocation('/strategy/monitor')
  }

  BuildStrategy = () => {
    history.push('/builder')
  }

  renderContent = () => {
    if (this.props.user_strategies) {
      if (this.props.user_strategies !== "Your are not following any strategy") {
        return (
          <div className="strategy-monitor_container">
            <div className="sm_container-title">
              <div className="section__title">My strategies</div>

              <Input type="submit" nameOfClass="btn btn-primary" value="Build a New Strategy"
                     onClick={this.BuildStrategy}/>
            </div>

            <div className="card__list-container">
              <StrategyList/>
            </div>
          </div>
        );
      } else {
        return <div>{this.props.user_strategies}</div>
      }
    } else {
      history.push('/dashboard');
    }
  }

  render() {
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

export default connect(mapStateToProps, {updateLocation})(requireAuth(Strategies));