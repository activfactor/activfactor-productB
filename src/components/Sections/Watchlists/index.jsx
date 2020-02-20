import React,{ Component } from 'react';
import Watchlists from '../Dashboard/WatchLists';
import { connect } from 'react-redux';
import history from '../../../history';
import { updateLocation } from '../../../actions/index';
import requireAuth from '../../hoc/requireAuth';

class WatchLists extends Component{
    componentDidMount = () => {
        this.props.updateLocation('/watchlist/monitor')
    }

    renderContent = () => {
        if (this.props.data){
            if (this.props.data.constructor==={}.constructor){
                return (
                    <div className="dashboard_container">
                        <div className="section__title">My Watch List</div>
                        <Watchlists />
                    </div>
                );
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
        data: state.factorDashboard.watchlist
    }
}

export default connect(mapStateToProps,{updateLocation})(requireAuth(WatchLists));