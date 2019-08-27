import React,{ Component } from 'react';

class Broker extends Component{
    render(){
        return(
            <div onClick={() => this.props.BrokerClickHandler(this.props.broker.shortName)} className="dashboard_strategy-list" style={{display: 'flex', flex:1, justifyContent:'center', alignItems:'center', height:'200px', cursor:'pointer'}}>
                    {this.props.children}
              </div>
        );
    }
}

export default Broker;