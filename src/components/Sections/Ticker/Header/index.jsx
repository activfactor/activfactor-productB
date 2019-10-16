import React,{ Component } from 'react';
import ContentBlock from '../../../UI/ContentBlock';
import Input from '../../../UI/Input';
import GroupInput from '../../../UI/Input/GroupInput';
import OrderForm from '../../../UI/OrderForm';
import { connect } from 'react-redux';

class Header extends Component{
    state={
        isModal: false
    }

    onClickHandler = () => {
        this.setState({isModal: true});
    }

    onCancelOrderHandler = () => {
        this.setState({isModal: false});
    }

    renderOrderForm = () => {
        if (this.props.ticker && this.state.isModal){
            return <OrderForm orderSymbol={this.props.ticker} onCancelHandler={this.onCancelOrderHandler}/>
        }
    }

    render(){
        return(
        <div className="card__list-item">
            {this.renderOrderForm()}
            <div className="_header" style={{overflow: 'visible'}}>
                <div className="_item-strategy-monitor">
                    <div className="_text-normal">{this.props.ticker}</div>
                    <div className="_text0-normal" >{this.props.name}</div>
                    <div className="_text0-normal" >{this.props.sector}</div>
                    <div className="_text0-normal" >{this.props.industry}</div>
                </div>
                <div className="_buttons">
                    <Input onClick={this.onClickHandler} nameOfClass="btn btn-primary mr-2" value="Trade" type="button" />
                    <GroupInput buttonName="Add to Watchlist" disabled={this.props.disabled}>
                        <Input nameOfClass="dropdown-item" type="submit" value="Create Watchlist" onClick={() => this.props.AddToWatchlist('new')} />
                        <Input nameOfClass="dropdown-item" type="submit" value="Existing Watchlist" onClick={() => this.props.AddToWatchlist('exist')} />
                    </GroupInput>
                </div>
            </div>

            <div className="_table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Last Price</th>
                            <th>1 Day Change</th>
                            <th>1 Day Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ContentBlock
                          number={this.props.priceID}
                          unit="$"
                          number2={this.props.changeID}
                          unit2="%"
                          number3={this.props.performanceID}
                          unit3="$"
                        />
                    </tbody>
                </table>
            </div>

            {/*<ContentBlock*/}
            {/*number={this.props.priceID}*/}
            {/*unit="$"*/}
            {/*description="Last Price"*/}
            {/*/>*/}
            {/*<ContentBlock*/}
            {/*number={this.props.changeID}*/}
            {/*unit="%"*/}
            {/*description="1 Day % Change"*/}
            {/*/>*/}
            {/*<ContentBlock*/}
            {/*number={this.props.performanceID}*/}
            {/*unit="$"*/}
            {/*description="1 Day Change"*/}
            {/*/>*/}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accountNumber: state.tradeitReducers.accountNumber,
        token: state.tradeitReducers.token
    };
}

export default connect(mapStateToProps)(Header);