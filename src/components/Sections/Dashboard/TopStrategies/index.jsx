import React, { Component } from "react";
import { connect } from "react-redux";
import classes from './index.module.scss';
import Header from '../../../UI/Header';
import DropDown from '../../../UI/DropDown';

class Table extends Component {

  renderTable() {
    if (this.props.data.CAN) {
      const data = this.props.country === 'CAN' ? this.props.data.CAN : this.props.data.USA ;
      return (
        <table>
          <thead>
            <tr className={classes.tbl_row}>
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
            {Object.keys(data).map((item,index) => {
              return (
                <tr className={classes.tbl_row} key={index}>
                  <td>{item}</td>
                  <td className={data[item]["1_month"] > 0 ? classes.success : classes.warning}>{data[item]["1_month"]}%</td>
                  <td className={data[item]["3_months"] > 0 ? classes.success : classes.warning}>{data[item]["3_months"]}%</td>
                  <td className={data[item]["6_months"] > 0 ? classes.success : classes.warning}>{data[item]["6_months"]}%</td>
                  <td className={data[item]["year_to_date"] > 0 ? classes.success : classes.warning}>{data[item]["year_to_date"]}%</td>
                  <td className={data[item]["1_year_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["1_year_annualized_return"]}%</td>
                  {/* <td className={data[item]["2_years_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["2_years_annualized_return"]}%</td> */}
                  <td className={data[item]["3_years_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["3_years_annualized_return"]}%</td>
                  <td className={data[item]["5_years_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["5_years_annualized_return"]}%</td>
                  <td className={data[item]["7_years_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["7_years_annualized_return"]}%</td>
                  <td className={data[item]["10_years_annualized_return"] > 0 ? classes.success : classes.warning}>{data[item]["10_years_annualized_return"]}%</td>
                  {/* <td className={data[item]["since_2008"] > 0 ? classes.success : classes.warning}>{data[item]["since_2008"]}%</td> */}
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
    <div className={classes.container}>
      <Header header="Top Strategies">
        <DropDown value={this.props.country} color="blue" DropDownChangeHandler={this.props.countryChangeHandler}>
          <option>USA</option>
          <option>CAN</option>
        </DropDown>
      </Header>
      <div className={classes.tbl}>
      {this.renderTable()}
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

export default connect(mapStateToProps)(Table);
