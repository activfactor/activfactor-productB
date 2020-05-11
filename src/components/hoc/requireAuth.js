import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLocation } from '../../actions';

export default ChildComponent => {
  class ComposedComponent extends Component {
    state = {
      error: null,
      errorInfo: null
    }
    componentDidMount() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.token) {
        this.props.history.push("/login");
      }
    }

    render() {
      return (
        <ChildComponent {...this.props}/>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { token: state.auth.token };
  }

  return connect(mapStateToProps, {updateLocation})(ComposedComponent);
};
