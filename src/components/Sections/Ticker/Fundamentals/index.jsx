import React,{ Component } from 'react';
import Momentum from './Fundamental/Momentum';
import Profitability from './Fundamental/Profitability';
import Risk from './Fundamental/Risk';
import Valuation from './Fundamental/Valuation';

class Fundamentals extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="dashboard_strategy-list" style={{gridTemplateColumns: '1fr 1fr'}}>
                    <Momentum />
                    <Profitability />
                </div>
                <div className="dashboard_strategy-list" style={{gridTemplateColumns: '1fr 1fr'}}>
                    <Valuation />
                    <Risk />
                </div>
            </React.Fragment>
        );
    }
}

export default Fundamentals;