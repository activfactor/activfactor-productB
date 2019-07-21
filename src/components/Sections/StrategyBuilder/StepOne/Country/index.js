
import React, { Component } from "react";
import classes from './index.module.scss';
import { connect } from 'react-redux';
import DropDown from '../../../../UI/DropDown';

class Country extends Component {
    render() {
        return (
            <div className={classes.Country}>
                <div className={classes.CountryHeading}>Country</div>
                <DropDown value={`${this.props.value}`} color="black" DropDownChangeHandler={this.props.countryChange}>
                    <option value='can'>Canada</option>
                    <option value='usa'>USA</option>
                </DropDown>
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        country: state.queryReducer.country
    }
}
export default connect(mapStateToProps)(Country);
