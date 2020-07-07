import React, { useMemo, useCallback, useState, useEffect } from "react";
import { StyledTableCell, StyledTableRow, SelectWrapper, Tip } from "./style";
import { HeaderTitle, DateTitle, Date } from "../commonStyle";
import { Table } from "components/MaterialUIs";
import { useSelector, useDispatch } from "react-redux";
import { Select, Link } from "components/MaterialUIs";
import {
  INITIAL_COUNTRY,
} from "../../../../config/appConfig";
import { getValue, getColor } from "utils/textFunctions";
import { DashboardSection } from "components/Layout";
import { updateStrategyFilters } from "store/actions/strategyBuilder.actions";
import { fetchHistoricalPerformanceData } from "store/actions/dashboard.actions";
import { useApiInfo } from "screens/hooks/screens.hooks";
import { FETCH_HISTORICAL_PERFORMANCE } from "store/types";
import { HistoricalPerformanceSkeleton, CountriesDropDownSkeleton } from "../../../Skeleton";
import { FeedBackAlert } from 'components/Custom/common';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { ShowChart } from '@material-ui/icons';

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
      const {portfolios} = historicalPerformance
      const countryPortfolios =
      portfolios[country];
      const data = {};
      data.headers = Object.keys(countryPortfolios[0].performance);
      data.rows = countryPortfolios.map(portfolio => {
        const row = Object.keys(portfolio.performance).map(header => {
          const object = portfolio.performance;
          if (header.includes('Ratio')){
            return {value: object[header]};
          }
          return {value: object[header], unit: '%'}
        })
        return [{value: portfolio.name}, ...row]
    })
    return data;
  }
  }, [historicalPerformance, country]);

  const [isLoading, error, done] = useApiInfo(FETCH_HISTORICAL_PERFORMANCE);

  useEffect(() => {
    if (!historicalPerformance) {
      if (selectOptions){
        const {countries} = selectOptions;
        if (countries && countries.length>0){
          const transformedCountries = countries.map(country => country.value.toLowerCase());
          dispatch(fetchHistoricalPerformanceData(transformedCountries.join(',')));
        }
      }
    }
  }, [dispatch, historicalPerformance, selectOptions]);

  const onChangeHandler = useCallback(
    (e) => {
      setCountry(e.target.value);
    },
    [setCountry]
  );

  const goToStrategyBuilder = useCallback(
    (cell) => () => {
      // TODO need to talk about sending the whole filters and what will happened if no filters returned
      const extractedFilters = historicalPerformance.portfolios[country].filter(portfolio => portfolio.name === cell)[0].filters
      console.log(extractedFilters);
      if (extractedFilters){
        dispatch(
          updateStrategyFilters({
            sectors: selectOptions.sectors,
            nStocks: extractedFilters.nstocks,
            firmSizes: extractedFilters.firm_size.split(','),
            rebalancingFreq: extractedFilters.rebalancing,
            country: extractedFilters.country,
            factors: extractedFilters.factors.split(',')
          })
        );
      } else {
        dispatch(
          updateStrategyFilters({
            sectors: selectOptions.sectors,
            country
          })
        )
      }
    },
    [country, dispatch, selectOptions, historicalPerformance]
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
                  color={getColor(cell.value)}
                  key={`${index}_${cell.value}`}
                  align={index === 0 ? "left" : "right"}
                >
                  {index === 0 ? (
                    <Link
                      theme="secondary"
                      label={cell.value}
                      to={`/strategy/builder`}
                      onClick={goToStrategyBuilder(cell.value)}
                    />
                  ) : (
                    `${getValue(cell.value)}${cell.unit || ''}`
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
        <div>
          <HeaderTitle component="h2">
            Top quantile factor portfolios
          </HeaderTitle>
          {historicalPerformance && historicalPerformance.lastRebalancing && (
            <div>
              <ShowChart />
              <DateTitle component="span">
                Rebalancing:{" "}
                <Date component="span">
                  last: {historicalPerformance.lastRebalancing}
                </Date>
              </DateTitle>
            </div>
          )}
        </div>
        <SelectWrapper>
          {selectOptions.countries.length > 0 ? (
            <Select
              padding="10px 20px 10px 10px"
              fullWidth={true}
              theme="secondary"
              id="dashboard-table-dropdown"
              errorId="dashboard-table-dropdown-error"
              options={selectOptions.countries}
              onChange={onChangeHandler}
              value={country}
            />
          ) : (
            <CountriesDropDownSkeleton height="39px" />
          )}
        </SelectWrapper>
      </>
    ),
    [country, onChangeHandler, selectOptions, historicalPerformance]
  );

  const renderSectionContent = useCallback(
    () => (
      <>
      <Table
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        theme="primary"
        maxHeight="485px"
      />
      <Tip component="span">Monthly rebalanced single-factor equaly weighted portfolios including the top 20% (quantile) of all the stock in the country universe</Tip>
      </>
    ),
    [renderHeaders, renderRows]
  );

  // check if historical performance and portolios object is inside show the table
  return done && historicalPerformance && historicalPerformance.portfolios ? (
    <DashboardSection
      width={`${isMobile ? '100%' : '95%'}`}
      renderHeader={renderSectionHeader}
      renderContent={renderSectionContent}
    />
  ) : isLoading || !selectOptions.countries.length>0 ? (
    <HistoricalPerformanceSkeleton />
  ) : error ? (
    <FeedBackAlert isError={true} message={error} />
  ) : (
    <FeedBackAlert />
  );
};

export default DashboardTable;
