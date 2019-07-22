import React, { Component } from "react";
import Selector from "./Selector";
import classes from "./index.module.scss";
import { connect } from "react-redux";

class Sectors extends Component {
  state = { displayClass: "none", flexWrap: "nowrap" };

  onClickHandler = () => {
    this.setState(prevState =>
      prevState.displayClass === "none"
        ? { displayClass: "flex", flexWrap: "wrap" }
        : { displayClass: "none", flexWrap: "nowrap" }
    );
  };

  componentWillReceiveProps(nextProps){
      console.log(nextProps);
  }

  render() {
    return (
      <div className={classes.sectors}>

        <div className="section-title_h3">Sectors</div>

        <div className={classes.multiselect}>
          <div className={classes.selectBox} onClick={this.onClickHandler}>
            <select>
              <option>
                {!this.props.sectorsFromParent
                  ? "Select Sectors"
                  : this.props.sectorsFromParent.split(",").length > 3
                  ? this.props.sectorsFromParent.split(",").slice(0, 2).join(" , ")+" , ..."
                  : this.props.sectorsFromParent.split(",").join(" , ").slice(0, -2)}
              </option>
            </select>
            <div className={classes.overSelect} />
          </div>
          <div
            className={classes.checkboxes}
            style={{
              display: this.state.displayClass,
              flexWrap: this.state.flexWrap
            }}
          >
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("consumers")
                  : false
              }
              id="consumers"
              txtValue="Consumers"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("materials")
                  : false
              }
              id="materials"
              txtValue="Materials"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("financials")
                  : false
              }
              id="financials"
              txtValue="Financials"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("industrials")
                  : false
              }
              id="industrials"
              txtValue="Industrials"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("services")
                  : false
              }
              id="services"
              txtValue="Services"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("technology")
                  : false
              }
              id="technology"
              txtValue="Technology"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("energy")
                  : false
              }
              id="energy"
              txtValue="Energy"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("health")
                  : false
              }
              id="health"
              txtValue="Health"
              onClick={this.props.sectorChange}
            />
            <Selector
              reset={this.props.reset}
              checked={
                this.props.sectors
                  ? this.props.sectors.includes("utilities")
                  : false
              }
              id="utilities"
              txtValue="Utilities"
              onClick={this.props.sectorChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sectors: state.queryReducer.sectors };
};

export default connect(mapStateToProps)(Sectors);
