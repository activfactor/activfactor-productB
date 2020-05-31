import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Button, DangerButton, Dialog } from "components/MaterialUIs";
import { useDispatch } from "react-redux";
import { deleteWatchlist } from "store/actions/watchlist.actions";
import { clearApi } from 'store/actions/api.actions';
import { useApiInfo } from '../../hooks/screens.hooks';
import { DELETE_WATCHLIST } from 'store/types';
import PropTypes from 'prop-types';
import { DeleteMessage } from './style';

const DeleteWatchlist = ({ open, onClose, onFinish, watchlistName ,message}) => {
  const dispatch = useDispatch();
  const [isLoading, error, done] = useApiInfo(DELETE_WATCHLIST)
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onDeleteWatchlistHandler = useCallback(() => {
      if (watchlistName){
          setIsButtonLoading(true);
          dispatch(deleteWatchlist(watchlistName));
      }
  }, [watchlistName, dispatch]);

  const onCloseHandler = useCallback(() => {
    dispatch(clearApi(DELETE_WATCHLIST));
    setIsButtonLoading(false);
    onClose();
  }, [dispatch, onClose]);
  
  useEffect(() => {
    if (done && !error){
        dispatch(clearApi(DELETE_WATCHLIST));
        setIsButtonLoading(false);
        onFinish();
      } else if (error) {
        setIsButtonLoading(false);
      } else if(isButtonLoading){
        setIsButtonLoading(false);
      }
// eslint-disable-next-line
  }, [done, error]);


  const renderActions = useCallback(() => {
    return (
      <>
        <Button
          label="Cancel"
          onClick={onCloseHandler}
          fullWidth={true}
          variant="outlined"
        />
        <DangerButton
          label="Delete"
          onClick={onDeleteWatchlistHandler}
          fullWidth={true}
          isLoading={isLoading || isButtonLoading}
        />
      </>
    );
  }, [onDeleteWatchlistHandler, isButtonLoading, isLoading, onCloseHandler]);

  return (
    <Dialog
      direction="down"
      withFullScreen={true}
      title="Delete Watchlist"
      renderActions={renderActions}
      open={open}
      onClose={onCloseHandler}
      fullWidth={true}
      themeColor="error"
    >
      <Grid container justify="center">
        <DeleteMessage component="p">{message || `Are you sure you want to delete ${watchlistName} watchllist`}</DeleteMessage>
      </Grid>
    </Dialog>
  );
};

DeleteWatchlist.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
    watchlistName: PropTypes.string.isRequired
}

export default DeleteWatchlist;
