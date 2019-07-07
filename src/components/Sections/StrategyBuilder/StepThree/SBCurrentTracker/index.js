import React,{ Component } from 'react';
import classes from './index.module.scss';
import { connect } from 'react-redux';
import Modal from '../../../../UI/Modal';
import Spinner from '../../../../UI/Spinner/SpinnerButton';
import Message from '../../../../UI/Message';
import { resetQuery,resetFactorScreener } from '../../../../../actions/index';


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
              <button className={classes.modalbtn} onClick={this.props.onSubmit}>Ok</button>
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
            <div className={classes.messageheader} style={{color:'green'}}>{responseMessage}</div>
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
            <div className={classes.header}>Strategy Save</div>
            <input className={classes.modalinput} type="input" placeholder="Strategy Name" onChange={this.props.getStrategyName} />
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
                          className={this.props.data[row].momentum < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].momentum ? this.props.data[row].momentum.toFixed(2) : "unknown"}
                        </td>
                        <td 
                          data-label="Value"
                          className={this.props.data[row].value < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].value ? this.props.data[row].value.toFixed(2) : "unknown"}
                        </td>
                        <td
                          data-label="Size"
                          className={this.props.data[row].size < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].size? this.props.data[row].size.toFixed(2) : "unknown"}
                        </td>
                        <td
                          data-label="Volatility"
                          className={this.props.data[row].volatility < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row].volatility ? this.props.data[row].volatility.toFixed(2) : "unknown"}
                        </td>
                        <td 
                          data-label="Investment"
                          className={this.props.data[row].investment < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].investment ? this.props.data[row].investment.toFixed(2) : "unknown"}
                        </td>
                        <td 
                          data-label="Profitability"
                          className={this.props.data[row].profitability < 0 ? classes.warning : classes.success}>
                          {this.props.data[row].profitability ? this.props.data[row].profitability.toFixed(2) : "unknown"}
                        </td>
                        <td
                          data-label="Weight"
                          className={this.props.data[row]["weight_%"] < 0 ? classes.warning : classes.success}
                        >
                          {this.props.data[row]["weight_%"] ? this.props.data[row]["weight_%"].toFixed(2)+"%" : "unknown"}
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