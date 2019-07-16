import React, { Component } from "react";
import classes from './index.module.scss';


class ActionButtons extends Component {

    render() {

        return (

            <div className={classes.buttons__container}>
              <input className={classes.buttons__submit} type="submit" value="Analyze results" onClick={this.props.AnalyuzeResult}/>
              <input className={classes.buttons__submit} type="submit" value="Replicate Strategy" onClick={this.props.ReplicateStrategy} />
            </div>
        );
    }
}

export default ActionButtons;
