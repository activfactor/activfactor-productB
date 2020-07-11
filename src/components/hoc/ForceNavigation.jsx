import React, { Component } from "react";
import { connect } from "react-redux";
import { URL } from 'config/appConfig';

export default ChildComponent => {
  class ComposedComponent extends Component {
    state = {
      error: null,
      errorInfo: null
    }
    // componentDidMount() {
    //     const pathname = window.location.pathname;
    //     if (!this.props.token && pathname!=='/login'){
    //       // this.shouldLogin();
    //     } else if (this.props.token && pathname==='/login'){
    //       this.shouldGoToDashboard();
    //     }
    // }

    componentDidUpdate(){
      const pathname = window.location.pathname;
      if (!this.props.token && pathname!=='/login'){
        // this.shouldLogin();
      } else if (this.props.token && pathname==='/login'){
        this.shouldGoToDashboard();
      }
    }

    shouldLogin() {
        window.top.location.href=URL.login;
    }

    shouldGoToDashboard(){
      this.props.history.push('/dashboard');
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

  return connect(mapStateToProps)(ComposedComponent);
};
