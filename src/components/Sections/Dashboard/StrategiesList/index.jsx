import React, { Component } from "react";
import { connect } from "react-redux";
import Strategy from "./Strategy";

class StrategyList extends Component {
  renderStrategies() {
    if (this.props.user_strategies) {
      if (
        this.props.user_strategies !== "Your are not following any strategy"
      ) {
        const strategies = this.props.user_strategies;
        return Object.keys(strategies).map((strategy, index) => {
            if (this.props.location==='/dashboard'){
                if (index < 3) {
                    return (
                      <Strategy
                        key={index}
                        strategyName={strategy}
                        strategy_perf_1d={strategies[strategy]["strategy_perf_1d"]}
                        benchmark_perf_1d={strategies[strategy]["benchmark_perf_1d"]}
                        descriptionID="1 Day"
                        strategy_perf_wtd={strategies[strategy]["strategy_perf_wtd"]}
                        benchmark_perf_wtd={strategies[strategy]["benchmark_perf_wtd"]}
                        descriptionWTD="WTD"
                        strategy_perf_mtd={strategies[strategy]["strategy_perf_mtd"]}
                        benchmark_perf_mtd={strategies[strategy]["benchmark_perf_mtd"]}
                        descriptionMTD="MTD"
                        benchmark_name={strategies[strategy]["benchmark_name"]}
                        tickerCount={strategies[strategy]["number_of_tickers"]}
                        lastUpdate={strategies[strategy]["last_update"]}
                        lastRebalancing={strategies[strategy]["last_rebalancing"]}
                        nextRebalancing={strategies[strategy]["next_rebalancing"]}
                      />
                    );
                  }
            } else {
                return (
                    <Strategy
                      key={index}
                      strategyName={strategy}
                      strategy_perf_1d={strategies[strategy]["strategy_perf_1d"]}
                      benchmark_perf_1d={strategies[strategy]["benchmark_perf_1d"]}
                      descriptionID="1 Day"
                      strategy_perf_wtd={strategies[strategy]["strategy_perf_wtd"]}
                      benchmark_perf_wtd={strategies[strategy]["benchmark_perf_wtd"]}
                      descriptionWTD="WTD"
                      strategy_perf_mtd={strategies[strategy]["strategy_perf_mtd"]}
                      benchmark_perf_mtd={strategies[strategy]["benchmark_perf_mtd"]}
                      descriptionMTD="MTD"
                      benchmark_name={strategies[strategy]["benchmark_name"]}
                      tickerCount={strategies[strategy]["number_of_tickers"]}
                      lastUpdate={strategies[strategy]["last_update"]}
                    />
                  );
            }

          return null;
        });
      } else {
        return <div>{this.props.user_strategies}</div>;
      }
    }
  }

  render() {
    return <React.Fragment>{this.renderStrategies()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    user_strategies: state.factorDashboard.user_strategies,
    location: state.toggle.location
  };
};

export default connect(mapStateToProps)(StrategyList);
