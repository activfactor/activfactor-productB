import React, { Component } from "react";
import classes from "./index.module.scss";
import Input from '../../../../UI/Input';

class ActionButtons extends Component {
  render() {
    return (
      <div className="strategy-builder_btn-container">
        <Input nameOfClass="btn btn-outline-primary" type="submit" value="Modify Strategy" onClick={this.props.onClick} />
        <Input nameOfClass="btn btn-primary" type="submit" value="Customized Portfolio" onClick={this.props.customizePortfolio} />
      </div>
    );
  }
}

export default ActionButtons;
