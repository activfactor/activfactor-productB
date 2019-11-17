import React from "react";
import { connect } from 'react-redux';

const Shariah = props => {
  return (
    <React.Fragment>
      <div className="section-title_h3">Shariah Compliant stocks</div>
      <div className="can-toggle">
        <input
          id="a"
          type="checkbox"
          onChange={props.onShariahChange}
          checked={props.defaultChecked}
        />
        <label htmlFor="a">
          <div
            className="can-toggle__switch"
            data-checked="Yes"
            data-unchecked="No"
          ></div>
          <div className="can-toggle__label-text"></div>
        </label>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
    return {
        data: state.queryReducer
    }
}

export default connect(mapStateToProps)(Shariah);
