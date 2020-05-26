import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Transformer from '../Service/Transformer.service';

export default () => {
    const {oneStrategyDetails} = useSelector(state => state.strategies);
    // extract all the key values for the strategy monitor to be transformed into charts and tables
    const strategyDetails = useMemo(() => Transformer(oneStrategyDetails), [oneStrategyDetails]);
    return [strategyDetails];
}
