import React, {Component} from 'react';
// import ContentBlock from '../../../UI/ContentBlock';
import {getClass} from '../../../../utils/textFunctions';


class Header extends Component {
  render() {
    return (
      <div className="card__list-item">
        <div className="_header" style={{margin: 0}}>
          <div className="_title" style={{lineHeight: 1}}>{this.props.watchListName}</div>
        </div>

        <div className="_table">
          <table className="table">
            <thead>
              <tr>
                <th>{this.props.descriptionID}</th>
                <th>{this.props.descriptionWTD}</th>
                <th>{this.props.descriptionMTD}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${getClass(this.props.numberID)}`}>{this.props.numberID}%</td>
                <td className={`${getClass(this.props.numberWTD)}`}>{this.props.numberWTD}%</td>
                <td className={`${getClass(this.props.numberMTD)}`}>{this.props.numberMTD}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*<div className="_strategy-list-item">*/}
        {/*  <ContentBlock number={this.props.numberID}*/}
        {/*                unit="%"*/}
        {/*                description={this.props.descriptionID}/>*/}
        {/*</div>*/}

        {/*<div className="_strategy-list-item">*/}
        {/*  <ContentBlock number={this.props.numberWTD}*/}
        {/*                unit="%"*/}
        {/*                description={this.props.descriptionWTD}/>*/}
        {/*</div>*/}

        {/*<div className="_strategy-list-item">*/}
        {/*  <ContentBlock number={this.props.numberMTD}*/}
        {/*                unit="%"*/}
        {/*                description={this.props.descriptionMTD}/>*/}
        {/*</div>*/}

      </div>
    );
  }
}

export default Header;