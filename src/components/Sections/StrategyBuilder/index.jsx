import React,{ Component } from 'react';
import classes from './index.module.scss';
import AnalyzeResults from './StepTwo/AnalyzeResults';
import BuildStrategy from './StepOne';
import CustomizedPortfolio from './StepThree';
import { connect } from 'react-redux';
import { queryUpdate, resetQuery } from '../../../actions/index';
import requireAuth from '../../hoc/requireAuth';

class StrategyBuilder extends Component{
    state={
        BuildStrategy:false,
        AnalyzeResults:null,
        CustomizedPortfolio:null,
        query: "",
    }

    renderWizard = () => {
        if (this.state.BuildStrategy===false && this.state.AnalyzeResults===null && this.state.CustomizedPortfolio===null){
            return (
                <BuildStrategy onClick={this.onSubmitHandler}/>
            );
        } else if (this.state.AnalyzeResults===false && this.state.BuildStrategy===true){
            return (
                <AnalyzeResults modify={this.modifyHandler} customizePortfolio={this.customizePortfolio} />
            );
        } else if (this.state.CustomizedPortfolio===false && this.state.AnalyzeResults===true && this.state.BuildStrategy===true){
            return (
                <CustomizedPortfolio AnalyuzeResult={this.AnalyuzeResult}/>
            );
        }
    }

    AnalyuzeResult = () => {
        this.setState({BuildStrategy:true,AnalyzeResults:false,CustomizedPortfolio:null})
    }

    modifyHandler = () => {
        this.setState({BuildStrategy:false,AnalyzeResults:null,CustomizedPortfolio:null})
    }

    customizePortfolio = () => {
        this.setState({AnalyzeResults:true,CustomizedPortfolio:false})
    }

    onSubmitHandler = (values) => {
        this.props.queryUpdate(values);
        this.setState({BuildStrategy:true,AnalyzeResults:false,query:values});
    }

    render(){
        return(
            <section>
                <div className={classes.headers}>
                    <p>{`Last Update ${this.props.data.last_update}`}</p>
                    <p>{`Next Update ${this.props.data.next_update}`}</p>
                </div>
                <div className={classes.container}>
                    <ul>
                      <li className={`${this.state.BuildStrategy===false ? classes.active : this.state.BuildStrategy===true ? classes.done : ''}`}>Build your strategy</li>
                      <li className={`${this.state.AnalyzeResults===false ? classes.active : this.state.AnalyzeResults===true ? classes.done : ''}`}>Analyze results</li>
                      <li className={`${this.state.CustomizedPortfolio===false ? classes.active : this.state.CustomizedPortfolio===true ? classes.done : ''}`}>Customized portfolio</li>
                    </ul>
                    {this.renderWizard()}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorScreener
    };
}

export default connect(mapStateToProps,{queryUpdate,resetQuery})((requireAuth(StrategyBuilder)));