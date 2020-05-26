import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Transformer from '../service/Transformer.service';

export default () => {
    const {oneWatchlistDetails} = useSelector(state => state.watchlists);
    // extract all the key values for the strategy monitor to be transformed into charts and tables
    const watchlistDetails = useMemo(() => Transformer(oneWatchlistDetails), [oneWatchlistDetails]);
    return [watchlistDetails];
}
