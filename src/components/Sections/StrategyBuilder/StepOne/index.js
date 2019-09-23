import React, { Component } from "react";
import Factors from "./Factors/index";
import CompanySize from "./CompanySize/index";
import Sectors from "./Sectors";
import Country from "./Country";
import ActionButtons from "./ActionButtons";
import NumberofStock from "./NumberofStock";
import { connect } from 'react-redux';
import { resetQuery, resetFactorScreener } from '../../../../actions/strategyBuilder';
import { getDashboard } from '../../../../actions/dashboard';
import Spinner from '../../../UI/Spinner';
// import Button from "./CompanySize/Button";
// import Modal from '../../../UI/Modal';

class StepOne extends Component {
  state={
    "country":"",
    "sectors":"",
    "factors":"",
    "n_stock":1,
    "firm_size":"",
    activeMonthly: true,
    activeQuarterly: true,
    activeSemesterly: true
  }

  componentWillMount(){
    this.props.getDashboard("CAN");
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

  companySizeChange = (value, active) => {
    if (active){
      if (!this.state.firm_size.includes(value)){
        this.setState(prevState => ({"firm_size": prevState.firm_size+value+','}))
      }
    } else {
      if (this.state.firm_size.includes(value)){
        this.setState(prevState => ({"firm_size": prevState.firm_size.replace(value+',','')}));
      }
    }
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

  stockChange = (event) => {
    this.setState({
      "n_stock": event.target.value,
    });
  }

  buttonDefinition = (size) => {
    return this.props.definition[size];
  }

  getTooltip = (factor) => {
    if (this.props.definition){
      return this.props.definition[factor]
    }
  }

  onClickFrequency = (frequency) => {
    if (frequency === 'monthly') {
      this.setState({activeMonthly: !this.state.activeMonthly})
    }
    if (frequency === 'quarterly') {
      this.setState({activeQuarterly: !this.state.activeQuarterly})
    }
    if (frequency === 'semesterly') {
      this.setState({activeSemesterly: !this.state.activeSemesterly})
    }
  }

  renderHandler(){
    if(this.props.definition){
      return (
      <div className="strategy-builder_build-strategy">
        <div className="row">
          <div className="order-0 col-sm-6 col-md-3 col-lg-2">
            <Factors reset={this.state.reset} factorChange={this.factorChange} getTooltip={this.getTooltip}/>
          </div>

          <div className="order-0 order-sm-1 order-md-0 col-12 col-md-6 col-lg-7">

            <div className="company-size-container">
              <div className="section-title_h3">Rebalancing Frequencies</div>

              <div className="company-size_btn-grid">
                <button className={`btn-company-size ${this.state.activeMonthly ? 'active' : null}`}
                        onClick={() =>this.onClickFrequency('monthly')}>
                  <span className="_title mt-2 mb-2">Monthly</span>
                </button>
                <button className={`btn-company-size ${this.state.activeQuarterly ? 'active' : null}`}
                        onClick={() => this.onClickFrequency('quarterly')}>
                  <span className="_title mt-2 mb-2">Quarterly</span>
                </button>
                <button className={`btn-company-size ${this.state.activeSemesterly ? 'active' : null}`}
                        onClick={() => this.onClickFrequency('semesterly')}>
                  <span className="_title mt-2 mb-2">Semesterly</span>
                </button>
              </div>

            </div>

            <CompanySize reset={this.state.reset} companySizeChange={this.companySizeChange} buttonDefinition={this.buttonDefinition}/>
            <Sectors reset={this.state.reset} sectorChange={this.sectorChange} sectorsFromParent={this.state.sectors} />
          </div>

          <div className="order-0 col-sm-6 col-md-3">
            <Country reset={this.state.reset} countryChange={this.countryChange} value={this.state.country} />

            <NumberofStock stockChange={this.stockChange} value={this.state.n_stock}/>

            <div className="section-title_h3">Muslime</div>
            <div className="can-toggle">
              <input id="a"
                     type="checkbox"/>
              <label htmlFor="a">
                <div className="can-toggle__switch"
                     data-checked="Yes"
                     data-unchecked="No">
                </div>
                <div className="can-toggle__label-text">
                </div>
              </label>
            </div>
          </div>
        </div>

        <ActionButtons onClick={() => this.props.onClick(this.state)} resetFilter={this.onResetFilter}/>
      </div>
      );

    } else {
      return (
        <Spinner color="white" containerClass="fullScreen" />
      );
    }
  }

    render() {
        return (
            <React.Fragment>
              {this.renderHandler()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
  return {
    data: state.queryReducer,
    definition: state.factorDashboard.definition
  }
}

export default connect(mapStateToProps,{resetQuery, resetFactorScreener, getDashboard})(StepOne);