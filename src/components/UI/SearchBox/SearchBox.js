import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getTickerDetails, updateTickerName } from '../../../actions/ticker';
import { updateLocation } from '../../../actions/index';
import history from '../../../history';

class SearchBox extends Component {
    state = {
        searchInput: '',
        tickersFromSearch: [],
        ulFocus: false
    }

    onClickHandler = (ticker) => {
        this.setState({tickersFromSearch: []})
        this.props.updateTickerName(ticker);
        this.props.getTickerDetails(ticker);
        history.push('/ticker-monitor');
        this.props.updateLocation('/');
    }

    onSubmitHandler = () => {
        return
    }

    onChangeHandler = (e) => {
        if (e.target.value !== '' && e.target.value!==undefined && this.props.tickers){
            const tickers = [];
            let obj ={};
            Object.keys(this.props.tickers).map(ticker => {
                let destination = this.props.tickers[ticker].toString().toLowerCase();
                let source = e.target.value.toString().toLowerCase();
                obj[ticker] = this.props.tickers[ticker]
                if (destination.indexOf(source) === 0 || ticker.toString().toLowerCase().indexOf(source) === 0){
                    tickers.push(obj);
                } else if(tickers.includes(obj)) {
                    tickers.pop(obj);
                }
                obj={};
                return tickers
            })
            this.setState({tickersFromSearch: tickers});
        } else {
            this.setState({tickersFromSearch: []});
        }
    }



    renderOptions(){
        if(this.state.tickersFromSearch.length>0 && this.props.tickers){
            return (
                this.state.tickersFromSearch.map((ticker, index) => {
                    const tickerArr = Object.keys(ticker);
                    return (
                        <li style={{cursor: 'pointer'}} key={index} onClick={() => this.onClickHandler(tickerArr[0])} className="list-group-item list-group-item-action"><span className="text-primary">{tickerArr[0]}</span>    |    <span className="text-secondary">{ticker[tickerArr[0]]}</span></li>
                    );
                })
            );
        }
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmitHandler)} className="input-group search-input-group position-relative" autoComplete="off">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                    </div>
                    <Field name="search" component="input" type="text" placeholder="Search" className="form-control" onChange={this.onChangeHandler}/>
                    <ul className="list-group position-absolute" style={{maxHeight: '300px', overflow: 'scroll', transform:'translateY(42px)', zIndex: '1000'}}>
                        {this.renderOptions()}
                    </ul>
            </form>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        tickers: state.tickerReducers.tickerList
    }
}

export default reduxForm({
    form: "searchForm"
})(connect(mapStateToProps,{getTickerDetails,updateLocation,updateTickerName})(SearchBox));