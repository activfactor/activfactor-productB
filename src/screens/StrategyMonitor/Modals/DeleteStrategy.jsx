import React, { useCallback, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Button,DangerButton, Dialog } from "components/MaterialUIs";
import { useDispatch } from "react-redux";
import { deleteStrategy } from "store/actions/strategies.actions";
import { clearApi } from 'store/actions/api.actions';
import { useApiInfo } from '../../hooks/screens.hooks';
import { DELETE_STRATEGY } from 'store/types';
import PropTypes from 'prop-types';
import { DeleteMessage } from './style';

const DeleteStrategy = ({ open, onClose, onFinish, strategyName }) => {
  const dispatch = useDispatch();
  const [isLoading, error, done] = useApiInfo(DELETE_STRATEGY)
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onDeleteStrategyHandler = useCallback(async () => {
      if (strategyName){
          setIsButtonLoading(true);
          dispatch(deleteStrategy(strategyName));
      }
  }, [strategyName, dispatch]);

  const onCloseHandler = useCallback(() => {
    dispatch(clearApi(DELETE_STRATEGY));
    setIsButtonLoading(false);
    onClose();
  }, [dispatch, onClose]);
  
  useEffect(() => {
    if (done && !error){
        dispatch(clearApi(DELETE_STRATEGY));
        setIsButtonLoading(false);
        onFinish(strategyName);
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
          onClick={onDeleteStrategyHandler}
          fullWidth={true}
          isLoading={isLoading || isButtonLoading}
        />
      </>
    );
  }, [onDeleteStrategyHandler, isButtonLoading, isLoading, onCloseHandler]);

  return (
    <Dialog
      direction="down"
      withFullScreen={true}
      title="Delete Strategy"
      renderActions={renderActions}
      open={open}
      onClose={onCloseHandler}
      fullWidth={true}
      themeColor="error"
    >
      <Grid container justify="center">
        <DeleteMessage component="p">Are you sure you want to delete <em>{` ${strategyName} `}</em> strategy</DeleteMessage>
      </Grid>
    </Dialog>
  );
};

DeleteStrategy.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
    strategyName: PropTypes.string.isRequired
}

export default DeleteStrategy;
