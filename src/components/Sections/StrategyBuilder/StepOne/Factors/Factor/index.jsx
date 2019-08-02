import React,{ Component } from 'react';

class Factor extends Component{
  state ={checked: this.props.checked ? this.props.checked : false}

    onCheckHandler = () => {
      this.setState(prevState => ({checked:!prevState.checked}))
    }

    componentWillReceiveProps(nextProps){
      this.setState({checked: false});
    }

    render(){
      return (
        <div className="checkbox--item">

          <label>
            <input
              type="checkbox"
              value={this.props.value}
              onChange={this.props.onChange}
              checked={this.state.checked}
              onClick={this.onCheckHandler}
            />
            <i />
            <span className="_text-label">{this.props.value} </span>
          </label>

          <button className="btn tooltip-container tooltip--icon">
            <i className="_icon-question fas fa-question"></i>
            <span className="_tooltip-content">{this.props.tooltip}</span>
          </button>

          {/*<span className="_ruestion-info" />*/}

        </div>
    );
    }
    
};

export default Factor;