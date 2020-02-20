import React, {useReducer, useState, useEffect} from 'react';
import { Container } from './style';
import WizarardProgress from '../../Shared/WizardProgress';
import { useDispatch, useSelector } from 'react-redux';
import AccountSumBlock from '../../Shared/AccountSumBlock';
import Loader from '../../Shared/Loader';
import LoadingState from '../../Shared/LoaderGif';
import { getPortfolioOrders, clearMultipleTradeState } from '../../../actions/Tradeit/tradeitTrade';
import {ContentWrapper, InputWrapper, Input, ErrorMessage} from './style';
import history from '../../../history';
import withBrokersAuth from '../../hoc/requireBrokerConnection';
import requireAuth from '../../hoc/requireAuth';

const TradePage = () => {
    const dispatchAction = useDispatch();
    const initialState = {activeOption: 1};
        const reducer = (state, action) => {
            let activeOption = state.activeOption;
            switch(action.type){
                case 'Next':
                    if (state.activeOption>=1 && state.activeOption<3){
                        activeOption = activeOption+1;
                    }
                    return {activeOption};
                case 'Previous':
                    if (state.activeOption>1 && state.activeOption<=3){
                        activeOption = activeOption-1;
                    }
                    return {activeOption};
                default:
                    return state;
            }
        }

    const [isLoading, setIsLoading] = useState(true);

    const {portfolioOrders, strategyName, cashForTrade} = useSelector(state => state.trade);
    
    useEffect(() => {
        async function fetchOrders(){
            await dispatchAction(getPortfolioOrders());
            setIsLoading(false);
        }
        if (strategyName && cashForTrade){
            if (!portfolioOrders){
                fetchOrders();
            }
        } else {
            history.push('/strategy/monitor');
        }
    }, [dispatchAction, strategyName, cashForTrade, portfolioOrders])

    useEffect(() => {
        return () => {
            dispatchAction(clearMultipleTradeState());
        }
    }, [])

    const renderSteps = () => {
        switch(state.activeOption){
            case 1:
                const Step1 = React.lazy(() => import('./Step1'))
                return <Step1 />
            case 2:
                const Step2 = React.lazy(() => import('./Step2'))
                return <Step2 />
            default:
                const Step3 = React.lazy(() => import('./Step3'))
                return <Step3 />
        }
    }

    const onCancelProcess = () => {
        dispatchAction(clearMultipleTradeState());
        history.push('/strategy/monitor');
    }

    const onPortfolioClick = () => {
        dispatchAction(clearMultipleTradeState());
        history.push('/portfolio/monitor');
    }

    const renderButtons = () => {
        switch(state.activeOption){
            case 2:
                return (
                    <>
                        <Input className="btn btn-outline-primary" type="button" value="Preview" onClick={() => {dispatch({type: 'Previous'})}} />
                        <Input className="btn btn-primary" type="button" value="Send" onClick={() => {dispatch({type: 'Next'})}} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Input className="btn btn-primary" type="button" value="Portfolio" onClick={onPortfolioClick} />
                    </>
                );
            default:
                return (
                    <>
                        <Input className="btn btn-danger" type="button" value="Cancel" onClick={onCancelProcess} />
                        <Input className="btn btn-primary" type="button" value="Preview" onClick={() => {dispatch({type: 'Next'})}} />
                    </>
                );
        }
    }
    

    const [state, dispatch] = useReducer(reducer, initialState);

    // Load JSX
    if(isLoading){
        return (
            <Loader wealthface color="black" />
        )
    } else {
        const {error} = portfolioOrders;
        if (error){
            return <ErrorMessage>{error}</ErrorMessage>
        }
        return (
            <Container>
                <AccountSumBlock />
                <WizarardProgress option1="Blotter" option2="Review" option3="Trade" activeOption={state.activeOption}/>
                <ContentWrapper>
                    <React.Suspense fallback={<LoadingState width="100px" height="100px"/>}>
                        {renderSteps()}
                    </React.Suspense>
                    <InputWrapper>
                        {renderButtons()}
                    </InputWrapper>
                </ContentWrapper>
            </Container>
        );
    }
};

export default requireAuth(withBrokersAuth(TradePage));