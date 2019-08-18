import React,{ Component } from 'react';
import ContentBlock from '../../../UI/ContentBlock';
import Input from '../../../UI/Input';
import GroupInput from '../../../UI/Input/GroupInput';

class Header extends Component{
    render(){
        return(
        <div className="dashboard_strategy-list">
            <div className="_strategy-list-item" style={{overflow: 'visible'}}>
            <div className="_item-strategy-monitor">
                <div className="_text-normal">{this.props.ticker}</div>
                <div className="_text0-normal" >{this.props.name}</div>
                <div className="_text0-normal" >{this.props.sector}</div>
                <div className="_text0-normal" >{this.props.industry}</div>
            </div>
            <div className="bd-example mt-3">
                <Input nameOfClass="btn btn-primary mr-1" value="Trade" type="button" />
                <GroupInput buttonName="Add to Watchlist" disabled={this.props.disabled}>
                    <Input nameOfClass="dropdown-item" type="submit" value="Create Watchlist" onClick={() => this.props.AddToWatchlist('new')} />
                    <Input nameOfClass="dropdown-item" type="submit" value="Existing Watchlist" onClick={() => this.props.AddToWatchlist('exist')} />
                </GroupInput>
            </div>
            </div>
            <ContentBlock
            number={this.props.priceID}
            unit="$"
            description="Last Price"
            />
            <ContentBlock
            number={this.props.changeID}
            unit="%"
            description="1 Day % Change"
            />
            <ContentBlock
            number={this.props.performanceID}
            unit="$"
            description="1 Day Change"
            />
        </div>
        );
    }
}

export default Header;