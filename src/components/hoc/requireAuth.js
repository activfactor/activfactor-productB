import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLocation } from '../../actions';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.authenticated) {
        this.props.history.push("/login");
        this.props.updateLocation("/login"); // for active navigation
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps, {updateLocation})(ComposedComponent);
};
