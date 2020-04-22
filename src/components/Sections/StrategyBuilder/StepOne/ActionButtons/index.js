import React, { Component } from "react";
import Input from '../../../../UI/Input';
import Link from '../../../../UI/Link';

class ActionButtons extends Component {
  render() {
    return (
      <div className="strategy-builder_btn-container">
        <Link to="/strategy-builder" onClick={this.props.resetFilter}>Clear All Filters</Link>
        <Input nameOfClass="btn btn-primary" type="submit" value="Run Strategy" onClick={this.props.onClick} />
      </div>
    );
  }
}

export default ActionButtons;
