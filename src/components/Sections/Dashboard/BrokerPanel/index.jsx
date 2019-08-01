import React,{ Component } from 'react';
import classes from './index.module.scss';
import Header from '../../../UI/Header';
import Input from '../../../UI/Input';

class BrokerPanel extends Component{
    render(){
        return(
            <div className={classes.container}>
                <Header header="My Brokerages" />
                <div className={classes.content}>
                <p className={classes.subject}>No Brokerages Connected</p>
                <p className={classes.body}>You've not connected a brokerage account to stockflare, why not give it a go?</p>
                <Input nameOfClass="btn btn-primary" type="submit" value="Connect Brokerage" onClick={this.props.ConnectBrokerage} />
                <Input nameOfClass="btn btn-secondary" type="submit" value="Create an Account" onClick={this.props.CreateAccount} color="black" />
                </div>
            </div>
        );
    }
}

export default BrokerPanel;