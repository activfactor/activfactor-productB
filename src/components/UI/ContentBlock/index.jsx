import React,{ Component } from 'react';
// import classes from './index.module.scss';

class ContentBlock extends Component{
    render(){
        return(
            <div className="dashboard_header-item">
                <div className="_header-item-title">{this.props.description}</div>
                <div className="_header-item-value">{this.props.number}{this.props.unit}</div>
              {
                this.props.number2 ?
                  <div className="_header-item-title">{this.props.number2}{this.props.unit2}</div> :
                  ''
              }
            </div>
        );
    }
}

export default ContentBlock;