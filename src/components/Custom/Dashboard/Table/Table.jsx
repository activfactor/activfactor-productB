import React, { useMemo, useCallback, useState, useEffect } from "react";
import { StyledTableCell, StyledTableRow, SelectWrapper } from "./style";
import { HeaderTitle } from "../commonStyle";
import { Table } from "components/MaterialUIs";
import { useSelector, useDispatch } from "react-redux";
import { Select, Link } from "components/MaterialUIs";
import {
  SUPPORTED_COINTRIES,
  INITIAL_COUNTRY,
  INITIAL_STRATEGY_FILTERS,
} from "../../../../config/appConfig";
import { sortArray } from "utils/ordering.utils";
import { getValue, getColor } from "utils/textFunctions";
import { DashboardSection } from "components/Layout";
import { updateStrategyFilters } from "store/actions/strategyBuilder.actions";
import { fetchHistoricalPerformanceData } from "store/actions/dashboard.actions";
import { useApiInfo } from "screens/hooks/screens.hooks";
import { FETCH_HISTORICAL_PERFORMANCE } from "store/types";
import { HistoricalPerformanceSkeleton } from "../../../Skeleton";
import { useTheme, useMediaQuery } from '@material-ui/core';

const DashboardTable = () => {
  const [country, setCountry] = useState(INITIAL_COUNTRY);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { historicalPerformance, selectOptions } = useSelector((state) => ({
    ...state.dashboard,
    ...state.appConfig,
  }));
  const dispatch = useDispatch();
  // extract headers and rows based on selected country
  const tableData = useMemo(() => {
    if (historicalPerformance) {
      const countryHistoricalPerformance =
        historicalPerformance[country].factor;
      const data = {};
      data.headers = sortArray(
        Object.keys(countryHistoricalPerformance[0]),
        true
      ).filter((header) => header !== "factor");
      data.rows = countryHistoricalPerformance.map((factor) => {
        return Object.keys(factor)
          .reverse()
          .map((key) => factor[key]);
      });
      return data;
    }
  }, [historicalPerformance, country]);

  const [isLoading, error, done] = useApiInfo(FETCH_HISTORICAL_PERFORMANCE);

  useEffect(() => {
    if (!historicalPerformance) {
      dispatch(fetchHistoricalPerformanceData());
    }
  }, [dispatch, historicalPerformance]);

  const onChangeHandler = useCallback(
    (e) => {
      setCountry(e.target.value);
    },
    [setCountry]
  );

  const goToStrategyBuilder = useCallback(
    (cell) => () => {
      dispatch(
        updateStrategyFilters({
          ...INITIAL_STRATEGY_FILTERS,
          sectors: selectOptions.sectors,
          country,
          factors: [cell],
        })
      );
    },
    [country, dispatch, selectOptions]
  );

  const renderHeaders = useCallback(
    () => (
      <>
        <StyledTableCell align="right"></StyledTableCell>
        {tableData &&
          tableData.headers.length > 0 &&
          tableData.headers.map((header) => (
            <StyledTableCell key={header} align="right">
              {header}
            </StyledTableCell>
          ))}
      </>
    ),
    [tableData]
  );

  const renderRows = useCallback(
    () => (
      <>
        {tableData &&
          tableData.rows.length > 0 &&
          tableData.rows.map((row, index) => (
            <StyledTableRow key={index + 1}>
              {row.map((cell, index) => (
                <StyledTableCell
                  color={getColor(cell)}
                  key={`${index}_${cell}`}
                  align={index === 0 ? "left" : "right"}
                >
                  {index === 0 ? (
                    <Link
                      theme="secondary"
                      label={cell}
                      to={`/strategy/builder`}
                      onClick={goToStrategyBuilder(cell)}
                    />
                  ) : (
                    `${getValue(cell)}%`
                  )}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
      </>
    ),
    [tableData, goToStrategyBuilder]
  );

  const renderSectionHeader = useCallback(
    () => (
      <>
        <HeaderTitle component="h2">Factor style portfolios</HeaderTitle>
        <SelectWrapper>
          <Select
            padding="10px 20px 10px 10px"
            fullWidth={true}
            theme="secondary"
            id="dashboard-table-dropdown"
            errorId="dashboard-table-dropdown-error"
            options={SUPPORTED_COINTRIES}
            onChange={onChangeHandler}
            value={country}
          />
        </SelectWrapper>
      </>
    ),
    [country, onChangeHandler]
  );

  const renderSectionContent = useCallback(
    () => (
      <Table
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        theme="primary"
      />
    ),
    [renderHeaders, renderRows]
  );

  return done && historicalPerformance ? (
    <DashboardSection
      width={`${isMobile ? '100%' : '95%'}`}
      renderHeader={renderSectionHeader}
      renderContent={renderSectionContent}
    />
  ) : isLoading ? (
    <HistoricalPerformanceSkeleton />
  ) : error ? (
    <h1>error</h1>
  ) : (
    ""
  );
};

export default DashboardTable;
