import React,{ Component } from 'react';
import NavigationItem from '../../UI/NavigationItem';
import SearchBox from '../../UI/SearchBox';
import { connect } from 'react-redux';

class NavigationBar extends Component{
    state={remove:true}

    removeClass(){
        this.setState({remove:"navigationbar--container__removebyitem"});
    }

    renderNavigation(){
        return (
            <div className={`${this.state.remove} navigationbar--container ${!this.props.toggleClicked && this.props.initialStatus ? "navigationbar--container__remove" : this.props.toggleClicked && this.props.initialStatus ? "navigationbar--container__show" : ""}`}>
                <nav className="navigationbar--container__navitems">
                    <NavigationItem removeClass={this.removeClass} to="/login" nameOfClass="navigationitem--link navigationitem--link__auth">Login</NavigationItem>
                    <NavigationItem to="/signup" nameOfClass="navigationitem--link navigationitem--link__auth">Sign up</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Dashboard</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Strategy Builder</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Watch List</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Portofolio Performance</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Transactions</NavigationItem>
                    <NavigationItem to="/dashboard" nameOfClass="navigationitem--link">Strategy Monitor</NavigationItem>
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