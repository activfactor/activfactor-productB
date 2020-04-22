import React,{ Component } from 'react';
import Tooltip from '../../../../../UI/Tooltip';

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

          <Tooltip text={this.props.tooltip} />

          {/*<span className="_ruestion-info" />*/}

        </div>
    );
    }
    
};

export default Factor;