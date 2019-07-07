import React, { Component } from "react";
import classes from './index.module.scss';
import Factors from "./Factors/index";
import CompanySize from "./CompanySize/index";
import Sectors from "./Sectors";
import Country from "./Country";
import ActionButtons from "./ActionButtons";
import NumberofStock from "./NumberofStock";
import { connect } from 'react-redux';
import { resetQuery } from '../../../../actions/index';

class StepOne extends Component {
  state={
    "country":"can",
    "sectors":"",
    "factors":"",
    "n_stock":1,
    "firm_size":"",
    reset:false
  }

  componentDidMount(){
    if(this.props.data.country){
      const {country, sectors, factors, n_stock, firm_size} = this.props.data;
      this.setState({
        "country":country,
        "sectors":sectors === '' ? '' : sectors +',',
        "factors":factors === '' ? '' : factors +',',
        "n_stock":n_stock,
        "firm_size":firm_size === '' ? '' : firm_size +',',
      })
    }
  }

  onResetFilter = () => {
    this.props.resetQuery();
    this.setState(prevState => ({reset:!prevState.reset}));
    this.setState({
      "country":"can",
      "sectors":"",
      "factors":"",
      "n_stock":1,
      "firm_size":"",
    })
  }

  factorChange = (e) => {
    e.persist();
    if (e.target.checked){
      this.setState(prevState => ({"factors":`${prevState.factors}${e.target.value},`}));
    } else (
      this.setState(prevState => ({"factors":`${prevState.factors}`.replace(`${e.target.value},`,'')}))
    )
  }

  companySizeChange = (value) => {
    this.setState(prevState => ({"firm_size":`${this.state.firm_size.includes(value) ? prevState.firm_size.replace(value+',','') : prevState.firm_size+value+','}`}));
  }

  sectorChange = (value,checked) => {
    if (checked){
      this.setState(prevState => ({"sectors":`${prevState.sectors}${value},`}));
    } else (
      this.setState(prevState => ({"sectors":`${prevState.sectors}`.replace(`${value},`,'')}))
    )
  }

  countryChange = (e) => {
      this.setState({ country: e.target.value });
  }

  stockChange = value => {
    this.setState({
      "n_stock": value
    });
  }

    render() {
        return (

            <section className={classes.container}>

              <div className={classes.strategy}>
                <div className={classes.factorsContainer}>
                  <Factors reset={this.state.reset} factorChange={this.factorChange}/>
                </div>
                <div className={classes.Company_SectorContainer}>
                  <CompanySize reset={this.state.reset} companySizeChange={this.companySizeChange}/>
                  <Sectors reset={this.state.reset} sectorChange={this.sectorChange} />
                </div>

                <div className={classes.CountryContainer}>
                  <Country reset={this.state.reset} countryChange={this.countryChange} value={this.state.country} />
                  <NumberofStock stockChange={this.stockChange} value={this.state.n_stock}/>
                </div>
                  <ActionButtons onClick={() => this.props.onClick(this.state)} resetFilter={this.onResetFilter}/>
              </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
  return {data: state.queryReducer}
}

export default connect(mapStateToProps,{resetQuery})(StepOne);