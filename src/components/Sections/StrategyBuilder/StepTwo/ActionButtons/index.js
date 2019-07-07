import React, { Component } from "react";
import classes from "./index.module.scss";

class ActionButtons extends Component {
  render() {
    return (
      <div className={classes.buttons__container}>
        <input
          className={classes.buttons__submit}
          value="Modify Strategy"
          type="submit"
          onClick={this.props.onClick}
        />
        <input
          className={classes.buttons__submit}
          value="Customized Portfolio"
          type="submit"
          onClick={this.props.customizePortfolio}
        />
      </div>
    );
  }
}

export default ActionButtons;
