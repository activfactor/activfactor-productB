import React,{ Component } from 'react';
import classes from './index.module.scss';

class ContentBlock extends Component{
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.description}>{this.props.description}</div>
                <div className={classes.number}>{this.props.number}{this.props.unit}</div>
                <div className={classes.number}>{this.props.number2}{this.props.unit2}</div>
            </div>
        );
    }
}

export default ContentBlock;