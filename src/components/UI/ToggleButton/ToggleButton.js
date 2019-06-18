import React,{ Component } from "react";
import { connect } from 'react-redux';
import { toggleClicked } from '../../../actions/index';
import classes from './ToggleButton.module.scss';


class ToggleButton extends Component {

    state = {
        Clicked:false,
    };

    onClickHandler = () => {
        this.props.toggleClicked(this.state.Clicked);
        this.setState(prevState => ({Clicked:!prevState.Clicked}));
    }

    render(){
        return (
                <div className={this.state.Clicked ? `${classes.container} ${classes.change}` : `${classes.container}`} onClick={this.onClickHandler}>
                    <div className={classes.bar1} />
                    <div className={classes.bar2} />
                    <div className={classes.bar3} />
                </div>  
          );
    } 
}

export default connect(null,{toggleClicked})(ToggleButton);
