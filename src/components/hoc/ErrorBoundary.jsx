import React, { Component } from "react";

export default ChildComponent => {
  class ComposedComponent extends Component {
    state = {
      error: null,
      errorInfo: null
    }

    componentDidCatch(error, errorInfo){
      this.setState({error, errorInfo})
    }

    render() {
      const {error, errorInfo} = this.state;
      return (
        error ? <ChildComponent {...this.props} rootError={error} rootErrorInfo={errorInfo}/> : <ChildComponent {...this.props}/>
      )
    }
  }

  return ComposedComponent;
};
