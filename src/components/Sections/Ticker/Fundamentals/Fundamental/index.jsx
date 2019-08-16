import React,{ Component } from 'react';
import { CapString } from '../../../../../utils/textFunctions'
import Header from '../../../../UI/Header';
import { getClass, getValue } from '../../../../../utils/textFunctions'

class Fundamental extends Component{

    renderContent(){
        return Object.keys(this.props.fundamental).map(key => {
            return (
              <div className="row">
                <div className="col-8">
                  <span className="text-secondary" style={{fontSize: '12px'}}>
                    {CapString(
                      String(key)
                        .split("_")
                        .join(" ")
                    )}
                  </span>
                </div>
                <div className="col-4">
                  <span
                    className={getClass(
                      this.props.fundamental[key]
                    )}
                  >
                    {getValue(this.props.fundamental[key])}
                  </span>
                </div>
              </div>
            );
        })
    }

    render(){
        return (
          <div className="charts-card-item" style={{margin: '2px'}}>
            <Header header={this.props.fundamentalName} />
            <div className="_card-body">
                {this.renderContent()}
            </div>
          </div>
        );
    }
}

export default Fundamental;