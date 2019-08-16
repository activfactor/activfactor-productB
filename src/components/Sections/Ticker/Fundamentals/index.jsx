import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Fundamental from './Fundamental';

class Fundamentals extends Component{
    renderContent(){
        if (this.props.fundamentals){
            console.log(this.props.fundamentals)
            const fundamentals = this.props.fundamentals
            return Object.keys(fundamentals).map(fundamental => {
                return <Fundamental fundamentalName={fundamental} fundamental={fundamentals[fundamental]} />
            })
        }
        
    }

    render(){
        return(
            <div className="dashboard_strategy-list" style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'}}>
                    {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fundamentals: state.tickerReducers.tickerDetail.compagny.fundamental
    };
}

export default connect(mapStateToProps)(Fundamentals);