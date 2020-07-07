import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlists, clearWatchlistDetails } from "store/actions/watchlist.actions";
import { setWatchlistName } from "store/actions/resources.actions";
import { HeadersWrapper, ButtonWrapper } from "../commonStyle";
import { WatchlistCard, CardListing, AddButton, FeedBackAlert } from "../../common";
import { DashboardSection } from "../../../Layout";
import { Link, Button } from "../../../MaterialUIs";
import { WatchlistsSkeleton } from "../../../Skeleton";
import { useApiInfo } from "screens/hooks/screens.hooks";
import { FETCH_WATCHLISTS } from "store/types";
import history from "../../../../history";
import { useTheme, useMediaQuery, Grid } from '@material-ui/core';

const Strategies = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { list } = useSelector((state) => state.watchlists);
  const dispatch = useDispatch();
  const [isLoading, error, done] = useApiInfo(FETCH_WATCHLISTS);

  // fetch all strategies in dashboard
  useEffect(() => {
    if (!list.userWatchlistPerformance) {
      dispatch(getWatchlists());
    }
  }, [list, dispatch]);

  //render the dashboard section header
  const renderHeader = () => {
    const { lastUpdate } = list;
    return (
      <>
        <HeadersWrapper>
          <h2>My Watchlists</h2>
          {lastUpdate && <p>Last update: {lastUpdate}</p>}
        </HeadersWrapper>
        <Link
          label="+ New Watchlist"
          to="/strategy/builder"
          theme="primary"
          fontSize="16px"
          align="left"
        />
      </>
    );
  };

  const onAddWatchlistClick = () => {
    history.push("/strategy/builder");
  };

  const handleWatchlistClick = (watchlistName) => () => {
    dispatch(setWatchlistName(watchlistName));
  };

  const onviewAllClick = () => {
    dispatch(clearWatchlistDetails());
    history.push('/watchlists/monitor');
  }

  const renderContent = () => {
    const { userWatchlistPerformance } = list;
    const dashboardWatchlists =
      userWatchlistPerformance &&
      userWatchlistPerformance.length > 0 &&
      userWatchlistPerformance.slice(0, 4);
    const initialNumberOfAddButtons =isMobile ? 1 : isTablet ? 2 : 4;
    const numberOfAddButtons = initialNumberOfAddButtons - (dashboardWatchlists.length || 0);
    return (
      <>
        <CardListing repeat={4}>
          {dashboardWatchlists &&
            dashboardWatchlists.length > 0 &&
            dashboardWatchlists.map((strategy, index) => {
              const { watchlistName, tickers, performance } = strategy;
              const tableData = Object.keys(performance).map((obj) => [
                { value: obj },
                { value: performance[obj], unit: "%" },
              ]);
              return (
                  <WatchlistCard
                    key={`${index}_${strategy.watchlistName}`}
                    watchlistName={watchlistName}
                    tickersNumber={tickers}
                    tableData={tableData}
                    to="/watchlists/monitor"
                    onClick={handleWatchlistClick(watchlistName)}
                  />
              );
            })}
          {numberOfAddButtons > 0 &&
            Array.from(Array(numberOfAddButtons), (e, i) => {
              return (
                <AddButton
                  key={`${i}_watchlist`}
                  onClick={onAddWatchlistClick}
                />
              );
            })}
        </CardListing>
        {userWatchlistPerformance.length > 4 && (
          <Grid container justify="center" alignItems="center">
            <ButtonWrapper>
              <Button label="View all" fullWidth={true} onClick={onviewAllClick}/>
            </ButtonWrapper>
          </Grid>
        )}
      </>
    );
  };

  return list && list.userWatchlistPerformance && done ? (
    <DashboardSection
      margin="30px 0px"
      renderHeader={renderHeader}
      renderContent={renderContent}
    />
  ) : isLoading ? (
    <WatchlistsSkeleton />
  ) : error ? (
    <FeedBackAlert isError={true} message={error} />
  ) : (
    <FeedBackAlert />
  );
};

export default Strategies;
