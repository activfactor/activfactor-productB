import React, { Component } from "react";

class GroupInput extends Component {
  state = {
    display: "none"
  };
  
  onClickHandler = () => {
      if (this.state.display==='none'){
          this.setState({display:'block'});
      } else {
          this.setState({display:'none'})
      }
  }

  render() {
    return (
        <div className="btn-group">
        <div className="btn-group">
          <button disabled={this.props.disabled} onClick={this.onClickHandler} type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="strategybuilder">
          {this.props.buttonName} <span className="caret"></span></button>
          <div className="dropdown-menu ml-2" style={{display: this.state.display}} onClick={this.onClickHandler}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupInput;
