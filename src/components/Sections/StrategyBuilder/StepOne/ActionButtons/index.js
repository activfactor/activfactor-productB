import React, { Component } from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import Input from '../../../../UI/Input';

class ActionButtons extends Component {
  render() {
    return (
      <div className={classes.buttons__container}>
        <Input nameOfClass="primary" type="submit" value="Run Strategy" onClick={this.props.onClick} />
        <Link to="/strategy-builder" onClick={this.props.resetFilter}>Clear All Filters</Link>
      </div>
    );
  }
}

export default ActionButtons;
