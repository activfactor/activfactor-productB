import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineGraph from '../../../UI/Charts/LineChart';
import BarChart from '../../../UI/Charts/BarChart';
import AreaChart from '../../../UI/Charts/AreaChart';

class ChartsHistoricalTab extends Component {
  state = {
    sector: '1d',
    firm_size: '1d',
    factor: '1d'
  };

  fakeStrategy = {
    'Apr-2008': 72382.81,
    'Apr-2009': 63017.37,
    'Apr-2010': 179854.43,
    'Apr-2011': 325440.64,
    'Apr-2012': 310594.32,
    'Apr-2013': 427238.45,
    'Apr-2014': 392910.52,
    'Apr-2015': 522036.24,
    'Apr-2016': 948114.67,
    'Apr-2017': 743460.28,
    'Apr-2018': 780487.88,
    'Apr-2019': 450827.27,
    'Aug-2008': 76758.22,
    'Aug-2009': 84534.19,
    'Aug-2010': 144467.26,
    'Aug-2011': 278611.67,
    'Aug-2012': 307327.39,
    'Aug-2013': 328840.22,
    'Aug-2014': 373442.79,
    'Aug-2015': 741388.97,
    'Aug-2016': 825367.81,
    'Aug-2017': 987637.41,
    'Aug-2018': 663772.73,
    'Aug-2019': 423559.78,
    'Dec-2007': 100000,
    'Dec-2008': 61074.33,
    'Dec-2009': 123761.45,
    'Dec-2010': 255695.86,
    'Dec-2011': 259140.15,
    'Dec-2012': 349969.83,
    'Dec-2013': 307753.53,
    'Dec-2014': 350551.14,
    'Dec-2015': 673261.74,
    'Dec-2016': 693216.01,
    'Dec-2017': 924541.93,
    'Dec-2018': 463787.21,
    'Feb-2008': 90086.93,
    'Feb-2009': 57540.32,
    'Feb-2010': 141238.22,
    'Feb-2011': 268220.31,
    'Feb-2012': 312643.99,
    'Feb-2013': 405527.57,
    'Feb-2014': 398975.77,
    'Feb-2015': 496753.48,
    'Feb-2016': 565356.19,
    'Feb-2017': 895570.74,
    'Feb-2018': 1002051.43,
    'Feb-2019': 504572.78,
    'Jan-2008': 87523.86,
    'Jan-2009': 59888.42,
    'Jan-2010': 120832.2,
    'Jan-2011': 212625.55,
    'Jan-2012': 295398.59,
    'Jan-2013': 423463.52,
    'Jan-2014': 416956.39,
    'Jan-2015': 480207.05,
    'Jan-2016': 674696.65,
    'Jan-2017': 859090.23,
    'Jan-2018': 1023691.97,
    'Jan-2019': 529592.92,
    'Jul-2008': 80472.14,
    'Jul-2009': 81186.29,
    'Jul-2010': 152310.8,
    'Jul-2011': 340974.02,
    'Jul-2012': 367409.68,
    'Jul-2013': 337027.13,
    'Jul-2014': 399881.21,
    'Jul-2015': 809886.85,
    'Jul-2016': 761877.86,
    'Jul-2017': 1004377.03,
    'Jul-2018': 679525.7,
    'Jul-2019': 477933.46,
    'Jun-2008': 88173.76,
    'Jun-2009': 70305.66,
    'Jun-2010': 145744.11,
    'Jun-2011': 297724.55,
    'Jun-2012': 339313.6,
    'Jun-2013': 355861,
    'Jun-2014': 389305.84,
    'Jun-2015': 746343.66,
    'Jun-2016': 744947.27,
    'Jun-2017': 1074481.19,
    'Jun-2018': 683821.99,
    'Jun-2019': 477622.71,
    'Mar-2008': 75942.62,
    'Mar-2009': 60496.67,
    'Mar-2010': 170202.14,
    'Mar-2011': 290572,
    'Mar-2012': 301863.17,
    'Mar-2013': 486836.42,
    'Mar-2014': 428957.36,
    'Mar-2015': 516028.14,
    'Mar-2016': 619165.47,
    'Mar-2017': 851744.02,
    'Mar-2018': 698142.87,
    'Mar-2019': 536749.64,
    'May-2008': 81789.19,
    'May-2009': 63721.04,
    'May-2010': 175567.85,
    'May-2011': 352486.19,
    'May-2012': 303437.15,
    'May-2013': 406415.07,
    'May-2014': 407329.26,
    'May-2015': 585788.76,
    'May-2016': 778808.49,
    'May-2017': 892896.37,
    'May-2018': 804117.34,
    'May-2019': 477438.04,
    'Nov-2008': 54175.86,
    'Nov-2009': 125449.52,
    'Nov-2010': 236674.58,
    'Nov-2011': 278271.31,
    'Nov-2012': 355656.86,
    'Nov-2013': 313384.21,
    'Nov-2014': 351176.51,
    'Nov-2015': 670248.42,
    'Nov-2016': 714879.01,
    'Nov-2017': 894925.69,
    'Nov-2018': 516670.27,
    'Oct-2008': 54132.54,
    'Oct-2009': 80094.69,
    'Oct-2010': 226186.11,
    'Oct-2011': 268292.71,
    'Oct-2012': 303598.86,
    'Oct-2013': 328494.96,
    'Oct-2014': 318946.66,
    'Oct-2015': 655468.8,
    'Oct-2016': 925844.29,
    'Oct-2017': 985062.09,
    'Oct-2018': 534025.42,
    'Sep-2008': 62557.37,
    'Sep-2009': 93113.14,
    'Sep-2010': 208492.52,
    'Sep-2011': 203687.11,
    'Sep-2012': 294849.58,
    'Sep-2013': 325429.02,
    'Sep-2014': 384403.28,
    'Sep-2015': 683762.42,
    'Sep-2016': 900401.25,
    'Sep-2017': 967034.81,
    'Sep-2018': 593199.9
  };
  fakeBenchmark = {
    'Apr-2008': 100751.1,
    'Apr-2009': 67409.33,
    'Apr-2010': 88271.61,
    'Apr-2011': 100807.48,
    'Apr-2012': 88864.39,
    'Apr-2013': 90048.51,
    'Apr-2014': 105919.14,
    'Apr-2015': 110058.49,
    'Apr-2016': 100855.92,
    'Apr-2017': 112672.5,
    'Apr-2018': 112830.1,
    'Apr-2019': 119862.5,
    'Aug-2008': 99553.25,
    'Aug-2009': 78566.63,
    'Aug-2010': 86126.04,
    'Aug-2011': 92305.42,
    'Aug-2012': 86381.94,
    'Aug-2013': 91475.52,
    'Aug-2014': 112958.78,
    'Aug-2015': 100187.95,
    'Aug-2016': 105529.49,
    'Aug-2017': 109967.4,
    'Aug-2018': 117565.12,
    'Aug-2019': 118860.56,
    'Dec-2007': 100000,
    'Dec-2008': 64972.42,
    'Dec-2009': 84913,
    'Dec-2010': 97181.4,
    'Dec-2011': 86423.87,
    'Dec-2012': 89882.24,
    'Dec-2013': 98471.06,
    'Dec-2014': 105778.18,
    'Dec-2015': 94049.78,
    'Dec-2016': 110514.64,
    'Dec-2017': 117176.19,
    'Dec-2018': 103540.79,
    'Feb-2008': 98189.85,
    'Feb-2009': 58721.47,
    'Feb-2010': 84070.82,
    'Feb-2011': 102193.29,
    'Feb-2012': 91403.95,
    'Feb-2013': 92689.28,
    'Feb-2014': 102721.73,
    'Feb-2015': 110129.33,
    'Feb-2016': 92968.32,
    'Feb-2017': 111321.4,
    'Feb-2018': 111635.86,
    'Feb-2019': 115657.38,
    'Jan-2008': 95098.71,
    'Jan-2009': 62855.76,
    'Jan-2010': 80201.11,
    'Jan-2011': 97967.92,
    'Jan-2012': 90017.43,
    'Jan-2013': 91701.79,
    'Jan-2014': 99000.95,
    'Jan-2015': 106075.29,
    'Jan-2016': 92691.44,
    'Jan-2017': 111225.98,
    'Jan-2018': 115315.44,
    'Jan-2019': 112343.58,
    'Jul-2008': 98263.59,
    'Jul-2009': 77981.08,
    'Jul-2010': 84676.61,
    'Jul-2011': 93584.23,
    'Jul-2012': 84324.56,
    'Jul-2013': 90266.1,
    'Jul-2014': 110826.21,
    'Jul-2015': 104594.78,
    'Jul-2016': 105418.89,
    'Jul-2017': 109475.83,
    'Jul-2018': 118802.01,
    'Jul-2019': 118603.93,
    'Jun-2008': 104582.49,
    'Jun-2009': 75000.55,
    'Jun-2010': 81647.65,
    'Jun-2011': 96152.71,
    'Jun-2012': 83832.26,
    'Jun-2013': 87681.72,
    'Jun-2014': 109491.01,
    'Jun-2015': 105206.35,
    'Jun-2016': 101672.8,
    'Jun-2017': 109752.7,
    'Jun-2018': 117672.11,
    'Jun-2019': 118427.54,
    'Mar-2008': 96508.37,
    'Mar-2009': 63040.1,
    'Mar-2010': 87020.99,
    'Mar-2011': 102045.82,
    'Mar-2012': 89583.68,
    'Mar-2013': 92169.51,
    'Mar-2014': 103630.42,
    'Mar-2015': 107730.02,
    'Mar-2016': 97551.53,
    'Mar-2017': 112395.63,
    'Mar-2018': 111090.79,
    'Mar-2019': 116402.69,
    'May-2008': 106373.12,
    'May-2009': 74965.84,
    'May-2010': 84372.99,
    'May-2011': 99781.69,
    'May-2012': 83229.36,
    'May-2013': 91450.22,
    'May-2014': 105574.32,
    'May-2015': 108537.49,
    'May-2016': 101682.2,
    'May-2017': 110965.01,
    'May-2018': 116109.19,
    'May-2019': 115935.69,
    'Nov-2008': 67017.52,
    'Nov-2009': 82752.24,
    'Nov-2010': 93637.01,
    'Nov-2011': 88223.9,
    'Nov-2012': 88479.09,
    'Nov-2013': 96835.86,
    'Nov-2014': 106590,
    'Nov-2015': 97373.69,
    'Nov-2016': 109034.86,
    'Nov-2017': 116152.56,
    'Nov-2018': 109865.47,
    'Oct-2008': 70575.65,
    'Oct-2009': 78874.58,
    'Oct-2010': 91636.73,
    'Oct-2011': 88570.89,
    'Oct-2012': 89805.62,
    'Oct-2013': 96589.34,
    'Oct-2014': 105640.1,
    'Oct-2015': 97803.1,
    'Oct-2016': 106897.95,
    'Oct-2017': 115849.67,
    'Oct-2018': 108632.92,
    'Sep-2008': 84962.16,
    'Sep-2009': 82374.89,
    'Sep-2010': 89413.8,
    'Sep-2011': 84028.89,
    'Sep-2012': 89043.67,
    'Sep-2013': 92439.15,
    'Sep-2014': 108150.02,
    'Sep-2015': 96196.81,
    'Sep-2016': 106454.09,
    'Sep-2017': 113025.29,
    'Sep-2018': 116193.04
  };

  componentDidUpdate() {
    console.log(this.state.sector);
  }

  render() {
    return (
      <div className="charts-card-container">

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <LineGraph
            header="Historical Performance"
            strategy={this.fakeStrategy}
            benchmark={this.fakeBenchmark}
            benchmark_name='S&P TSX'
            chartName="Historical Performance"/>
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <BarChart
            header="Annual Return"
            strategy={this.fakeStrategy}
            benchmark={this.fakeBenchmark}
            benchmark_name='S&P TSX'
            chartName="Annual Return"
          />
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <AreaChart
            header="Drawdown"
            strategy={this.fakeStrategy}
            benchmark={this.fakeBenchmark}
            benchmark_name='S&P TSX'
            chartName="Drawdown"/>
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <div className="card__table _full-height-table">
            <div className="table-responsive">
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th className="_font-title _normal" scope="col">Return</th>
                    <th scope="col">Strategy</th>
                    <th scope="col">S&amp;P TSX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Return" className="_td-title">1 month</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">0.33%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">0.22%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">3 months</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">12.73%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">2.52%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">6 months</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">25.71%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">2.77%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">Year to date</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">36.76%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">14.80%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">1 year</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-3.60%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">1.10%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">2 years</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-38.09%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">3.96%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">3 years</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-19.94%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">4.05%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">5 years</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-2.29%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">1.02%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">7 years</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">6.17%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">4.67%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">10 years</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">14.34%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">4.23%</td>
                  </tr>
                  <tr>
                    <td data-label="Return" className="_td-title">Since 2008</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">6.70%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">1.49%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <div className="card__table _full-height-table">
            <div className="table-responsive">
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th className="_font-title _normal" scope="col">Metrics</th>
                    <th scope="col">Strategy</th>
                    <th scope="col">S&amp;P TSX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Sharpe ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">0.12</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">0.06</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Sortino ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">0.24</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">0.07</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Excess return</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">5.38%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">---</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Traking error</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">47.78%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">---</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Information ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">0.11</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">---</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Upside ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">126.82%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">100.00%</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Hit ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">49.64%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">60.71%</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Best month</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">56.63%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">11.21%</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Turnover</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">570.00%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">---</td>
                  </tr>
                  <tr>
                    <td data-label="Metrics" className="_td-title">Yearly avg # of trades</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">11.00%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">---</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 _card-row-item">
          <div className="card__table _full-height-table">
            <div className="table-responsive">
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th className="_font-title _normal" scope="col">Risk</th>
                    <th scope="col">Strategy</th>
                    <th scope="col">S&amp;P TSX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Risk" className="_td-title">Annualized volatility</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">50.03%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">12.87%</td>
                  </tr>
                  <tr>
                    <td data-label="Risk" className="_td-title">Beta</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">1.21</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">1.00</td>
                  </tr>
                  <tr>
                    <td data-label="Risk" className="_td-title">Downside ratio</td>
                    <td data-label="Strategy" className="_td-strategy text-primary">91.03%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-primary">100.00%</td>
                  </tr>
                  <tr>
                    <td data-label="Risk" className="_td-title">Max drawdown</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-74.95%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">-44.80%</td>
                  </tr>
                  <tr>
                    <td data-label="Risk" className="_td-title">Worst month</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-30.33%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">-16.93%</td>
                  </tr>
                  <tr>
                    <td data-label="Risk" className="_td-title">Value at risk 95</td>
                    <td data-label="Strategy" className="_td-strategy text-danger">-18.35%</td>
                    <td data-label="[object Object]" className="_td-benchmark text-danger">-5.77%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.strategyMonitor.data.actual_performance
  };
};

export default connect(mapStateToProps)(ChartsHistoricalTab);