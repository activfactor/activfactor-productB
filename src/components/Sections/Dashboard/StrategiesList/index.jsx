import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Strategy from './Strategy';

class StrategyList extends Component{
    renderStrategies(){
        if (this.props.user_strategies){
            if (this.props.user_strategies !== "Your are not following any strategy"){
                const strategies = this.props.user_strategies;
                return (
                    Object.keys(strategies).map(strategy => {
                    return <Strategy 
                            strategyName={strategy} 
                            numberID={strategies[strategy]["strategy_perf_1d"]} 
                            descriptionID="ID"
                            numberWTD={strategies[strategy]["strategy_perf_wtd"]}
                            descriptionWTD="WTD"
                            numberMTD={strategies[strategy]["strategy_perf_mtd"]}
                            descriptionMTD="MTD"
                        />
                    })
                )
            } else {
                return <div>{this.props.user_strategies}</div>
            }
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.renderStrategies()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user_strategies: state.factorDashboard.user_strategies
    }
}

export default connect(mapStateToProps)(StrategyList);