import React,{ Component } from 'react';
import NavigationItem from '../../UI/NavigationItem';
import SearchBox from '../../UI/SearchBox/SearchBox';
import { connect } from 'react-redux';
import classes from './NavigationBar.module.scss';
import { toggleClicked, signOut } from '../../../actions/index';

class NavigationBar extends Component{

    onClickHandler = () => {
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
                <NavigationItem onClick={this.onClickHandler} to="/login" nameOfClass={`${classes.link} ${classes.auth}`}>Login</NavigationItem>
                <NavigationItem onClick={this.onClickHandler} to="/signup" nameOfClass={`${classes.link} ${classes.auth}`}>Sign up</NavigationItem>
            </React.Fragment>
        );
    }

    renderNavigation(){
        return (
            <div className={`${classes.container} ${!this.props.clicked && this.props.initialStatus ? classes.remove : this.props.clicked && this.props.initialStatus ? classes.show : ""}`}>
                <nav className={classes.navitems}>
                    {this.renderAuthButtons()}
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={classes.link}>Dashboard</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/strategy-builder" nameOfClass={classes.link}>Strategy Builder</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/strategy-builder-step-two" nameOfClass={classes.link}>Watch List</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={classes.link}>Portofolio Performance</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={classes.link}>Transactions</NavigationItem>
                    <NavigationItem onClick={this.onClickHandler} to="/dashboard" nameOfClass={classes.link}>Strategy Monitor</NavigationItem>
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
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, {toggleClicked,signOut})(NavigationBar);