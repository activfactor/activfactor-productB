import React, {Component} from 'react';
import {getValue, getClass} from '../../../utils/textFunctions';

// class ContentBlock extends Component{
//     render(){
//         return(
//             <div className="dashboard_header-item">
//                 <div className="_header-item-title">{this.props.description}</div>
//                 <div className={`_header-item-value ${getClass(this.props.number)}`}>{getValue(this.props.number)}{this.props.unit}</div>
//               {
//                 this.props.number2 ?
//                   <div className={`_header-item-title ${getClass(this.props.number2)}`}>{getValue(this.props.number2)}{this.props.unit2}</div> :
//                   ''
//               }
//             </div>
//         );
//     }
// }

class ContentBlock extends Component {
  render() {
    return (

      <tr>
        {
          this.props.description ?
            <td>{this.props.description}</td> :
            null
        }

        {
          this.props.number ?
            <td className={`${getClass(this.props.number)}`}>{getValue(this.props.number)}{this.props.unit}</td> :
            null
        }

        {
          this.props.number2 ?
            <td className={`${this.props.number2 ? getClass(this.props.number2) : ''}`}>
              {
                this.props.number2 ?
                  `${getValue(this.props.number2)}${this.props.unit2}` :
                  ''
              }
            </td> :
            null
        }

        {
          this.props.number3 ?
            <td className={`${getClass(this.props.number3)}`}>{getValue(this.props.number3)}{this.props.unit3}</td> :
            null
        }

      </tr>

    );
  }
}

export default ContentBlock;