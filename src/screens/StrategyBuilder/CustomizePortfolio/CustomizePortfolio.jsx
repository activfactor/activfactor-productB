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
import AddTickerControl from 'components/Custom/AddTickerControl';

const CustomizePortfolio = ({onAnalyzeResults}) => {
    const [watchlistToSave, setWatchlistToSave] = useState([]);
    const [showReplicateStrategy, setShowReplicateStrategy] = useState(false);
    const [successReplicateStrategyMessage, setSuccessReplicateStrategyMessage] = useState();

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

    const onFinishSavingWatchlistHandler = () => {
      setWatchlistToSave([]);
    };

    return (
      <>
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
                  label="Analyse Results"
                  onClick={onAnalyzeResults}
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                />
              </ButtonWrapper>
            </Grid>
            <Grid container item md={6} sm={6} xs={12} direction="row" justify="flex-end">
              <ButtonWrapper>
                <AddTickerControl 
                  watchlistToSave={watchlistToSave}
                  onFinishSavingWatch={onFinishSavingWatchlistHandler}
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