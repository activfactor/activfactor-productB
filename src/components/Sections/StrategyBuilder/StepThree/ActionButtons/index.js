import React, { Component } from "react";
import classes from './index.module.scss';
import Input from '../../../../UI/Input';


class ActionButtons extends Component {

    render() {

        return (

            <div className={classes.buttons__container}>
              <Input nameOfClass="btn btn-primary" type="submit" value="Analyze results" onClick={this.props.AnalyuzeResult} />
              <Input nameOfClass="btn btn-outline-primary" type="submit" value="Replicate Strategy" onClick={this.props.ReplicateStrategy} />
            </div>
        );
    }
}

export default ActionButtons;
