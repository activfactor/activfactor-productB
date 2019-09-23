import React,{ Component } from 'react';
import ContentBlock from '../../../UI/ContentBlock';
import { connect } from 'react-redux';

// class Header extends Component{
//     renderContent = () => {
//         if(this.props.accountOverview){
//             return (
//               <div className="dashboard_header" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gridRowGap: '20px'}}>
//                 <ContentBlock
//                   number={this.props.accountOverview.totalValue}
//                   unit="$"
//                   description="Total Value"
//                 />
//                 <ContentBlock
//                   number={this.props.accountOverview.availableCash}
//                   unit="$"
//                   description="Available Cash"
//                 />
//                 <ContentBlock
//                   number={
//                     this.props.accountOverview.totalPercentReturn
//                   }
//                   unit="%"
//                   description="Total Percent Return"
//                 />
//                 <ContentBlock
//                   number={
//                     this.props.accountOverview.totalAbsoluteReturn
//                   }
//                   unit="$"
//                   description="Total Absolute Return"
//                 />
//                 <ContentBlock
//                   number={
//                     this.props.accountOverview.dayPercentReturn
//                   }
//                   unit="%"
//                   description="Day Percent Return"
//                 />
//                 <ContentBlock
//                   number={
//                     this.props.accountOverview.dayAbsoluteReturn
//                   }
//                   unit="$"
//                   description="Day Absolute Return"
//                 />
//
//               </div>
//             );
//         } else {
//             return (
//               <div className="dashboard_header">
//                 <ContentBlock
//                   number="320"
//                   unit="$"
//                   description="Account Worth"
//                 />
//                 <ContentBlock
//                   number="109"
//                   unit="$"
//                   description="Account Gain"
//                 />
//                 <ContentBlock
//                   number="280"
//                   unit="$"
//                   description="Watchlists Worth"
//                 />
//                 <ContentBlock
//                   number="5"
//                   unit="%"
//                   description="Watchlists Gain"
//                 />
//               </div>
//             );
//
//         }
//     }
//
//     render(){
//         return(
//             <React.Fragment>
//                 {this.renderContent()}
//             </React.Fragment>
//         );
//     }
// }

class Header extends Component{
    renderContent = () => {
        if(this.props.accountOverview){
            return (
              <div className="dashboard_header">
                  <ContentBlock
                    number={this.props.accountOverview.totalValue}
                    unit="$"
                    description="Total Value"
                  />
                  <ContentBlock
                    number={this.props.accountOverview.availableCash}
                    unit="$"
                    description="Available Cash"
                  />
                  <ContentBlock
                    number={
                        this.props.accountOverview.totalPercentReturn
                    }
                    unit="%"
                    description="Total Percent Return"
                  />
                  <ContentBlock
                    number={
                        this.props.accountOverview.totalAbsoluteReturn
                    }
                    unit="$"
                    description="Total Absolute Return"
                  />
                  <ContentBlock
                    number={
                        this.props.accountOverview.dayPercentReturn
                    }
                    unit="%"
                    description="Day Percent Return"
                  />
                  <ContentBlock
                    number={
                        this.props.accountOverview.dayAbsoluteReturn
                    }
                    unit="$"
                    description="Day Absolute Return"
                  />

              </div>
            );
        } else {
            return (
              <div className="dashboard_header">
                  <div className="_item">
                      <div className="_title">Account Worth</div>
                      <div className="_value">$320</div>
                  </div>
                  <div className="_item">
                      <div className="_title">Account Gain</div>
                      <div className="_value">$109</div>
                  </div>
                  <div className="_item">
                      <div className="_title">Watchlists Worth</div>
                      <div className="_value">$280</div>
                  </div>
                  <div className="_item">
                      <div className="_title">Watchlists Gain</div>
                      <div className="_value">5%</div>
                  </div>
              </div>
            );

        }
    }

    render(){
        return(
          <React.Fragment>
              {this.renderContent()}
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accountOverview: state.tradeitReducers.accountOverview
    };
}

export default connect(mapStateToProps)(Header);