import React, { Component } from "react";
import classes from "./index.module.scss";
import { connect } from 'react-redux';

class NumberofStock extends Component {
  render() {
    return (
      <div className={classes.stockNumberContainer}>
        <div className="section-title_h3"># Number of Stock</div>
        <div className={classes.rangeSlider}>
            <input
            type="range"
            name="stock" 
            value={this.props.value}
            min="1"
            max="50"
            step="1"
            onChange={this.props.stockChange}
            className={classes.input}/>
            <div className={classes.rangelabel}>{this.props.value}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {n_stock: state.queryReducer.n_stock}
}

export default connect(mapStateToProps)(NumberofStock);