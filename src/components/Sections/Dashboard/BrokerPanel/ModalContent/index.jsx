import React,{ Component } from 'react';
import Modal from '../../../../UI/Modal';
import DropDown from '../../../../UI/DropDown';
import classes from '../../../StrategyBuilder/StepThree/WatchListAdd/index.module.scss';
import { connect } from 'react-redux';
import { getAuthLogin, getToken, resetAuthURL } from '../../../../../actions/tradeit';

class ModuleName extends Component {
  state = {
    brokerName: "",
    isSpinner: false
  };

  componentDidMount(){
    if (this.props.brokerList){
        const brokerList = this.props.brokerList;
        this.setState({brokerName: brokerList[Object.keys(brokerList)[0]].shortName})
    }
  }

  componentDidUpdate(){
    if (this.props.oAuthURL && !this.props.userToken){ 
        this.props.new_window.open(this.props.oAuthURL, '_target');
    }
  }

  DropDownChangeHandler = e => {
    this.setState({ brokerName: e.target.value });
  };

  renderOptions = () => {
    if (this.props.brokerList) {
      const brokerList = this.props.brokerList;
      return Object.keys(brokerList).map((broker, index) => {
        return (
          <option key={index} value={brokerList[broker].shortName}>
            {brokerList[broker].longName}
          </option>
        );
      });
    }
  };

  onSubmitHandler = async () => {
    if (this.state.brokerName){
      if (!this.props.userToken){
        this.setState({ isSpinner: true });
        this.props.getAuthLogin(this.state.brokerName);
      } else {
        this.setState({ isSpinner: true });
        await this.props.getToken();
        this.cancelHandler();
      }
    }
  };

  componentWillUnmount(){
      this.setState({isSpinner: false});
  }

  renderSpinner = () => {
    if (this.state.isSpinner) {
      return (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      );
    } else {
      return "Login";
    }
  };

  cancelHandler = () => {
    this.setState({ isSpinner: false });
    this.props.cancelHandler();
    this.props.resetAuthURL();
  };

  render() {
    return (
      <Modal onDismiss={this.cancelHandler}>
        <div className={classes.modal_content}>
          <div className={classes.modal_header}>Saving the WatchList</div>
          <div className="">
            <div className="form">
              <DropDown
                color="blue"
                value={this.state.brokerName}
                DropDownChangeHandler={this.DropDownChangeHandler}
              >
                {this.renderOptions()}
              </DropDown>
            </div>
            <div className={`${classes.modal_btn_container} mt-3`}>
              <button
                className="btn btn-outline-primary"
                onClick={this.cancelHandler}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={this.onSubmitHandler}
              >
                {this.renderSpinner()}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
    return {
        brokerList: state.tradeitReducers.brokerList,
        oAuthURL: state.tradeitReducers.oAuthURL,
        userToken: state.tradeitReducers.userToken
    };
}

export default connect(mapStateToProps,{getAuthLogin, getToken,resetAuthURL})(ModuleName);