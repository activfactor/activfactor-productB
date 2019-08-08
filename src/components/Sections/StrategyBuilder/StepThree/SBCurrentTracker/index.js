import React,{ Component } from 'react';
// import classes from './index.module.scss';
import { connect } from 'react-redux';
import Backdrop from '../../../../UI/BackDrop';
import Spinner from '../../../../UI/Spinner/SpinnerButton';
// import Modal from '../../../../UI/Modal';
import { resetQuery,resetFactorScreener } from '../../../../../actions/strategyBuilder';
import { getClass , getValue } from '../../../../../utils/textFunctions';


class SBCurrentTracker extends Component {

  renderInput = () => {
    if (this.props.isSpinner){
      return (
        <React.Fragment>
          <button className="btn btn-outline-primary" onClick={this.props.cancelModal}>Cancel</button>
          <button className="btn btn-primary" onClick={this.props.onSubmit}><Spinner color="white" nameOfClass="modal__btn-spinner" /></button>
        </React.Fragment>
      );
  } else {
      return(
          <React.Fragment>
              <button className="btn btn-outline-primary" onClick={this.props.cancelModal}>Cancel</button>
              <button className="btn btn-primary" onClick={this.props.onSubmit}>Save</button>
          </React.Fragment>
      );
  }
  }

  renderModal = () => {
    if (this.props.saving_message || this.props.error_saving_message){
      this.props.cancelModal();
      let responseMessage=''
      if (this.props.saving_message){
        responseMessage=this.props.saving_message
      } else if (this.props.error_saving_message){
        responseMessage=this.props.error_saving_message;
      }
      return (
        <Backdrop>
          <div className="modal__body text-center">
            {
              this.props.saving_message ?
                <div className="modal__response-container _success">
                  <div className="_icon text-success"><i className="far fa-check-circle"></i></div>
                  <div className="modal__title">Saved!</div>
                  <div className="modal__response-text">{responseMessage}</div>
                  <div className="modal__btn-container">
                    <button className="btn btn-success" onClick={this.props.DismissMessage}>OK</button>
                  </div>
                </div> :
                <div className="modal__response-container _error">
                  <div className="_icon text-danger"><i className="far fa-times-circle"></i></div>
                  <div className="modal__title">Error!</div>
                  <div className="modal__response-text">{responseMessage}</div>
                  <div className="modal__btn-container">
                    <button className="btn btn-danger" onClick={this.props.DismissMessage}>OK</button>
                  </div>
                </div>
            }
          </div>
        </Backdrop>
      );
    } else if (this.props.show){
      return (
        <Backdrop onDismiss={this.props.cancelModal}>
          <div className="modal__body">
            <div className="modal__title">Saving the strategy</div>
            <div className="form-group">
              <input className="form-control" type="input" placeholder="Please enter the strategy name" onChange={this.props.getStrategyName} />
            </div>
            <div className="modal__btn-container modal__btn-container-grid">
              {this.renderInput()}
            </div>
          </div>
        </Backdrop>
      );
    } else {
      return <div></div>;
    }
  }

  render(){
    return (
      <div className="">

        {this.renderModal()}

        <div className="section__title">Current Stocks</div>
        <p>This list is updated the last date of the month.</p>

        <div className="card__table">
          <div className="table-responsive">
            <table className="table table-hover table-borderless">

              <thead>
                <tr>
                  <th scope="col">Ticker</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Momentum</th>
                  <th scope="col">Value</th>
                  <th scope="col">Size</th>
                  <th scope="col">Volatility</th>
                  <th scope="col">Investment</th>
                  <th scope="col">Profitability</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Add To Watchlist</th>
                </tr>
              </thead>

              <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                  return (
                    <tr key={i}>
                      <td
                        data-label="Ticker"
                        className=""
                      >
                        <div className="_row-text-medium">{row} </div>
                        <div className="_row-text-small">{this.props.data[row].name}</div>
                      </td>
                      <td
                        data-label="Sector"
                        className="text-muted"
                      >
                        {this.props.data[row].sector}
                      </td>
                      <td
                        data-label="Momentum"
                        className={getClass(this.props.data[row].momentum_rank)}
                      >
                        {getValue(this.props.data[row].momentum_rank)}
                      </td>
                      <td
                        data-label="Value"
                        className={getClass(this.props.data[row].value_rank)}>
                        {getValue(this.props.data[row].value_rank)}
                      </td>
                      <td
                        data-label="Size"
                        className={getClass(this.props.data[row].size_rank)}
                      >
                        {getValue(this.props.data[row].size_rank)}
                      </td>
                      <td
                        data-label="Volatility"
                        className={getClass(this.props.data[row].volatility)}
                      >
                        {getValue(this.props.data[row].volatility_rank)}
                      </td>
                      <td
                        data-label="Investment"
                        className={getClass(this.props.data[row].investment_rank)}>
                        {getValue(this.props.data[row].investment_rank)}
                      </td>
                      <td
                        data-label="Profitability"
                        className={getClass(this.props.data[row].profitability_rank)}>
                        {getValue(this.props.data[row].profitability_rank)}
                      </td>
                      <td
                        data-label="Weight"
                      >
                        {getValue(this.props.data[row]["weight_%"])!=='---' ? getValue(this.props.data[row]["weight_%"]).toFixed(2)+'%' : getValue(this.props.data[row]["weight_%"])}
                      </td>
                      <td className="_td-checkbox--item">
                        <div className="checkbox--item">
                          <label htmlFor={row}>
                            <input onChange={() => this.props.onCheckWatchListHandler(row)} type="checkbox" id={row} />
                            <i />
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })
                : ""}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
  
};

const mapStateToProps = state => {
  return{
    data: state.factorScreener.strategy_actual_members,
    saving_message: state.factorScreener.saving_message,
    error_saving_message: state.factorScreener.error_saving_message
  }
}

export default connect(mapStateToProps,{resetQuery,resetFactorScreener})(SBCurrentTracker);