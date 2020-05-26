import React, { useCallback, useMemo } from "react";
import { Table, ExpandPanel, Tooltip } from "../../../../MaterialUIs";
import { useSelector } from "react-redux";
import { Cell, Row, Title, HelpIcon } from "./style";
import { getColor, getValue } from "utils/app.utils";
import PropTypes from "prop-types";

const ReturnTable = ({ keyToExtract, title, theme, tableFirstHeader }) => {
  const { strategyResults, metrics } = useSelector((state) => ({
    ...state.strategyBuilder,
    ...state.appConfig.descriptions,
  }));

  const tableData = useMemo(() => {
    if (strategyResults && keyToExtract) {
      const {
        benchmarkName,
        strategy: { historical: strategyHistorical },
        benchmark: { historical: benchmarkHistorical },
      } = strategyResults;
      const headers = [tableFirstHeader, "Strategy", benchmarkName];
      const strategyData = strategyHistorical[keyToExtract];
      const benchmarkData = benchmarkHistorical[keyToExtract];
      if (benchmarkData && strategyData) {
        const rows = Object.keys(strategyData).map((obj) => {
          return [obj, strategyData[obj], benchmarkData[obj]];
        });
        return {
          headers,
          rows,
        };
      }
    }
  }, [keyToExtract, strategyResults, tableFirstHeader]);

  const renderHeaders = useCallback(
    () => (
      <>
        {tableData &&
          tableData.headers.length > 0 &&
          tableData.headers.map((header, index) => (
            <Cell key={header} align={index === 0 ? "left" : "right"}>
              {header}
            </Cell>
          ))}
      </>
    ),
    [tableData]
  );

  const getRowValue = useCallback((value, description, index) => {
    if (index === 0) {
      return value.replace(/_/g, " ");
    }
    const noPercentageKeys = ["Ratio", "Number"];
    let formatedValue = getValue(value);
    const withPercentage = noPercentageKeys.filter(
      (key) => description.indexOf(key) > 0
    );
    if (withPercentage.length === 0) {
      formatedValue = `${formatedValue}%`;
    }
    return formatedValue;
  }, []);

  const renderRows = useCallback(
    () => (
      <>
        {tableData &&
          tableData.rows.length > 0 &&
          tableData.rows.map((row, index) => (
            <Row key={`${row[0]}_${index * 100}`}>
              {row.map((cell, cellIndex) => {
                const cellValue = getRowValue(cell, row[0], cellIndex);
                const tooltipDescription = metrics[cellValue];
                if (tooltipDescription) {
                  return (
                    <Cell
                      color={cellIndex === 0 ? "#000" : getColor(cell)}
                      align={cellIndex === 0 ? "left" : "right"}
                      key={`${index}_${cell}`}
                    >
                      {cellValue}
                      <Tooltip title={tooltipDescription} arrow={true}>
                        <HelpIcon color="primary" />
                      </Tooltip>
                    </Cell>
                  );
                }
                return (
                  <Cell
                    color={cellIndex === 0 ? "#000" : getColor(cell)}
                    key={`${index}_${cell}`}
                    align={cellIndex === 0 ? "left" : "right"}
                  >
                    {getRowValue(cell, row[0], cellIndex)}
                  </Cell>
                );
              })}
            </Row>
          ))}
      </>
    ),
    [tableData, getRowValue, metrics]
  );

  const renderDetails = useCallback(() => {
    return (
      <Table
        theme="primary"
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        minWidth="auto"
      />
    );
  }, [renderHeaders, renderRows]);

  const renderSummary = useCallback(() => {
    return <Title>{title}</Title>;
  }, [title]);

  return (
    <ExpandPanel
      theme={theme}
      renderSummary={renderSummary}
      renderDetails={renderDetails}
    />
  );
};

ReturnTable.propTypes = {
  theme: PropTypes.oneOf(["light", "main", "dark", "default"]),
  keyToExtract: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tableFirstHeader: PropTypes.string.isRequired,
};

export default ReturnTable;
