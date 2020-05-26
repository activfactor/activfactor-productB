import React, { Component } from "react";
import {Alert, SectionPage} from '../MaterialUIs';
import { Container } from './style';

class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info){
    this.setState({error, info});
  }

  render(){
    const {children} = this.props
    if (this.state.hasError){
      return (
            <Alert error={this.state.error || "Something went wrong"} title="Error" severity="error"/>
      )
    }
    return children;
  }
}

export default ErrorBoundary;
