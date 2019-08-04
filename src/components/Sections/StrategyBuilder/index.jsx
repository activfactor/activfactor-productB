import React,{ Component } from 'react';
import AnalyzeResults from './StepTwo/AnalyzeResults';
import BuildStrategy from './StepOne';
import CustomizedPortfolio from './StepThree';
import { connect } from 'react-redux';
import { queryUpdate, resetQuery, resetFactorScreener } from '../../../actions/strategyBuilder';
import requireAuth from '../../hoc/requireAuth';

class StrategyBuilder extends Component{
    state={
        BuildStrategy:false,
        AnalyzeResults:null,
        CustomizedPortfolio:null,
        query: "",
    }

    DismissError = () => {
        this.setState({BuildStrategy:false,AnalyzeResults:null,CustomizedPortfolio:null})
    }

    renderWizard = () => {
        if (this.state.BuildStrategy===false && this.state.AnalyzeResults===null && this.state.CustomizedPortfolio===null){
            return (
                <BuildStrategy onClick={this.onSubmitHandler}/>
            );
        } else if (this.state.AnalyzeResults===false && this.state.BuildStrategy===true){
            return (
                <AnalyzeResults modify={this.modifyHandler} customizePortfolio={this.customizePortfolio} DismissError={this.DismissError} />
            );
        } else if (this.state.CustomizedPortfolio===false && this.state.AnalyzeResults===true && this.state.BuildStrategy===true){
            return (
                <CustomizedPortfolio AnalyuzeResult={this.AnalyuzeResult} DismissMessage={this.DismissMessage}/>
            );
        }
    }

    DismissMessage = () => {
        
        if (this.props.saving_message){
            this.props.resetQuery();
            this.props.resetFactorScreener();
            this.setState({BuildStrategy:false,AnalyzeResults:null,CustomizedPortfolio:null});
        } else if (this.props.error_saving_message){
            this.setState({BuildStrategy:false,AnalyzeResults:null,CustomizedPortfolio:null});
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
        const oldQuery = {
            "country": this.props.query.country,
            "sectors": this.props.query.sectors + ",",
            "factors": this.props.query.factors + ",",
            "n_stock": this.props.query.n_stock,
            "firm_size": this.props.query.firm_size + ","
        }
        if (JSON.stringify(oldQuery) !== JSON.stringify(values)){
            this.props.resetFactorScreener();
        }
        this.props.queryUpdate(values);
        this.setState({BuildStrategy:true,AnalyzeResults:false,query:values});
    }

    renderHeaders = () => {
        if (this.state.BuildStrategy){
            return (
                <div className="main_breadcrumb">
                    <div>{`Last Update ${this.props.data.last_update}`}</div>
                    <div>{`Next Update ${this.props.data.next_update}`}</div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="strategy-builder">
                {this.renderHeaders()}
                <div className="strategy-builder_container">
                    <div className="strategy-builder_header">
                      <div className={`_header-item ${this.state.BuildStrategy===false ? '_header-active' : this.state.BuildStrategy===true ? '_header-done' : ''}`}>Build your strategy</div>
                      <div className={`_header-item ${this.state.AnalyzeResults===false ? '_header-active' : this.state.AnalyzeResults===true ? '_header-done' : ''}`}>Analyze results</div>
                      <div className={`_header-item ${this.state.CustomizedPortfolio===false ? '_header-active' : this.state.CustomizedPortfolio===true ? '_header-done' : ''}`}>Customized portfolio</div>
                    </div>
                    {this.renderWizard()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.factorScreener,
        saving_message: state.factorScreener.saving_message,
        error_saving_message: state.factorScreener.error_saving_message,
        query: state.queryReducer
    };
}

export default connect(mapStateToProps,{queryUpdate,resetQuery,resetFactorScreener})((requireAuth(StrategyBuilder)));