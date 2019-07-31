import React,{ Component } from 'react';
import NavigationItem from '../../UI/NavigationItem';
import SearchBox from '../../UI/SearchBox/SearchBox';
import { connect } from 'react-redux';
import classes from './NavigationBar.module.scss';
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

    renderAuthButtons = () => {
        if (this.props.authenticated){
            return (
                <NavigationItem onClick={this.onSignOutHandler} to="#" nameOfClass={`${classes.link} ${classes.auth}`}>Logout</NavigationItem>
            );
        }
        return (
            <React.Fragment>
                <NavigationItem onClick={() => this.onClickHandler("/login")} to="/login" nameOfClass={`${classes.link} ${classes.auth} ${(this.props.location ==='/login') ? classes.active : ''}`}>Login</NavigationItem>
                <NavigationItem onClick={() => this.onClickHandler("/signup")} to="/signup" nameOfClass={`${classes.link} ${classes.auth} ${(this.props.location ==='/signup') ? classes.active : ''}`}>Sign up</NavigationItem>
            </React.Fragment>
        );
    }

    renderNavigation(){
        return (
            <div className={`${classes.container} ${!this.props.clicked && this.props.initialStatus ? classes.remove : this.props.clicked && this.props.initialStatus ? classes.show : ""}`}>
                <nav className={classes.navitems}>
                    {this.renderAuthButtons()}
                    <NavigationItem onClick={() => this.onClickHandler('/dashboard')} to="/dashboard" nameOfClass={`${classes.link} ${(this.props.location ==='/dashboard') ? classes.active : ''}`}>Dashboard</NavigationItem>
                    <NavigationItem onClick={() => this.onClickHandler('/strategy-builder')} to="/strategy-builder" nameOfClass={`${classes.link} ${(this.props.location ==='/strategy-builder') ? classes.active : ''}`}>Strategy Builder</NavigationItem>
                    <NavigationItem onClick={() => this.onClickHandler('/dashboard')} to="/dashboard" nameOfClass={`${classes.link} ${(this.props.location ===null) ? classes.active : ''}`}>Watch List</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={`${classes.link} ${(this.props.location ===null) ? classes.active : ''}`}>Portofolio Performance</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={`${classes.link} ${(this.props.location ===null) ? classes.active : ''}`}>Transactions</NavigationItem>
                    <NavigationItem onClick={() => this.onClickHandler('/strategy-monitor')} to="/strategy-monitor" nameOfClass={`${classes.link} ${(this.props.location === "/strategy-monitor" ) ? classes.active : ''}`}>Strategy Monitor</NavigationItem>
                </nav>
                <SearchBox />
            </div>
        );
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
        location: state.toggle.location
    }
}

export default connect(mapStateToProps, {toggleClicked,signOut, updateLocation})(NavigationBar);