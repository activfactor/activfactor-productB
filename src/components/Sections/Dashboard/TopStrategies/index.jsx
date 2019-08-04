import React, { Component } from "react";
import { connect } from "react-redux";
// import classes from "./index.module.scss";
import Header from "../../../UI/Header";
import DropDown from "../../../UI/DropDown";
import Link from "../../../UI/Link";
import { updateQuery, resetFactorScreener } from "../../../../actions/strategyBuilder";
import { updateLocation } from "../../../../actions";
import { CapString } from '../../../../utils/textFunctions'

class Table extends Component {
  buildStrategy = sector => {
    if (this.props.data.parameters) {
      this.props.resetFactorScreener();
      if (this.props.country === "CAN") {
        this.props.updateQuery(this.props.data.parameters.CAN[sector]);
      } else {
        this.props.updateQuery(this.props.data.parameters.USA[sector]);
      }
    }
    this.props.updateLocation("/strategy-builder");
  };

  renderTable() {
    if (this.props.data.CAN) {
      const data =
        this.props.country === "CAN"
          ? this.props.data.CAN
          : this.props.data.USA;
      return (
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th />
              <th>1 month</th>
              <th>3 months</th>
              <th>6 months</th>
              <th>Year to date</th>
              <th>1 year</th>
              {/* <th>2 years</th> */}
              <th>3 years</th>
              <th>5 years</th>
              <th>7 years</th>
              <th>10 years</th>
              {/* <th>since 2008</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((item, index) => {
              return (
                <tr key={index}>
                  <td className="_td-link" key={index}>
                    <Link
                      to="/strategy-builder"
                      onClick={() => this.buildStrategy(item)}
                    >
                      {CapString(item)}
                    </Link>
                  </td>
                  <td
                    className={
                      data[item]["1_month"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["1_month"]}%
                  </td>
                  <td
                    className={
                      data[item]["3_months"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["3_months"]}%
                  </td>
                  <td
                    className={
                      data[item]["6_months"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["6_months"]}%
                  </td>
                  <td
                    className={
                      data[item]["year_to_date"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["year_to_date"]}%
                  </td>
                  <td
                    className={
                      data[item]["1_year_annualized_return"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["1_year_annualized_return"]}%
                  </td>
                  {/* <td className={data[item]["2_years_annualized_return"] > 0 ? 'text-primary : 'text-danger}>{data[item]["2_years_annualized_return"]}%</td> */}
                  <td
                    className={
                      data[item]["3_years_total_return"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["3_years_total_return"]}%
                  </td>
                  <td
                    className={
                      data[item]["5_years_total_return"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["5_years_total_return"]}%
                  </td>
                  <td
                    className={
                      data[item]["7_years_total_return"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["7_years_total_return"]}%
                  </td>
                  <td
                    className={
                      data[item]["10_years_total_return"] > 0
                        ? 'text-primary'
                        : 'text-danger'
                    }
                  >
                    {data[item]["10_years_total_return"]}%
                  </td>
                  {/* <td className={data[item]["since_2008"] > 0 ? 'text-primary : 'text-danger}>{data[item]["since_2008"]}%</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }

  render() {
    return (
      <div className="dashboard_top-strategies">
        <Header header="Top Strategies">

        <DropDown
          value={this.props.country}
          color="blue"
          DropDownChangeHandler={this.props.countryChangeHandler}
        >
          <option value="USA">USA</option>
          <option value="CAN">CAN</option>
        </DropDown>
      </Header>

        <div className="table-top-strategies">
          <div className="table-responsive">
            {this.renderTable()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.factorDashboard
  };
};

export default connect(
  mapStateToProps,
  { updateQuery, updateLocation, resetFactorScreener }
)(Table);
