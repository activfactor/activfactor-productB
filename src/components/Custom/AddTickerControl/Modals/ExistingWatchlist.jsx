import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Button, Dialog, Select } from "components/MaterialUIs";
import { useDispatch } from "react-redux";
import { updateWatchlist } from "store/actions/watchlist.actions";
import { clearApi } from 'store/actions/api.actions';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { UPDATE_WATCHLIST } from 'store/types';
import { isEmpty } from 'utils/app.utils';
import PropTypes from 'prop-types';

const ExistingWatchlist = ({ open, onClose, list, onFinish, watchlists }) => {
  const dispatch = useDispatch();
  const [watchlistName, setWatchlistName] = useState();
  const [formError, setFormError] = useState();
  const [isLoading, error, done] = useApiInfo(UPDATE_WATCHLIST)
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onSaveNewWatchList = useCallback(async () => {
      if (watchlistName){
          setIsButtonLoading(true);
          await dispatch(updateWatchlist(watchlistName, list));
      } else {
          setFormError("Please select the watchlist name")
      }
  }, [list, watchlistName, dispatch]);

  const onCloseHandler = useCallback(() => {
    dispatch(clearApi(UPDATE_WATCHLIST));
    setIsButtonLoading(false);
    setFormError(null);
    onClose();
  }, [onClose, dispatch]);

  
  useEffect(() => {
    if (done && !error){
        dispatch(clearApi(UPDATE_WATCHLIST));
        setIsButtonLoading(false);
        onFinish(watchlistName);
      } else if (error) {
        setIsButtonLoading(false);
        setFormError(error);
      } else if(isButtonLoading){
        setIsButtonLoading(false);
      }
// eslint-disable-next-line
  }, [done, error]);


  const renderAddToNewWatchListActions = useCallback(() => {
    return (
      <>
        <Button
          label="Cancel"
          onClick={onCloseHandler}
          fullWidth={true}
          variant="outlined"
        />
        <Button
          label="Save"
          onClick={onSaveNewWatchList}
          fullWidth={true}
          isLoading={isLoading || isButtonLoading}
        />
      </>
    );
  }, [onSaveNewWatchList, onCloseHandler, isButtonLoading, isLoading]);

  const onChangeHandler = useCallback((e) => {
    setWatchlistName(e.target.value);
  }, []);

  return (
    <Dialog
      direction="down"
      withFullScreen={true}
      title="Add to watchlist"
      renderActions={renderAddToNewWatchListActions}
      open={open}
      onClose={onCloseHandler}
      fullWidth={true}
      themeColor="primary"
    >
      <Grid container>
        <Select
          id="watchlist-exist"
          errorId="watchlist-exist-error"
          fullWidth={true}
          label="Watchlist name"
          onChange={onChangeHandler}
          value={watchlistName}
          error={!isEmpty(formError)}
          errorMsg={formError}
          options={watchlists}
          theme="primary"
        />
      </Grid>
    </Dialog>
  );
};

ExistingWatchlist.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, 
  list: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onFinish: PropTypes.func.isRequired, 
  watchlists: PropTypes.array.isRequired
}

export default ExistingWatchlist;
