import React, {useState, useCallback, useMemo} from 'react';
import { CustomizePortfolioTable } from 'components/Custom/StrategyBuilder';
import { Grid } from '@material-ui/core';
import { Button, DropDownButton, Snackbar } from 'components/MaterialUIs';
import NewWatchList from './Modals/NewWatchList';
import ExistingWatchList from './Modals/ExistingWatchlist';
import ReplicateStrategy from './Modals/ReplicateStrategy';
import { ButtonWrapper } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlists } from 'store/actions/watchlist.actions';
import { isEmpty } from 'utils/app.utils';
import history from '../../../history';
import PropTypes from 'prop-types';

const CustomizePortfolio = ({onAnalyzeResults}) => {
    const [watchlistToSave, setWatchlistToSave] = useState([]);
    const [watchlistOption, setWatchListOption] = useState();
    const [successWatchlistSaveMessage, setSuccessWatchlistSaveMessage] = useState();
    const [showReplicateStrategy, setShowReplicateStrategy] = useState(false);
    const [successReplicateStrategyMessage, setSuccessReplicateStrategyMessage] = useState();
    const {list: {userWatchlistPerformance}} = useSelector(state => ({...state.watchlists}));
    const dispatch = useDispatch();

    // memoize the watchlist options and the dropdown menu options
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

    const showReplicateStrategyHandler = () => {
      setShowReplicateStrategy(true);
    }

    const onFinishReplicateStrategyHandler = (strategyName) => {
      setShowReplicateStrategy(false);
      setSuccessReplicateStrategyMessage(`Your strategy: ${strategyName} has been replicated successfuly`);
    }

    const onCloseReplicateStrategyHandler = () => {
      setShowReplicateStrategy(false);
    }

    const onCloseReplicateSuccessMessage = () => {
      history.push(`/strategies/monitor`)
    }

    const addOrRemoveWatchList = useCallback((tickerId) => {
      let newList=[];
      if (watchlistToSave.length>0){
          if (!watchlistToSave.includes(tickerId)){
              newList = [...watchlistToSave, tickerId];
          } else {
              newList = watchlistToSave.filter(id => id!==tickerId);
          }
      } else {
          newList=[tickerId]
      }
        setWatchlistToSave(newList);
    },[setWatchlistToSave, watchlistToSave]);

    const handleWatchlistSavingOptionClick = (value) => {
      setWatchListOption(value);
    }

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
      setWatchlistToSave([]);
    }, [dispatch, watchlistOption]);

    const onCloseWatchlistSuccessMessage = () => {
      setSuccessWatchlistSaveMessage('');
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
        {!isEmpty(successReplicateStrategyMessage) && (
          <Snackbar
            open={!isEmpty(successReplicateStrategyMessage)}
            autoHideDuration={6000}
            message={successReplicateStrategyMessage}
            severity="success"
            variant="filled"
            vertical="top"
            horizontal="center"
            title="Success"
            onClose={onCloseReplicateSuccessMessage}
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
        {showReplicateStrategy && (
          <ReplicateStrategy 
            open={showReplicateStrategy}
            onClose={onCloseReplicateStrategyHandler}
            onFinish={onFinishReplicateStrategyHandler}
          />
        )}
        <Grid container direction="column">
          <Grid
            item
            xs={12}
            style={{ marginTop: "30px", marginBottom: "20px" }}
          >
            <CustomizePortfolioTable addOrRemoveWatchList={addOrRemoveWatchList} watchlistWallet={watchlistToSave} />
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item md={6} sm={6} xs={12}>
              <ButtonWrapper>
                <Button
                  label="<- Analuze Results"
                  onClick={onAnalyzeResults}
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                />
              </ButtonWrapper>
            </Grid>
            <Grid container item md={6} sm={6} xs={12} direction="row" justify="flex-end">
              <ButtonWrapper>
                <DropDownButton
                  options={DropDownButtonOptions}
                  handleMenuClick={handleWatchlistSavingOptionClick}
                  label="Add to watchlist"
                  color="secondary"
                  variant="contained"
                  fullWidth={true}
                  disabled={watchlistToSave.length === 0}
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  label="Replicate Strategy"
                  onClick={showReplicateStrategyHandler}
                  fullWidth={true}
                />
              </ButtonWrapper>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
};

CustomizePortfolio.propTypes = {
  onAnalyzeResults: PropTypes.func.isRequired
}

export default CustomizePortfolio;