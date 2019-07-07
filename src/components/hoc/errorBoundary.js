import React,{ Component } from 'react';
import Modal from '../UI/Modal';

class ErrorBoundary extends Component {
    state = { error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
      console.log("error");
    }

    render() {
      if (this.state.errorInfo) {
        return (
          <Modal>
            <div>
              <h2>Something went wrong.</h2>
              <details style={{ whiteSpace: "pre-wrap" }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </div>
          </Modal>
        );
      }

      return this.props.children;
    }
  }

  export default ErrorBoundary;