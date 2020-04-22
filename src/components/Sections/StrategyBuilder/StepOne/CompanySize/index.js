import React, { Component } from "react";
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
         this.props.companySizeChange(value, this.state.largeClasses === '' ? true : false);
       } else if(value==='medium') {
        this.setState({mediumClasses:`${this.state.mediumClasses ==='' ? 'active' : ''}`})
        this.props.companySizeChange(value, this.state.mediumClasses === '' ? true : false);
       } else if(value==='small') {
        this.setState({smallClasses:`${this.state.smallClasses === '' ? 'active' : ''}`})
        this.props.companySizeChange(value, this.state.smallClasses === '' ? true : false);
       }
       
    }

  render() {
    return (
      <div className="company-size-container">
        <div className="section-title_h3">Company Size</div>

        <div className="company-size_btn-grid">
          <Button
            value="large"
            valueDisplay="Large"
            span={this.props.buttonDefinition('large')}
            onClick={this.onClickHandler}
            nameOfClass={this.state.largeClasses} />
          <Button
            value="medium"
            valueDisplay="Medium"
            span={this.props.buttonDefinition('medium')}
            onClick={this.onClickHandler}
            nameOfClass={this.state.mediumClasses} />
          <Button
            value="small"
            valueDisplay="Small"
            span={this.props.buttonDefinition('small')}
            onClick={this.onClickHandler}
            nameOfClass={this.state.smallClasses} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firm_size: state.queryReducer.firm_size,
  }
}

export default connect(mapStateToProps)(CompanySize);
