import React,{ Component } from 'react';
import ContentBlock from '../../../UI/ContentBlock';

class Header extends Component{
    render(){
        return(
            <div className="dashboard_strategy-list">
              <div className="_strategy-list-item _item-title">
                <div>{this.props.watchListName}</div>
              </div>
              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberID} unit="%" description={this.props.descriptionID} />
              </div>

              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberWTD} unit="%" description={this.props.descriptionWTD} />
              </div>

              <div className="_strategy-list-item">
                <ContentBlock number={this.props.numberMTD} unit="%" description={this.props.descriptionMTD} />
              </div>

            </div>
        );
    }
}

export default Header;