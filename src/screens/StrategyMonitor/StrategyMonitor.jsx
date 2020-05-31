import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStrategy,
  clearStrategyDetails,
  fetchStrategies,
} from "../../store/actions/strategies.actions";
import { StrategyMonitorSkeleton } from "../../components/Skeleton";
import TopHeader from "./TopHeader";
import TopCharts from "./TopCharts";
import Live from "./Live";
import Historical from "./Historical";
import StrategiesList from "./StrategiesList";
import useStrategyDetails from "./hooks/strategyMonitor.hooks";
import { isEmpty } from "../../utils/app.utils";
import { useApiInfo } from "../hooks/screens.hooks";
import { FETCH_ONE_STRATEGY_DETAILS } from "../../store/types";
import {
  Tabs,
  Snackbar,
  DangerButton,
} from "../../components/MaterialUIs";
import { ButtonWrapper } from "../common.style";
import { Grid } from "@material-ui/core";
import history from "../../history";
import DeleteStrategyModal from "./Modals/DeleteStrategy";
import AuthRequire from 'components/hoc/ForceNavigation';

const StrategyMonitor = () => {
  const { strategyName, oneStrategyDetails } = useSelector((state) => ({
    ...state.resources,
    ...state.strategies,
  }));
  const [showDelete, setShowDelete] = useState(false);
  const [successDeleteMessage, setSuccessDeleteMessage] = useState();
  const [isLoading, error, done] = useApiInfo(FETCH_ONE_STRATEGY_DETAILS);
  const [tabValue, setTabValue] = useState("live");
  const [strategyDetails] = useStrategyDetails();
  const dispatch = useDispatch();
  useEffect(() => {
    if (strategyName && !oneStrategyDetails) {
      dispatch(fetchStrategy());
    }
  }, [strategyName, oneStrategyDetails, dispatch, strategyDetails]);

  useEffect(() => {
    // cleanup the strategy details
    return () => {
      dispatch(clearStrategyDetails())
    }
  }, [dispatch]);
  const handleTabClick = (value) => {
    setTabValue(value);
  };

  const handleErrorClosed = () => {
    history.push("/dashboard");
  };

  const onDeleteStrategyClick = () => {
    setShowDelete(true);
  };

  const onCloseDeleteStrategyHandler = () => {
    setShowDelete(false);
  };

  const onFinishDeleteStrategy = () => {
    setSuccessDeleteMessage(
      `Your strategy: ${strategyName} has been deleted successfully`
    );
    setShowDelete(false);
  };

  const onCloseSuccessDeleteMessage = () => {
    dispatch(fetchStrategies());
    dispatch(clearStrategyDetails());
    setSuccessDeleteMessage("");
  };

  const TabsOptions = useMemo(
    () => [
      { label: "Live", value: "live" },
      { label: "Historical", value: "historical" },
    ],
    []
  );

  return done && oneStrategyDetails && !isEmpty(strategyDetails) ? (
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
      {showDelete && (
        <DeleteStrategyModal
          open={showDelete}
          onClose={onCloseDeleteStrategyHandler}
          onFinish={onFinishDeleteStrategy}
          strategyName={strategyName}
        />
      )}
      <TopHeader />
      <TopCharts strategyDetails={strategyDetails} />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ margin: "40px 0px" }}
      >
        <Tabs
          theme="secondary"
          options={TabsOptions}
          initialValue={tabValue}
          handleTabClick={handleTabClick}
        />
      </Grid>
      {tabValue === "live" ? (
        <Live strategyDetails={strategyDetails} />
      ) : (
        <Historical strategyDetails={strategyDetails} />
      )}
      <ButtonWrapper>
        <DangerButton
          minWidth="200px"
          label="Delete strategy"
          onClick={onDeleteStrategyClick}
          variant="contained"
        />
      </ButtonWrapper>
    </>
  ) : isLoading ? (
    <StrategyMonitorSkeleton />
  ) : error ? (
    <>
      <StrategyMonitorSkeleton />
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
    <StrategiesList />
  );
};

export default AuthRequire(StrategyMonitor);
