import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Button, Dialog, Input } from "components/MaterialUIs";
import { useDispatch } from "react-redux";
import { saveNewWatchList } from "store/actions/watchlist.actions";
import { clearApi } from 'store/actions/api.actions';
import { useApiInfo } from '../../../hooks/screens.hooks';
import { SET_NEW_WATCHLIST } from 'store/types';
import { isEmpty } from 'utils/app.utils';
import PropTypes from 'prop-types';

const NewWatchList = ({ open, onClose, list, onFinish }) => {
  const dispatch = useDispatch();
  const [watchlistName, setWatchlistName] = useState();
  const [formError, setFormError] = useState();
  const [isLoading, error, done] = useApiInfo(SET_NEW_WATCHLIST)
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onSaveNewWatchList = useCallback(async () => {
      if (watchlistName){
          setIsButtonLoading(true);
          await dispatch(saveNewWatchList(watchlistName, list));
      } else {
          setFormError("Please enter the watchlist name")
      }
  }, [list, watchlistName, dispatch]);

  const onCloseHandler = useCallback(() => {
    dispatch(clearApi(SET_NEW_WATCHLIST));
    setIsButtonLoading(false);
    setFormError('');
    onClose();
  }, [dispatch, onClose]);
  
  useEffect(() => {
    if (done && !error){
        dispatch(clearApi(SET_NEW_WATCHLIST));
        setIsButtonLoading(false);
        onFinish(watchlistName);
      } else if (error) {
        setFormError(error);
        setIsButtonLoading(false);
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
  }, [onSaveNewWatchList, isButtonLoading, isLoading, onCloseHandler]);

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
        <Input
          id="watchlist-new"
          errorId="watchlist-new-error"
          fullWidth={true}
          label="Watchlist name"
          onChange={onChangeHandler}
          value={watchlistName}
          error={!isEmpty(formError)}
          errorMsg={formError}
        />
      </Grid>
    </Dialog>
  );
};

NewWatchList.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFinish: PropTypes.func.isRequired
}

export default NewWatchList;
