import React, { Component } from "react";
import Input from '../../../../UI/Input';
import GroupInput from '../../../../UI/Input/GroupInput';


class ActionButtons extends Component {

    render() {

        return (
            <div className="strategy-builder_btn-container">
              <Input nameOfClass="btn btn-outline-primary" type="submit" value="Analyze results" onClick={this.props.AnalyuzeResult} />
              <GroupInput buttonName="Add to Watchlist" disabled={this.props.disabled}>
                <Input nameOfClass="dropdown-item" type="submit" value="Create Watchlist" onClick={() => this.props.AddToWatchlist('new')} />
                <Input nameOfClass="dropdown-item" type="submit" value="Existing Watchlist" onClick={() => this.props.AddToWatchlist('exist')} />
              </GroupInput>
              <Input nameOfClass="btn btn-primary" type="submit" value="Replicate Strategy" onClick={this.props.ReplicateStrategy} />
              
            </div>
        );
    }
}

export default ActionButtons;
