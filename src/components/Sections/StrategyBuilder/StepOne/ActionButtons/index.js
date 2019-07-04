import React, { Component } from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";

class ActionButtons extends Component {
  render() {
    return (
      <div className={classes.buttons__container}>
        <input
          className={classes.buttons__submit}
          type="submit"
          value="Run Strategy"
          onClick={this.props.onClick}
        />
        <Link to="/strategy-builder" onClick={this.props.resetFilter}>Clear All Filters</Link>
      </div>
    );
  }
}

export default ActionButtons;
