
import React, { Component } from "react";
import classes from './index.module.scss';
import { connect } from 'react-redux';

class Country extends Component {
    render() {
        return (
            <div className={classes.Country}>
                <div className={classes.CountryHeading}>Country</div>
                <div className={classes.selectBox}>
                <select value={`${this.props.value}`} onChange={this.props.countryChange}>
                
                    <option value='can'>Canada</option>
                    <option value='usa'>United States of America</option>
                </select>
                </div>
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
