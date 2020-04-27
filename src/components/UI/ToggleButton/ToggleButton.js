import React,{ Component } from "react";
import classes from './ToggleButton.module.scss';


class ToggleButton extends Component {
    onClickHandler = () => {
        this.props.toggleClicked();
    }

    render(){
        return (
                <div className={this.props.clicked ? `${classes.container} ${classes.change}` : `${classes.container}`} onClick={this.onClickHandler}>
                    <div className={classes.bar1} />
                    <div className={classes.bar2} />
                    <div className={classes.bar3} />
                </div>  
          );
    } 
}

export default ToggleButton;
