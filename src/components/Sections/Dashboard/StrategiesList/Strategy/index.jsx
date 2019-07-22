import React,{ Component } from 'react';
import Link from '../../../../UI/Link';
import ContentBlock from '../../../../UI/ContentBlock';
import classes from './index.module.scss';

class Strategy extends Component{
    render(){
        return(
            <div className={classes.container}>
                <Link to="/#">{this.props.strategyName}</Link>
                <ContentBlock number={this.props.numberID} unit="%" description={this.props.descriptionID} />
                <ContentBlock number={this.props.numberWTD} unit="%" description={this.props.descriptionWTD} />
                <ContentBlock number={this.props.numberMTD} unit="%" description={this.props.descriptionMTD} />
            </div>
        );
    }
}

export default Strategy;