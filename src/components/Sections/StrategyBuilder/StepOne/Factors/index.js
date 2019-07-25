import React, { Component } from "react";
import classes from "./index.module.scss";
import Factor from "./Factor";
import { connect } from 'react-redux';
import {CapString} from '../../../../../utils/textFunctions';

class Factors extends Component {

  render() {
    return (
      <div className={classes.factors}>
        <div className="section-title_h3">Factors</div>
        <div className={classes.factorscontrols}>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Momentum') : false} value="Momentum" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Value') : false} value="Value" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Size') : false} value="Size" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Volatility') : false} value="Volatility" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Investment') : false} value="Investment" onChange={this.props.factorChange}/>
          <Factor reset={this.props.reset} checked={this.props.factors ? CapString(this.props.factors).includes('Profitability') : false} value="Profitability" onChange={this.props.factorChange}/>
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
