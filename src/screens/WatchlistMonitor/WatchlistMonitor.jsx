import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatchlist, getWatchlists, clearWatchlistDetails, deleteTickers } from 'store/actions/watchlist.actions';
import { useApiInfo } from '../hooks/screens.hooks';
import { FETCH_ONE_WATCHLIST_DETAILS } from 'store/types';
import useWatchlistDetails from './hooks/watchlist.hooks';
import { WatchlistsSkeleton, WatchlistMonitorSkeleton } from 'components/Skeleton';
import { isEmpty } from 'utils/app.utils';
import TopHeader from './TopHeader';
import UnControlledCharts from './UnControlledCharts';
import ControlledCharts from './ControlledCharts';
import { WatchlistMonitorTable } from 'components/Custom/WatchlistMonitor';
import { Snackbar, DangerButton } from 'components/MaterialUIs'
import { Grid } from '@material-ui/core';
import history from '../../history';
import { ButtonWrapper } from '../common.style';
import DeleteWatchlistModal from './Modals/DeleteWatchlist';
import Watchlists from './Watchlists';
import AuthRequire from 'components/hoc/ForceNavigation';

const WatchlistMonitor = () => {
    const dispatch = useDispatch();
    const { watchlistName, oneWatchlistDetails } = useSelector(state => ({...state.watchlists, ...state.resources}));
    const [isLoading, error, done] = useApiInfo(FETCH_ONE_WATCHLIST_DETAILS);
    const [tickersWallet, setTickersWallet] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [successDeleteMessage, setSuccessDeleteMessage] = useState();
    const [watchlistDetails] = useWatchlistDetails();
    useEffect(() => {
        if (watchlistName && !oneWatchlistDetails){
            dispatch(fetchWatchlist());
        }
    }, [watchlistName, oneWatchlistDetails, dispatch, watchlistDetails]);

    const handleErrorClosed = () => {
        history.push('/dashboard');
    }

    const addOrRemoveTicker = (value) => {
        let newList = [];
        if (tickersWallet.length > 0) {
          if (!tickersWallet.includes(value)) {
            newList = [...tickersWallet, value];
          } else {
            newList = tickersWallet.filter((ticker) => ticker !== value);
          }
        } else {
          newList = [value];
        }
        setTickersWallet(newList);
    };

    const onDeleteStrategyClick = () => {
        setShowDeleteModal(true);
    }

    const onCloseDeleteModalHandler = () => {
        setShowDeleteModal(false);
    }

    const onFinishDeleteModalHandler = () => {
        setSuccessDeleteMessage(`Your watchlist: ${watchlistName} has been deleted successfully`);
        setShowDeleteModal(false);
    }

    const onFinishDeleteEmptyTickersModalHandler = () => {
      setSuccessDeleteMessage(`Your watchlist: ${watchlistName} has been deleted successfully`);
    }

    const onCloseSuccessDeleteMessage = () => {
        dispatch(getWatchlists());
        dispatch(clearWatchlistDetails());
        setSuccessDeleteMessage("");
    }

    const onDeleteTickerHandler = (tickerName) => {
        dispatch(deleteTickers([tickerName],watchlistName));
    }

    const onCloseEmptyWatchlist = () => {
      dispatch(clearWatchlistDetails());
      dispatch(getWatchlists());
      setSuccessDeleteMessage('');
    }


    return done && oneWatchlistDetails && !isEmpty(watchlistDetails) ? (
      <>
        {!isEmpty(successDeleteMessage) && (
          <Snackbar
            open={!isEmpty(successDeleteMessage)}
            autoHideDuration={6000}
            message={successDeleteMessage}
            severity="success"
            variant="filled"
            vertical="top"
            horizontal="center"
            title="Success"
            onClose={onCloseSuccessDeleteMessage}
          />
        )}
        {showDeleteModal && (
          <DeleteWatchlistModal
            open={showDeleteModal}
            onClose={onCloseDeleteModalHandler}
            onFinish={onFinishDeleteModalHandler}
            watchlistName={watchlistName}
          />
        )}
        {!isEmpty(oneWatchlistDetails) && (
          <>
        <TopHeader />
        <UnControlledCharts watchlistDetails={watchlistDetails} />
        <ControlledCharts watchlistDetails={watchlistDetails} />
        <Grid container style={{ marginTop: "20px" }}>
          <WatchlistMonitorTable
            tickersWallet={tickersWallet}
            addOrRemoveTicker={addOrRemoveTicker}
            onDeleteTicker={onDeleteTickerHandler}
          />
        </Grid>
        <ButtonWrapper>
          <DangerButton
            minWidth="200px"
            label="Delete Watchlist"
            onClick={onDeleteStrategyClick}
            variant="contained"
          />
        </ButtonWrapper>
        </>
        )}
      </>
    ) : done && isEmpty(oneWatchlistDetails) && watchlistName ? (
      <>
        {!isEmpty(successDeleteMessage) && (
          <Snackbar
            open={!isEmpty(successDeleteMessage)}
            autoHideDuration={6000}
            message={successDeleteMessage}
            severity="success"
            variant="filled"
            vertical="top"
            horizontal="center"
            title="Success"
            onClose={onCloseEmptyWatchlist}
          />
        )}
        <DeleteWatchlistModal
          open={true}
          onClose={onCloseEmptyWatchlist}
          onFinish={onFinishDeleteEmptyTickersModalHandler}
          watchlistName={watchlistName}
          message={`Your watchlist has no tickers to monitor, do you want to delete it`}
        />
        </>
    ): isLoading ? (
      <WatchlistMonitorSkeleton />
    ) : error ? (
      <>
        <WatchlistsSkeleton />
        <Snackbar
          open={error !== ""}
          severity="error"
          message={error}
          variant="filled"
          onClose={handleErrorClosed}
          vertical="top"
          horizontal="center"
          title="error"
        />
      </>
    ) : (
      <Watchlists />
    );
};

export default AuthRequire(WatchlistMonitor);