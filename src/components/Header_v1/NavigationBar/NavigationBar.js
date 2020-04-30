import React,{ Component } from 'react';
import NavigationItem from '../../Shared/NavigationItem';
import SearchBox from '../../UI/SearchBox/SearchBox';
import { connect } from 'react-redux';
import { toggleClicked, signOut, updateLocation } from '../../../actions/index';

class NavigationBar extends Component{
    onClickHandler = (path) => {
        this.props.updateLocation(path);
        this.props.toggleClicked();
    }

    onSignOutHandler = () => {
        this.props.toggleClicked();
        this.props.signOut();
    }

    renderTradeNavLink = () => {
      const {strategyName, cashForTrade}= this.props.trade;
      if (strategyName && cashForTrade){
        return (
          <NavigationItem
            onClick={this.onClickHandler}
            to="/trade"
            nameOfClass="_navbar-item"
          >
            Trade
          </NavigationItem>
        )
      }
    }

    renderAuthButtons = () => {
      
        if (this.props.authenticated){
            return (
                <div className={`navbar_container ${!this.props.clicked && this.props.initialStatus ? 'hide' : this.props.clicked && this.props.initialStatus ? 'show' : ""}`}>
                <nav className="navbar_wrapper">
                <NavigationItem
                  onClick={this.onSignOutHandler}
                  to="#"
                  nameOfClass={`_navbar-item _navbar-auth-btn`}
                >
                  Logout
                </NavigationItem>
                <NavigationItem
                  onClick={() => this.onClickHandler("/dashboard")}
                  to="/dashboard"
                  nameOfClass="_navbar-item"
                >
                  Dashboard
                </NavigationItem>
                <NavigationItem
                  onClick={() => this.onClickHandler("/strategy/builder")}
                  to="/builder"
                  nameOfClass="_navbar-item"
                >
                  Strategy Builder
                </NavigationItem>
                  <NavigationItem
                    onClick={() => this.onClickHandler("/strategy/monitor")}
                    to="/strategy/monitor"
                    nameOfClass="_navbar-item"
                  >
                    Strategy Monitor
                  </NavigationItem>
                <NavigationItem
                  onClick={() => this.onClickHandler("/watchlist/monitor")}
                  to="/watchlist/monitor"
                  nameOfClass="_navbar-item"
                >
                  Watchlist Monitor
                </NavigationItem>
                <NavigationItem
                  onClick={() => this.onClickHandler("/portfolio/monitor")}
                  to="/portfolio/monitor"
                  nameOfClass="_navbar-item"
                >
                  Portfolio Monitor
                </NavigationItem>
                <NavigationItem
                  onClick={() => this.onClickHandler("/transactions")}
                  to="/transactions"
                  nameOfClass="_navbar-item"
                >
                  Transaction
                </NavigationItem>
                {this.renderTradeNavLink()}

                </nav>
                <SearchBox />
            </div>
            );
        }
        return (
            <div style={{padding: 0}} className={`navbar_container ${!this.props.clicked && this.props.initialStatus ? 'hide' : this.props.clicked && this.props.initialStatus ? 'show' : ""}`}>
                <nav className="navbar_wrapper">
                    <NavigationItem onClick={() => this.onClickHandler("/login")} to="/login" nameOfClass={`_navbar-item _navbar-auth-btn ${(this.props.location ==='/login') ? 'active' : ''}`}>Login</NavigationItem>
                    <NavigationItem onClick={() => this.onClickHandler("/signup")} to="/signup" nameOfClass={`_navbar-item _navbar-auth-btn ${(this.props.location ==='/signup') ? 'active' : ''}`}>Sign up</NavigationItem>
                </nav>
            </div>
        );
    }

    renderNavigation(){
        return <React.Fragment>{this.renderAuthButtons()}</React.Fragment>;
    }

    render(){
        return (<div>{this.renderNavigation()}</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        clicked : state.toggle.clicked,
        initialStatus: state.toggle.initial,
        authenticated: state.auth.authenticated,
        location: state.toggle.location,
        trade: state.trade
    }
}

export default connect(mapStateToProps, {toggleClicked,signOut, updateLocation})(NavigationBar);