import React,{ Component } from 'react';
import Link from '../../../../UI/Link';
import ContentBlock from '../../../../UI/ContentBlock';
import classes from './index.module.scss';
import { connect } from 'react-redux';
import { changeStrategyName } from '../../../../../actions/StrategyMonitor';
import { updateLocation } from '../../../../../actions';

class Strategy extends Component{

    
    render(){
        return(
            <div className={classes.container}>
                <Link to='/strategy-monitor' onClick={() => {this.props.changeStrategyName(this.props.strategyName); this.props.updateLocation('/strategy-monitor')}}>{this.props.strategyName}</Link>
                <ContentBlock number={this.props.numberID} unit="%" description={this.props.descriptionID} />
                <ContentBlock number={this.props.numberWTD} unit="%" description={this.props.descriptionWTD} />
                <ContentBlock number={this.props.numberMTD} unit="%" description={this.props.descriptionMTD} />
            </div>
        );
    }
}

export default connect(null,{changeStrategyName, updateLocation})(Strategy);