import React,{ Component } from 'react';
import NavigationItem from '../../UI/NavigationItem';
import SearchBox from '../../UI/SearchBox/SearchBox';
import { connect } from 'react-redux';
import classes from './NavigationBar.module.scss';

class NavigationBar extends Component{
    renderNavigation(){
        return (
            <div className={`${classes.container} ${!this.props.toggleClicked && this.props.initialStatus ? classes.remove : this.props.toggleClicked && this.props.initialStatus ? classes.show : ""}`}>
                <nav className={classes.navitems}>
                    <NavigationItem to="/login" nameOfClass={`${classes.link} ${classes.auth}`}>Login</NavigationItem>
                    <NavigationItem to="/signup" nameOfClass={`${classes.link} ${classes.auth}`}>Sign up</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass={classes.link}>Dashboard</NavigationItem>
                    <NavigationItem to="/strategy-builder" nameOfClass={classes.link}>Strategy Builder</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass={classes.link}>Watch List</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass={classes.link}>Portofolio Performance</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass={classes.link}>Transactions</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass={classes.link}>Strategy Monitor</NavigationItem>
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
        toggleClicked : state.toggle.clicked,
        initialStatus: state.toggle.initial
    }
}

export default connect(mapStateToProps)(NavigationBar);