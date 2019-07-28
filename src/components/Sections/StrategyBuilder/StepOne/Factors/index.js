import React, { Component } from "react";
import classes from "./index.module.scss";
import Factor from "./Factor";
import { connect } from 'react-redux';

class Factors extends Component {

  render() {
    return (
      <div className={classes.factors}>
        <div className="section-title_h3">Factors</div>
        <div className={classes.factorscontrols}>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('momentum') : false} value="momentum" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('size') : false} value="size" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('value') : false} value="value" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('volatility') : false} value="volatility" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('investment') : false} value="investment" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? this.props.factors.includes('profitability') : false} value="profitability" onChange={this.props.factorChange}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    factors: state.queryReducer.factors
  }
}

export default connect(mapStateToProps)(Factors);
