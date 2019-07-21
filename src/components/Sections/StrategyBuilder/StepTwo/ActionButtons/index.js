import React, { Component } from "react";
import classes from "./index.module.scss";
import Input from '../../../../UI/Input';

class ActionButtons extends Component {
  render() {
    return (
      <div className={classes.buttons__container}>
        <Input type="submit" value="Modify Strategy" onClick={this.props.onClick} />
        <Input type="submit" value="Customized Portfolio" onClick={this.props.customizePortfolio} />
      </div>
    );
  }
}

export default ActionButtons;
