import React from 'react';

class Modal extends React.Component {
    renderSpinner(){
        console.log(this.props.isSpinner);
        if (this.props.isSpinner){
            return (
                <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
            )
        }
    }
    render(){
        return (
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-danger">Delete Watchlist</h5>
                </div>
                <div className="modal-body">
                  <p className="text-default">Do you want to Delete the Watchlist : {this.props.watchListName}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={this.props.closeHandler}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger" onClick={this.props.deleteHandler}>
                    {this.renderSpinner()}
                    Delete
                  </button>
                </div>
              </div>
            </div>
        );
    }
};

export default Modal;