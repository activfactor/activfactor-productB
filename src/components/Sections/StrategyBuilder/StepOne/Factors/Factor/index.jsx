import React,{ Component } from 'react';
import classes from './index.module.scss';

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
        <div className={classes.control}>
          <label>
            <input
              type="checkbox"
              value={this.props.value}
              className={classes.csscheckbox}
              onChange={this.props.onChange}
              checked={this.state.checked}
              onClick={this.onCheckHandler}
            />
            <i />
          </label>
          <span>{this.props.value} </span>
          <span className={classes.questionMark}>
            <i className={`icon-info_question fas fa-question-circle ${classes.tooltip}`}/>
            <span className={classes.tooltiptext}>{this.props.tooltip}</span>
          </span>
          <span className={classes.questionInfo} />
        </div>
    );
    }
    
};

export default Factor;