import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Title, StyledInput, ButtonsWrapper, ErrMsg } from './style';
import { isAmountCorrect, isFloat } from '../../../../utils/helper';
import withBrokerAuth from '../../../hoc/requireBrokerConnection';
import { updateTradeCash } from '../../../../actions/Tradeit/tradeitTrade';
import history from '../../../../history';

const TradeModal = ({onDismiss}) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [error, setError] = useState("");

    const onChangeHandler = (event) => {
        const {value} = event.target;
        const finalValue = value.replace("$ ", "");
        if (isFloat(finalValue)){
            if (finalValue){
                setAmount("$ " + finalValue);
            } else {
                setAmount("")
            }
        }
    }

    const onStartClick = () => {
        const finalValue = parseFloat(amount.replace("$ ", "")).toFixed(2);
        if(isAmountCorrect(finalValue)){
            dispatch(updateTradeCash(finalValue));
            history.push("/trade");
        } else {
            setError("Please make sure to enter correct amount");
        }
    }

    return (
        <>
        <Wrapper>
            <Title>Please enter the amount in USD to invest</Title>
            <input className="form-control" placeholder="Enter the amount" value={amount} onChange={onChangeHandler} />
            {error ? (<ErrMsg>{error}</ErrMsg>) : ''}
            <ButtonsWrapper>
                <StyledInput className="btn btn-primary" value="Trade" type="button" onClick={onStartClick}/>
                <StyledInput className="btn btn-danger" value="Cancel" type="button" onClick={onDismiss}/>
            </ButtonsWrapper>
        </Wrapper>
        </>
    );
};

export default withBrokerAuth(TradeModal);