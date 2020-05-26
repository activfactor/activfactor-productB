// import React,{ Component } from 'react';
// import classes from '../../StrategyBuilder/StepThree/WatchListAdd/index.module.scss';
// import { connect } from 'react-redux';
// import { resetAuthURL, getBalance, updateAccountNumber } from '../../../../actions/Tradeit/tradeitPortfolio';

// class ModuleName extends Component {
//   state = {
//     accountNumber: "",
//     isSpinner: false
//   };

//   componentDidMount(){
//     if (this.props.accounts){
//         const accounts = this.props.accounts;
//         this.setState({accountNumber: accounts[Object.keys(accounts)[0]].accountNumber})
//     }
//   }

//   DropDownChangeHandler = e => {
//     this.setState({ accountNumber: e.target.value });
//   };

//   renderOptions = () => {
//     if (this.props.accounts) {
//       const accounts = this.props.accounts;
//       return Object.keys(accounts).map((account, index) => {
//         return (
//           <option key={index} value={accounts[account].accountNumber}>
//             {accounts[account].accountNumber}
//           </option>
//         );
//       });
//     }
//   };

//   onSubmitHandler = async () => {
//     await this.props.updateAccountNumber(this.state.accountNumber);
//     if (this.props.accountNumber){
//       this.setState({isSpinner: true})
//       await this.props.getBalance();
//       this.setState({isSpinner: false})
//       this.props.finishProcess();
//     }
//   };

//   componentWillUnmount(){
//       this.setState({isSpinner: false});
//   }

//   renderSpinner = () => {
//     if (this.state.isSpinner) {
//       return (
//         <span
//           className="spinner-border spinner-border-sm"
//           role="status"
//           aria-hidden="true"
//         />
//       );
//     } else {
//       return "Connect";
//     }
//   };

//   cancelHandler = () => {
//     this.setState({ isSpinner: false });
//     this.props.cancelHandler();
//     this.props.resetAuthURL();
//     this.props.cancelProcess();
//   };

//   render() {
//     return (
//       <Modal onDismiss={this.cancelHandler}>
//         <div className={classes.modal_content}>
//           <div className={classes.modal_header}>Please Select the account you want to link</div>
//           <div className="">
//             <div className="form">
//               <DropDown
//                 color="blue"
//                 value={this.state.accountNumber}
//                 DropDownChangeHandler={this.DropDownChangeHandler}
//               >
//                 {this.renderOptions()}
//               </DropDown>
//             </div>
//             <div className={`${classes.modal_btn_container} mt-3`}>
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={this.cancelHandler}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="btn btn-primary"
//                 onClick={this.onSubmitHandler}
//               >
//                 {this.renderSpinner()}
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     );
//   }
// }

// const mapStateToProps = state => {
//     return {
//         brokerList: state.tradeitReducers.brokerList,
//         oAuthURL: state.tradeitReducers.oAuthURL,
//         userToken: state.tradeitReducers.userToken,
//         accounts: state.tradeitReducers.accounts,
//         accountNumber: state.tradeitReducers.accountNumber
//     };
// }

// export default connect(mapStateToProps,{resetAuthURL, getBalance, updateAccountNumber})(ModuleName);