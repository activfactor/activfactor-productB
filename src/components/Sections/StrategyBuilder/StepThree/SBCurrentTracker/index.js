import React,{ Component } from 'react';
import classes from './index.module.scss';
import { connect } from 'react-redux';
import Backdrop from '../../../../UI/BackDrop';
import Spinner from '../../../../UI/Spinner/SpinnerButton';
import Modal from '../../../../UI/Modal';
import { resetQuery,resetFactorScreener } from '../../../../../actions/strategyBuilder';
import { getClass , getValue } from '../../../../../utils/textFunctions';


class SBCurrentTracker extends Component {

  renderInput = () => {
    if (this.props.isSpinner){
      return (
        <React.Fragment>
            <button className={classes.modalbtn} onClick={this.props.onSubmit}><Spinner color="white" className={classes.spinner} /></button>
            <button className={classes.modalbtn} onClick={this.props.cancelModal}>Cancel</button>
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
        <Modal>
          <div className={classes.message_body}>
            <div className={`${this.props.saving_message ? 'text-success' : 'text-danger'} ${classes.message_text}`}>{responseMessage}</div>
            <span className={classes.message_btn_container}>
                <button className="btn btn-primary" onClick={this.props.DismissMessage}>OK</button>
            </span>
          </div>
        </Modal>
      );
    } else if (this.props.show){
      return (
        <Backdrop onDismiss={this.props.cancelModal} nameOfClass="with_white_background">
          <div className={classes.modal_content}>
            <div className={classes.modal_header}>Saving the strategy</div>
            <div className="">
              <div className="form-group">
                <input className="form-control" type="input" placeholder="Please enter the strategy name" onChange={this.props.getStrategyName} />
              </div>
              <div className={classes.modal_btn_container}>
                {this.renderInput()}
              </div>
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

        <div className="table-customized-portfolio">
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
              <tr>
                <th scope="col" className="text-start">Ticker</th>
                <th scope="col">Sector</th>
                <th scope="col">Momentum</th>
                <th scope="col">Value</th>
                <th scope="col">Size</th>
                <th scope="col">Volatility</th>
                <th scope="col">Investment</th>
                <th scope="col">Profitability</th>
                <th scope="col">Weight</th>
              </tr>
              </thead>
              <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                  return (
                    <tr key={i}>
                      <td
                        data-label="Ticker"
                        className="_td-ticker"
                      >
                        <div className="text-dark text-medium">{row} </div>
                        <div className="text-muted small">
                          {this.props.data[row].name}
                        </div>
                      </td>
                      <td
                        data-label="Sector"
                        className="text-dark"
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
                        {getValue(this.props.data[row]["weight_%"])}
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