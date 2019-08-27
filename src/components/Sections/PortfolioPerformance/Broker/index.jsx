import React,{ Component } from 'react';

class Broker extends Component{
    render(){
        return(
            <div className="dashboard_strategy-list p-4">
                <div className="_strategy-list-item m-3">
                  <div className="_title">
                    {this.props.children}
                  </div>
                </div>
              </div>
        );
    }
}

export default Broker;