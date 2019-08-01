import React, { Component } from "react";
import classes from "./index.module.scss";
import { connect } from 'react-redux';

class NumberofStock extends Component {
  render() {
    return (
      <div className="nos-step-one-container">
        <div className="section-title_h3"># Number of Stock</div>
        <div className="NumberOfStock-rangeSlider">
            <input
            type="range"
            name="stock" 
            value={this.props.value}
            min="1"
            max="50"
            step="1"
            onChange={this.props.stockChange}
            className="_input"/>
            <div className="_label">{this.props.value}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {n_stock: state.queryReducer.n_stock}
}

export default connect(mapStateToProps)(NumberofStock);