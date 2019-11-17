import React, {useState} from "react";
import { connect } from 'react-redux';

const RebalancingFreq = (props) => {
    const {rebalancing} = props.data
  const [activeMonthly, setActiveMonthly] = useState(rebalancing==='monthly' ? true : false );
  const [activeQuarterly, setActiveQuarterly] = useState(rebalancing==='quarterly' ? true : false);
  const [activeSemesterly, setActiveSemesterly] = useState(rebalancing==='semesterly' ? true : false);

  const onClickFrequency = (frequency) => {
        props.onRebalancingFreqClick(frequency);
      switch(frequency){
            case 'monthly':
                setActiveMonthly(true);
                setActiveQuarterly(false);
                setActiveSemesterly(false);
                return;
            case 'quarterly':
                setActiveMonthly(false);
                setActiveQuarterly(true);
                setActiveSemesterly(false);
                return;
            case 'semesterly':
                setActiveMonthly(false);
                setActiveQuarterly(false);
                setActiveSemesterly(true);
                return;
            default:
                return;
      }
  }

  return (
    <div className="company-size-container">
      <div className="section-title_h3">Rebalancing Frequencies</div>

      <div className="company-size_btn-grid">
        <button
          className={`btn-company-size ${
            activeMonthly ? "active" : null
          }`}
          onClick={() => onClickFrequency("monthly")}
        >
          <span className="_title mt-2 mb-2">Monthly</span>
          <span className="_description">
            Rebalancing occurs at the beginning of each month
          </span>
        </button>
        <button
          className={`btn-company-size ${
            activeQuarterly ? "active" : null
          }`}
          onClick={() => onClickFrequency("quarterly")}
        >
          <span className="_title mt-2 mb-2">Quarterly</span>
          <span className="_description">
            Rebalancing occurs four times per year: the first of January, April,
            July, and August
          </span>
        </button>
        <button
          className={`btn-company-size ${
            activeSemesterly ? "active" : null
          }`}
          onClick={() => onClickFrequency("semesterly")}
        >
          <span className="_title mt-2 mb-2">Semesterly</span>
          <span className="_description">
            Rebalancing occurs twice per year: the first of January and July
          </span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        data: state.queryReducer
    }
}

export default connect(mapStateToProps)(RebalancingFreq);
