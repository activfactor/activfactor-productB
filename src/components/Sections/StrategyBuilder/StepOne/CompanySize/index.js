import React, { Component } from "react";
import classes from "./index.module.scss";
import Button from './Button';
import { connect } from 'react-redux';

class CompanySize extends Component {
    state = {
        largeClasses:'',
        mediumClasses:'',
        smallClasses:'',
    }

    componentDidMount(){
      if (this.props.firm_size){
        const companies = this.props.firm_size.split(',');
        companies.map(company => {
          return this.onClickHandler(company);
        })
      }
    }

    componentWillReceiveProps(){
      this.setState({
        largeClasses:'',
        mediumClasses:'',
        smallClasses:'',
      })
    }

    onClickHandler = (value) => {
       if (value==='large'){
         this.setState({largeClasses:`${this.state.largeClasses === '' ? 'active' : ''}`})
       } else if(value==='medium') {
        this.setState({mediumClasses:`${this.state.mediumClasses ==='' ? 'active' : ''}`})
       } else if(value==='small') {
        this.setState({smallClasses:`${this.state.smallClasses === '' ? 'active' : ''}`})
       }
       this.props.companySizeChange(value);
    }

  render() {
    return (
      <div className={classes.companySize}>
        <div className="section-title_h3">Company Size</div>
        <div className={classes.btns}>
          <Button
            value="large"
            valueDisplay="Large"
            span="Market capitalization greater than 1 billion"
            onClick={this.onClickHandler}
            nameOfClass={this.state.largeClasses} />
          <Button
            value="medium"
            valueDisplay="Medium"
            span="Market capitalization between 2 billion and 10 billion"
            onClick={this.onClickHandler}
            nameOfClass={this.state.mediumClasses} />
          <Button
            value="small"
            valueDisplay="Small"
            span="Market capitalization between 300 million and 2 billion"
            onClick={this.onClickHandler}
            nameOfClass={this.state.smallClasses} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firm_size: state.queryReducer.firm_size
  }
}

export default connect(mapStateToProps)(CompanySize);
