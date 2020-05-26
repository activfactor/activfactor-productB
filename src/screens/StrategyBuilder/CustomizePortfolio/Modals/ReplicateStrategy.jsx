import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Button, Dialog, Input } from "components/MaterialUIs";
import { useDispatch } from "react-redux";
import { saveStrategy } from "store/actions/strategyBuilder.actions";
import { clearApi } from 'store/actions/api.actions';
import { useApiInfo } from '../../../hooks/screens.hooks';
import { SAVE_STRATEGY } from 'store/types';
import { isEmpty } from 'utils/app.utils';
import PropTypes from 'prop-types';

const ReplicateStrategy = ({ open, onClose, onFinish }) => {
  const dispatch = useDispatch();
  const [strategyName, setStrategyName] = useState();
  const [formError, setFormError] = useState();
  const [isLoading, error, done] = useApiInfo(SAVE_STRATEGY)
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onSaveNewWatchList = useCallback(async () => {
      if (strategyName){
          setIsButtonLoading(true);
          dispatch(saveStrategy(strategyName))
      } else {
          setFormError("Please enter the strategy name")
      }
  }, [strategyName, dispatch]);

  const onCloseHandler = useCallback(() => {
    dispatch(clearApi(SAVE_STRATEGY));
    setIsButtonLoading(false);
    setFormError('');
    onClose();
  }, [dispatch, onClose]);
  
  useEffect(() => {
    if (done && !error){
        dispatch(clearApi(SAVE_STRATEGY));
        setIsButtonLoading(false);
        onFinish(strategyName);
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
    setStrategyName(e.target.value);
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
          label="Strategy name"
          onChange={onChangeHandler}
          value={strategyName}
          error={!isEmpty(formError)}
          errorMsg={formError}
        />
      </Grid>
    </Dialog>
  );
};

ReplicateStrategy.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
}

export default ReplicateStrategy;
