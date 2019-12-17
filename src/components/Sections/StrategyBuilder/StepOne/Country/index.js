
import React, { Component } from "react";
import { connect } from 'react-redux';
import DropDown from '../../../../UI/DropDown';

class Country extends Component {

    render() {
        return (
            <div className="country-step-one-container">

                <div className="section-title_h3">Country</div>

                <DropDown value={`${this.props.value}`} color="black" DropDownChangeHandler={this.props.countryChange}>
                    <option value='CAN'>CAN</option>
                    <option value='USA'>USA</option>
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
