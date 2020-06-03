import React, {useState, useCallback, useMemo} from 'react'; 
import { DropDownButton, Snackbar } from 'components/MaterialUIs';
import ExistingWatchList from './Modals/ExistingWatchlist';
import NewWatchList from './Modals/NewWatchList';
import { isEmpty } from 'utils/app.utils';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchlists } from 'store/actions/watchlist.actions';

const AddTickerControl = ({watchlistToSave, onFinishSavingWatch}) => {
    const [watchlistOption, setWatchListOption] = useState();
    const [successWatchlistSaveMessage, setSuccessWatchlistSaveMessage] = useState();
    const dispatch = useDispatch();
    const {list: {userWatchlistPerformance}} = useSelector(state => ({...state.watchlists}));
    const onCloseWatchlistSuccessMessage = () => {
        setSuccessWatchlistSaveMessage('');
    }

    const {watchlistOptions, DropDownButtonOptions} = useMemo(() => {
        let watchlistOptions = [];
        let DropDownButtonOptions = [{label: 'New watchlist'},{label: 'Existing watchlist', disabled: true}];
        if (userWatchlistPerformance && userWatchlistPerformance.length>0){
          watchlistOptions = userWatchlistPerformance.map(watchlist => ({label: watchlist.watchlistName, value: watchlist.watchlistName}))
        }
        if (watchlistOptions.length>0){
          DropDownButtonOptions[1].disabled = false
        }
        return {
          watchlistOptions,
          DropDownButtonOptions
        }
        // eslint-disable-next-line
    }, [userWatchlistPerformance]);

    const onCloseWatchlistSaving = () => {
        setWatchListOption('');
    }

    const onFinishSavingWatchlistHandler = useCallback((watchlistName) => {
        setSuccessWatchlistSaveMessage(
          `Your watchlist : ${watchlistName} has been ${
            watchlistOption === "NEW watchlist" ? "saved" : "updated"
          } succesfully`
        );
        setWatchListOption('');
        dispatch(getWatchlists());
        onFinishSavingWatch();
    }, [dispatch, watchlistOption, onFinishSavingWatch]);

    const handleWatchlistSavingOptionClick = (value) => {
        setWatchListOption(value);
    }

    return (
        <>
        {!isEmpty(successWatchlistSaveMessage) && (
          <Snackbar
            open={!isEmpty(successWatchlistSaveMessage)}
            autoHideDuration={6000}
            message={successWatchlistSaveMessage}
            severity="success"
            variant="filled"
            vertical="top"
            horizontal="center"
            title="Success"
            onClose={onCloseWatchlistSuccessMessage}
          />
        )}
        {watchlistOption === "New watchlist" && (
            <NewWatchList
              open={watchlistOption === "New watchlist"}
              onClose={onCloseWatchlistSaving}
              list={watchlistToSave}
              onFinish={onFinishSavingWatchlistHandler}
            />
          )}
          {watchlistOption === "Existing watchlist" && (
            <ExistingWatchList
              open={watchlistOption === "Existing watchlist"}
              onClose={onCloseWatchlistSaving}
              list={watchlistToSave}
              onFinish={onFinishSavingWatchlistHandler}
              watchlists={watchlistOptions}
            />
          )}
        <DropDownButton
            options={DropDownButtonOptions}
            handleMenuClick={handleWatchlistSavingOptionClick}
            label="Add to watchlist"
            color="secondary"
            variant="contained"
            fullWidth={true}
            disabled={watchlistToSave.length === 0}
        />
    </>
    );
};

export default AddTickerControl;