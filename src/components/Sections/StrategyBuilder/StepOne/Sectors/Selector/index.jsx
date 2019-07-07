import React, { Component } from "react";
import classes from "./index.module.scss";
import { connect } from 'react-redux'
import { queryUpdate } from '../../../../../../actions/index';

class Selector extends Component {
  state={checked: this.props.checked}

  onChangeHandler = (value,checked) => {
    this.setState(prevState => ({
      checked:!prevState.checked,
      sector:value
    }))
    this.props.onClick(value,checked);
  }

  componentWillReceiveProps(nextProps){
    this.setState({checked:nextProps.checked});
  }

  render() {
    return (
      <div className={classes.checkboxitem} onClick={() => this.onChangeHandler(this.props.id, !this.state.checked)}>
        <label htmlFor={this.props.id}>
          <input value={this.props.id} type="checkbox" className={classes.csscheckbox} checked={this.state.checked} onChange={this.props.onClick}/>
          <i />
          <span className={classes.label}>{this.props.txtValue}</span>
        </label>
      </div>
    );
  }
}

export default connect(null,{ queryUpdate })(Selector);
