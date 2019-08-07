import React, { Component } from "react";
import Input from '../../../../UI/Input';


class ActionButtons extends Component {

    render() {

        return (
            <div className="strategy-builder_btn-container">
              <Input nameOfClass="btn btn-outline-primary" type="submit" value="Analyze results" onClick={this.props.AnalyuzeResult} />
              <Input nameOfClass="btn btn-primary" type="submit" value="Add To Watchlist" onClick={this.props.AddToWatchlist} />
              <Input nameOfClass="btn btn-primary" type="submit" value="Replicate Strategy" onClick={this.props.ReplicateStrategy} />
            </div>
        );
    }
}

export default ActionButtons;
