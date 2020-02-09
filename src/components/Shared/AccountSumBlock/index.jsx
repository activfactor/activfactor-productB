import React,{ Component } from 'react';
import ContentInfo from './ContentInfo';
import { connect } from 'react-redux';
import { Container, Row } from './style';

class Header extends Component{
    renderContent = () => {
        if(this.props.accountOverview){
            return (
              <Container>
                <Row>
                  <ContentInfo
                    number={this.props.accountOverview.totalValue}
                    unit="$"
                    description="Total Value"
                  />
                  <ContentInfo
                    number={this.props.accountOverview.availableCash}
                    unit="$"
                    description="Available Cash"
                  />
                  <ContentInfo
                    number={
                        this.props.accountOverview.totalPercentReturn
                    }
                    unit="%"
                    description="Total Percent Return"
                  />
                </Row>
                <Row>
                  <ContentInfo
                    number={
                        this.props.accountOverview.totalAbsoluteReturn
                    }
                    unit="$"
                    description="Total Absolute Return"
                  />
                  <ContentInfo
                    number={
                        this.props.accountOverview.dayPercentReturn
                    }
                    unit="%"
                    description="Day Percent Return"
                  />
                  <ContentInfo
                    number={
                        this.props.accountOverview.dayAbsoluteReturn
                    }
                    unit="$"
                    description="Day Absolute Return"
                  />
                </Row>
              </Container>
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