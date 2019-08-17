import React, { Component } from "react";
import DropDown from "../../../../UI/DropDown";
import Modal from "../../../../UI/Modal";
import Backdrop from '../../../../UI/BackDrop';
import { connect } from "react-redux";
import {
  resetWathListMessage,
  addToExistingWatchList,
  addToNewWatchList
} from "../../../../../actions/watchlist";
import { resetDashboard } from "../../../../../actions/dashboard";
import classes from "./index.module.scss";

let styleBorder = "is-invalid";
let inputError = undefined;

class WatchListAdd extends Component {
  state = {
    isSpinner: false,
    WatchlistName: "",
    newWatchListName: "",
  };

  inputChangeHandler = e => {
    this.setState({ newWatchListName: e.target.value });
    if (
      Object.keys(this.props.watchlist).includes(e.target.value) || !e.target.value) {
        if (!e.target.value){
          inputError = 'This field is required';
        } else {
          inputError = 'This name is already exist'
        }
      styleBorder = "is-invalid";
    } else {
      styleBorder = null;
      inputError = undefined;
    }
  };

  renderNewWatchList() {
      return (
        <React.Fragment>
        <input
          value={this.state.newWatchListName}
          className={`form-control mt-3 ${styleBorder}`}
          type="input"
          placeholder="Please enter the Watchlist Name"
          onChange={this.inputChangeHandler}
        />
        {inputError ? <div className="text-danger mt-2">{inputError}</div> : ''}
        </React.Fragment>
      );
  }

  renderSpinner() {
    if (this.state.isSpinner) {
      return (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      );
    } else {
      return "Save";
    }
  }

  DropDownChangeHandler = e => {
    this.setState({ WatchlistName: e.target.value});
  };

  renderOptions() {
    if (this.props.watchlist.constructor === {}.constructor){
    let watchlistarr = Object.keys(this.props.watchlist);
    if (watchlistarr.length > 0) {
      return watchlistarr.map((watchlist, index) => {
        return (
          <option key={index} value={watchlist}>
            {watchlist}
          </option>
        );
      });
    }
  }
  }

  componentDidMount() {
    if (this.props.watchlist.constructor === {}.constructor){
      this.setState({ WatchlistName: Object.keys(this.props.watchlist)[0] });
    }
  }

  afterSavingHandler = () => {
    this.setState({ isSpinner: false });
    this.props.resetWathListMessage();
    this.setState({ newWatchListName: "" });
    this.props.cancelHandler();
  };

  cancelHandler = () => {
    this.setState({ isSpinner: false });
    this.props.cancelHandler();
  };

  onSubmitHandler = () => {
    if (this.state.WatchlistName !== "" || this.state.newWatchListName!=="") {
      let WatchlistName = "";
      if (this.props.kind === "new") {
        WatchlistName = this.state.newWatchListName;
      } else {
        WatchlistName = this.state.WatchlistName;
      }
      const dataToSend = {
        headers: {
          headers: {
            Authorization: `JWT ${this.props.token}`
          }
        },
        data: {
          user_id: this.props.userID,
          watchlist_name: WatchlistName,
          tickers: this.props.tickers
        }
      };
      if (this.props.kind === "new") {
        if (this.state.newWatchListName !== "" && !inputError) {
          if (this.props.tickers.length > 0) {
            this.setState({ isSpinner: true });
            this.props.addToNewWatchList(dataToSend);
          }
        }
      } else if (this.state.WatchListName!=='') {
        if (this.props.tickers.length > 0) {
          this.setState({ isSpinner: true });
          this.props.addToExistingWatchList(dataToSend);
        }
      }
    }
  };

  renderContent() {
    if (this.props.show) {
      if (!this.props.message) {
          return (
            <Modal onDismiss={this.cancelHandler}>
              <div className={classes.modal_content}>
                <div className={classes.modal_header}>Saving the WatchList</div>
                <div className="">
                  <div className="form">
                    {this.props.kind === 'exist' ?
                    <DropDown
                      color="blue"
                      value={this.state.WatchlistName}
                      DropDownChangeHandler={this.DropDownChangeHandler}
                    >
                      {this.renderOptions()}
                    </DropDown>
                    :
                    this.renderNewWatchList()
                    }
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
        
      } else {
        return (
          <Backdrop>
          <div className="modal__body text-center">
            {
              this.props.message==='Successful' ?
                <div className="modal__response-container _success">
                  <div className="_icon text-success"><i className="far fa-check-circle"></i></div>
                  <div className="modal__title">Saved!</div>
                  <div className="modal__response-text">{this.props.message}</div>
                  <div className="modal__btn-container">
                    <button className="btn btn-success" onClick={this.afterSavingHandler}>OK</button>
                  </div>
                </div> :
                <div className="modal__response-container _error">
                  <div className="_icon text-danger"><i className="far fa-times-circle"></i></div>
                  <div className="modal__title">Error!</div>
                  <div className="modal__response-text">{this.props.message}</div>
                  <div className="modal__btn-container">
                    <button className="btn btn-danger" onClick={this.afterSavingHandler}>OK</button>
                  </div>
                </div>
            }
          </div>
        </Backdrop>
        );
      }
    }
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.factorDashboard.watchlist,
    userID: state.auth.userID,
    token: state.auth.token,
    message: state.watchlistReducers.message
  };
};

export default connect(
  mapStateToProps,
  {
    addToExistingWatchList,
    resetWathListMessage,
    addToNewWatchList,
    resetDashboard
  }
)(WatchListAdd);
