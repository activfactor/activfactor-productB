import React,{ Component } from 'react';
import classes from './index.module.scss';
import { connect } from 'react-redux';
import Modal from '../../../../UI/Modal';
import Spinner from '../../../../UI/Spinner/SpinnerButton';
import Message from '../../../../UI/Message';
import { resetQuery,resetFactorScreener } from '../../../../../actions/strategyBuilder';


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
              <button className={classes.modalbtn} onClick={this.props.onSubmit}>Save</button>
              <button className={classes.modalbtn} onClick={this.props.cancelModal}>Cancel</button>
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
        <Message>
            <div className={classes.messageheader} style={this.props.saving_message ? {color:'green'} : {color:'red'}}>{responseMessage}</div>
            <span className={classes.messagespan}>
                <button className={classes.messagebtn} onClick={this.props.DismissMessage}>OK</button>
            </span>
        </Message>
      );
    } else if (this.props.show){
      console.log(this.props.show)
      return (
        <Modal onDismiss={this.props.cancelModal}>
          <div className={classes.modalcontainer}>
            <div className={classes.modalheader}>Saving the strategy</div>
            <input className={classes.modalinput} type="input" placeholder="Please enter the strategy name" onChange={this.props.getStrategyName} />
            <div className={classes.btncontainer}>
              {this.renderInput()}
            </div>
          </div>
        </Modal>
      );
    } else {
      return <div></div>;
    }
  }

  render(){
    return (
      <div className={classes.stockContainer}>
        {this.renderModal()}
        <div className={classes.stockContainerHeading}>Current Stocks</div>
        <div className={classes.stockContainerDesc}>
          This list is updated the last date of the month.
        </div>
        <div className={classes.stockTbls}>
          <table className={classes.table__class}>
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
              </tr>
            </thead>
            <tbody>
              {this.props.data
                ? Object.keys(this.props.data).map((row, i) => {
                    return (
                      <tr key={i}>
                        <td
                          data-label="Ticker"
                          className={classes.ticker}
                        >
                          <span className={classes.title}>{row} </span>
                          <span className={classes.desc}>
                            {this.props.data[row].name}
                          </span>
                        </td>
                        <td
                          data-label="Sector"
                          className={classes.SectorLabel}
                        >
                          {this.props.data[row].sector}
                        </td>
                        <td
                          data-label="Momentum"
                          className={this.props.data[row].momentum_rank < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].momentum_rank ? this.props.data[row].momentum_rank : "---"}
                        </td>
                        <td 
                          data-label="Value"
                          className={this.props.data[row].value_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].value_rank ? this.props.data[row].value_rank : "---"}
                        </td>
                        <td
                          data-label="Size"
                          className={this.props.data[row].size_rank < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].size_rank? this.props.data[row].size_rank : "---"}
                        </td>
                        <td
                          data-label="Volatility"
                          className={this.props.data[row].volatility < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].volatility_rank ? this.props.data[row].volatility_rank : "---"}
                        </td>
                        <td 
                          data-label="Investment"
                          className={this.props.data[row].investment_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].investment_rank ? this.props.data[row].investment_rank : "---"}
                        </td>
                        <td 
                          data-label="Profitability"
                          className={this.props.data[row].profitability_rank < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].profitability_rank ? this.props.data[row].profitability_rank : "---"}
                        </td>
                        <td
                          data-label="Weight"
                          // className={this.props.data[row]["weight_%"] < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row]["weight_%"] ? this.props.data[row]["weight_%"]+"%" : "---"}
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
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