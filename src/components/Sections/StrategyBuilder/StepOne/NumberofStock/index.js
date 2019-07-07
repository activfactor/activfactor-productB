import React, { Component } from "react";
import classes from "./index.module.scss";
// Using an ES6 transpiler like Babel
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";
import "./index.scss";
import { connect } from 'react-redux';

// Not using an ES6 transpiler

class NumberofStock extends Component {
  render() {
    return (
      <div className={classes.stockNumberContainer}>
        <div className={classes.stockNumberHeading}># Number of Stock</div>
        <div className={classes.rangeSlider}>
          <div className={classes.stockNumbercontrols}>
            <div className={`${this.props.value===10 ? classes.active : ''}`}>
              10
            </div>
            <div className={`${this.props.value===20 ? classes.active : ''}`}>
              20
            </div>
            <div className={`${this.props.value===25 ? classes.active : ''}`}>
              25
            </div>
            <div className={`${this.props.value===50 ? classes.active : ''}`}>
              50
            </div>
          </div>

          <Slider
            value={this.props.value}
            min={1}
            step={1}
            max={50}
            tooltip={false}
            handleLabel={String(this.props.value)}
            orientation="horizontal"
            onChange={this.props.stockChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {n_stock: state.queryReducer.n_stock}
}

export default connect(mapStateToProps)(NumberofStock);
