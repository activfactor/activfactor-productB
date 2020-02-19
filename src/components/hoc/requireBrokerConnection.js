import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLocation, updateShouldNavigateTo } from '../../actions';
import history from '../../history';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.accountNumber || !this.props.token) {
        this.props.updateShouldNavigateTo(history.location.pathname);
        history.push("/brokers");
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { accountNumber: state.tradeitReducers.accountNumber, token: state.tradeitReducers.token };
  }

  return connect(mapStateToProps, {updateLocation, updateShouldNavigateTo})(ComposedComponent);
};
