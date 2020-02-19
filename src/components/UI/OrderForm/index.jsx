import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Modal from '../Modal';
import Input from '../Input';
import { previewOrder, resetOrder } from '../../../actions/Tradeit/tradeitTrade';
import validation from './utils/Validation';
import requireBrokerConnection from '../../hoc/requireBrokerConnection';


let userCanDisableMargin;

class OrderForm extends Component{
    state={
      error: undefined,
      isSpinner: false
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
        return "Preview your order";
      }
    };

    preModalContent = (errorMessage) => {
      return (
       <Modal>
                <div className="text-primary" style={{fontSize:'16px' ,padding: '10px', display: 'flex', justifyContent: 'center', width: '100%', alignItems:'center'}}>Place Order</div>
                 <form
                   style={{ padding: "15px" }}
                   onSubmit={this.props.handleSubmit(this.onSubmitHandler)}
                 >
                   <Field
                     name="orderAction"
                     placeholder="Select the action"
                     component={this.renderDropDown}
                   />
                   <Field
                     name="orderQuantity"
                     placeholder="Enter the Quantity"
                     type="number"
                     component={this.renderInput}
                   />
                   <Field
                     name="orderPriceType"
                     placeholder="Select the price type"
                     component={this.renderDropDown}
                   />
                   {this.props.form &&
                   this.props.form.values &&
                   (this.props.form.values.orderPriceType === "limit" ||
                     this.props.form.values.orderPriceType === "stopLimit") ? (
                     <Field
                       name="orderLimitPrice"
                       placeholder = "Select the limit price"
                       component = {this.renderInput}
                       type="number"
                     />
                   ) : (
                     ""
                   )}
                   {this.props.form &&
                   this.props.form.values &&
                   (this.props.form.values.orderPriceType === "stopMarket" ||
                     this.props.form.values.orderPriceType === "stopLimit") ? (
                     <Field
                       name="orderStopPrice"
                       placeholder = "Select the stop price"
                       component = {this.renderInput}
                       type="number"
                     />
                   ) : (
                     ""
                   )}
                   <Field
                     name="orderExpiration"
                     placeholder="Select the order Expiration Type"
                     component={this.renderDropDown}
                   />
                   {userCanDisableMargin
                      ? (
                     <Field
                       name="userDisabledMargin"
                       placeholder = "Select the margin Type"
                       component = {this.renderDisabledMargin}
                     />
                   ) : (
                     ""
                   )}
                   <Field
                       name="orderQuantityType"
                       placeholder = "Select the Order Quantity Type"
                       component = {this.renderOrderQuantityTypes}
                     />
                   {this.state.error ? <div className="text-danger">{this.state.error}</div> : ''}
                   {errorMessage ? <div className="text-danger">{errorMessage}</div> : ''}
                   <div style={{display: 'flex', justifyContent:'space-between',width: '100%'}}>
                   <Input
                     nameOfClass="btn btn-outline-primary"
                     value="Cancel"
                     onClick={this.onCancelHandler}
                     type="button"
                   />
                   <button className="btn btn-primary" type="submit">
                     {this.renderSpinner()}
                   </button>
                   </div>
                 </form>
               </Modal>
     );
     }

     postModalContent = (previewOrder, currency) => {
       return (
         <Modal>
           <div style={{ padding: "15px" }}>
           <ul className="list-group">
             <li className="list-group-item list-group-item-action active">
               {previewOrder.orderMessage}
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               Estimated Total Value
               <span className="badge badge-primary">
                 {previewOrder.estimatedTotalValue} {currency}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               Order Price
               <span className="badge badge-primary">
                 {previewOrder.orderPrice} {currency}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               {previewOrder.orderValueLabel}
               <span className="badge badge-primary">
                 {previewOrder.estimatedOrderValue} {currency}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               {previewOrder.orderCommissionLabel}
               <span className="badge badge-primary">
                 {previewOrder.estimatedOrderCommission} {currency}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               Order Expiration
               <span className="badge badge-primary">
                 {previewOrder.orderExpiration}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               Order Quantity
               <span className="badge badge-primary">
                 {previewOrder.orderQuantity}
               </span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center">
               Order Quantity Type
               <span className="badge badge-primary">
                 {previewOrder.orderQuantityType.replace('_',' ')}
               </span>
             </li>
           </ul>
           <div
             style={{
               display: "flex",
               justifyContent: "space-between",
               width: "100%",
               margin: "10px 0"
             }}
           >
             <Input
               nameOfClass="btn btn-outline-primary"
               value="Cancel"
               onClick={this.onCancelHandler}
               type="button"
             />
             <button onClick={this.onCancelHandler} className="btn btn-primary" type="submit">
               Proceed
             </button>
           </div>
           </div>
         </Modal>
       );
     }

    
    //===========================================================//
    onSubmitHandler = async () => {
      const error = await validation(this.props.form.values, userCanDisableMargin);
      if (error){
        this.setState({error: 'Please check your Order'});
      } else {
        this.setState({isSpinner: true});
        this.setState({error: undefined});
        const data = {
          token: this.props.token,
          accountNumber: this.props.accountNumber,
          orderAction: this.props.form.values.orderAction,
          orderQuantity: this.props.form.values.orderQuantity,
          orderSymbol: this.props.orderSymbol.replace('.US','').replace('-','.'),
          orderPriceType: this.props.form.values.orderPriceType,
          orderExpiration: this.props.form.values.orderExpiration,
          orderLimitPrice: ((this.props.form.values.orderPriceType==='limit' || this.props.form.values.orderPriceType==='stopLimit') && this.props.form.values.orderLimitPrice ) ? this.props.form.values.orderLimitPrice : undefined,
          orderStopPrice: ((this.props.form.values.orderPriceType==='stopMarket' || this.props.form.values.orderPriceType==='stopLimit') && this.props.form.values.orderStopPrice) ? this.props.form.values.orderStopPrice : undefined,
          userDisabledMargin: this.props.form.values.userDisabledMargin ? this.props.form.values.userDisabledMargin : undefined,
          orderQuantityType: this.props.form.values.orderQuantityType ? this.props.form.values.orderQuantityType : undefined
        }
        this.props.previewOrder(data);
      }

    }
    //===========================================================//


    renderOptions = (name) => {
      let account; 
      if (this.props.accounts && this.props.accountNumber){
        const accountIndex = Object.keys(this.props.accounts).filter(accountIndex => this.props.accounts[accountIndex]['accountNumber']===this.props.accountNumber);
        account = this.props.accounts[accountIndex]['orderCapabilities'][0];
        userCanDisableMargin = this.props.accounts[accountIndex]['userCanDisableMargin'];
      }
      if(account){
        let obj;
        switch(name){
          case 'orderAction':
              obj = account['actions'];
              return Object.keys(obj).map((itemIndex, index) => {
                return (
                  <option key={index} value={obj[itemIndex]['value']}>{obj[itemIndex]['displayLabel']}</option>
                );
              });
            case 'orderPriceType':
              obj = account['priceTypes'];
              return Object.keys(obj).map((itemIndex, index) => {
                return (
                  <option key={index} value={obj[itemIndex]['value']}>{obj[itemIndex]['displayLabel']}</option>
                );
              })
            case 'orderExpiration':
              obj = account['expirationTypes'];
              return Object.keys(obj).map((itemIndex, index) => {
                return (
                  <option key={index} value={obj[itemIndex]['value']}>{obj[itemIndex]['displayLabel']}</option>
                );
              })
            default:
              return false
        }
        
      }
    }

    renderDropDown = ({input, placeholder}) => {
      return (
        <div className="form-group">
          <label>{placeholder}</label>
          <select className="form-control" {...input}>
            <option value="-">-</option>
            {this.renderOptions(input.name)}
          </select>
        </div>
      );
    }

    renderInput = ({input, placeholder, type}) => {
      return (
        <div className="form-group">
          <label>{placeholder}</label>
          <input className="form-control" {...input} type={type} />
        </div>
      );
    }

    renderDisabledMargin = ({input, placeholder}) => {
      return (
        <div className="form-group">
          <label>{placeholder}</label>
          <select className="form-control" {...input}>
            <option value="-">-</option>
            <option value={true}>Cash</option>
            <option value={false}>Margin</option>
          </select>
        </div>
      );
    }

    renderOrderQuantityTypes = ({input, placeholder}) => {
      return (
        <div className="form-group">
          <label>{placeholder}</label>
          <select className="form-control" {...input}>
            <option value="-">-</option>
            <option value="SHARES">Share</option>
            <option value="TOTAL_PRICE">Total Price</option>
            <option value="QUOTE_CURRENCY">Quote Currency</option>
            <option value="BASE_CURRENCY">Base Currency</option>
          </select>
        </div>
      );
    }

    onCancelHandler = () => {
      this.setState({isSpinner: false});
      this.props.resetOrder();
      this.props.onCancelHandler();
    }

    

    renderContent = () => {
      if(this.props.trade){
        if (this.props.trade.previewOrder){
          if(this.state.isSpinner){
            this.setState({isSpinner: false})
          }
          return this.postModalContent(this.props.trade.previewOrder.orderDetails, this.props.trade.previewOrder.accountBaseCurrency);
        } else if (this.props.trade.errorMessage){
          if(this.state.isSpinner){
            this.setState({isSpinner: false})
          }
          return this.preModalContent(this.props.trade.errorMessage);
        } else {
          return this.preModalContent(undefined)
        }
      }
    }

    render(){
        return (
          <React.Fragment>
            {this.renderContent()}
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
  return {
    accounts: state.tradeitReducers.accounts,
    accountNumber: state.tradeitReducers.accountNumber,
    form: state.form.order,
    token: state.tradeitReducers.token,
    trade: state.trade
  };
}

export default reduxForm({ 
  form: "order" 
})(connect(mapStateToProps,{previewOrder, resetOrder})(requireBrokerConnection(OrderForm)));