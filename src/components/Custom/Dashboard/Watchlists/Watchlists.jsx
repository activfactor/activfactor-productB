import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWatchlists, clearWatchlistDetails } from "store/actions/watchlist.actions";
import { setWatchlistName } from "store/actions/resources.actions";
import { HeadersWrapper, ButtonWrapper } from "../commonStyle";
import { WatchlistCard } from "../../common";
import { DashboardSection } from "../../../Layout";
import { Link, Button } from "../../../MaterialUIs";
import { StyledGrid, AddWatchlisButton } from "./style";
import { WatchlistsSkeleton } from "../../../Skeleton";
import { useApiInfo } from "screens/hooks/screens.hooks";
import { FETCH_WATCHLISTS } from "store/types";
import history from "../../../../history";
import { useTheme, useMediaQuery } from '@material-ui/core';

const Strategies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          <h2>My Watchlist</h2>
          {lastUpdate && <p>Last update: {lastUpdate}</p>}
        </HeadersWrapper>
        <Link
          label="+ New strategy"
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
    history.push('/watchlist/monitor');
  }

  const renderContent = () => {
    const { userWatchlistPerformance } = list;
    const dashboardWatchlists =
      userWatchlistPerformance &&
      userWatchlistPerformance.length > 0 &&
      userWatchlistPerformance.slice(0, 4);
    const numberOfAddButtons = 4 - (dashboardWatchlists.length || 0);
    return (
      <>
        <StyledGrid container justify="space-between">
          {dashboardWatchlists &&
            dashboardWatchlists.length > 0 &&
            dashboardWatchlists.map((strategy, index) => {
              const { watchlistName, tickers, performance } = strategy;
              const tableData = Object.keys(performance).map((obj) => [
                { value: obj },
                { value: performance[obj], unit: "%" },
              ]);
              return (
                <StyledGrid key={`${index}_${strategy.watchlistName}`} style={{marginBottom: '20px', width: isMobile ? '100%' : 'auto'}}>
                  <WatchlistCard
                    watchlistName={watchlistName}
                    tickersNumber={tickers}
                    tableData={tableData}
                    to="/watchlist/monitor"
                    onClick={handleWatchlistClick(watchlistName)}
                  />
                </StyledGrid>
              );
            })}
          {numberOfAddButtons > 0 && !isMobile &&
            Array.from(Array(numberOfAddButtons), (e, i) => {
              return (
                <AddWatchlisButton
                  key={`${i}_watchlist`}
                  disableTouchRipple={true}
                  onClick={onAddWatchlistClick}
                  variant="outlined"
                  color="primary"
                >
                  +
                </AddWatchlisButton>
              );
            })}
        </StyledGrid>
        {userWatchlistPerformance.length > 4 && (
          <StyledGrid container justify="center" alignItems="center">
            <ButtonWrapper>
              <Button label="View all" fullWidth={true} onClick={onviewAllClick}/>
            </ButtonWrapper>
          </StyledGrid>
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
    <h1>error</h1>
  ) : (
    ""
  );
};

export default Strategies;
