import React, {Component} from 'react';
import {getValue, getClass} from '../../../utils/textFunctions';

class ContentBlock extends Component {
  render() {
    return (

      <tr className="_item">
        {
          this.props.description ?
            <td className="_title">{this.props.description}</td> :
            null
        }

        {
          this.props.number || this.props.number===0 ?
            <td className={`_value ${getClass(this.props.number)}`}>{getValue(this.props.number)}{this.props.unit}</td> :
            null
        }

        {
          this.props.number2 || this.props.number2===0 ?
          <td className={`_value ${getClass(this.props.number2)}`}>{getValue(this.props.number2)}{this.props.unit}</td> :
          null
        }

        {
          this.props.number3 || this.props.number3===0 ?
            <td className={`_value ${getClass(this.props.number3)}`}>{getValue(this.props.number3)}{this.props.unit3}</td> :
            null
        }

      </tr>

    );
  }
}

export default ContentBlock;