import React, { Component } from "react";
import SBCurrentTracker from "./SBCurrentTracker";
import ActionButtons from "./ActionButtons/index";
import classes from './index.module.scss';
class StrategyBuilder3 extends Component {
    render() {
        return (

            <section className={classes.maincontainer}>
                <div className={classes.container}>
                    <div className={classes.strategy}>
                        <SBCurrentTracker />


                    </div>
                    <div className={classes.ActionButtonsContainer}>    <ActionButtons AnalyuzeResult={this.props.AnalyuzeResult}/></div>

                </div>
            </section>


        );
    }
}

export default StrategyBuilder3;
